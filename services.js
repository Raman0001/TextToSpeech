const speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (
        voiceSelect.options[i] = new Option(voice.name, i)));
};
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});

document.querySelector(".save-btn").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
document.querySelector(".cancel-btn").addEventListener("click", () => {
    window.speechSynthesis.cancel(speech);
})