function startListening(callback) {
  const recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition ||
    window.mozSpeechRecognition ||
    window.msSpeechRecognition)();
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    let numbers = transcript.replace(/[^0-9+\-*/().]/g, "");
    callback(numbers);
  };

  recognition.start();
}
