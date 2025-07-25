if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(() => {
    console.log("Service Worker enregistré.");
  });
}

if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'fr-FR';

  recognition.onresult = function(event) {
    const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log("Entendu :", transcript);

    if (transcript.includes("test")) {
      document.getElementById("popup").style.display = "block";
    }
  };

  recognition.start();
} else {
  alert("Reconnaissance vocale non supportée sur ce navigateur.");
}