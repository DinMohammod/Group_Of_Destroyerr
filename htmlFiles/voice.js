
document.addEventListener('DOMContentLoaded', function() {
  const micBtn = document.getElementById('micBtn');
  const status = document.getElementById('status');
  const resultBox = document.getElementById('result');
  const notification = document.getElementById('notification');

  let recognition;
  let isListening = false;

  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'bn-BD';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => {
      isListening = true;
      micBtn.classList.add('listening');
      status.textContent = 'শুনছি... কথা বলুন';
      resultBox.textContent = '';
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.trim();
      resultBox.textContent = `আপনি বলেছেন: "${transcript}"`;
      handleCommand(transcript);
    };

    recognition.onerror = () => {
      status.textContent = 'ভয়েস চেনা যায়নি।';
      stopListening();
    };

    recognition.onend = () => {
      stopListening();
    
    };
  } else {
    status.textContent = 'ভয়েস সাপোর্ট নেই।';
    micBtn.style.display = 'none';
  }

  // AUTO START AFTER 1 SECOND
//   setTimeout(autoStartListening, 1000);

//   function autoStartListening() {
//     if (!isListening) recognition.start();
//   }

  micBtn.addEventListener('click', () => {
    if (isListening) recognition.stop();
    else recognition.start();
  });

  function stopListening() {
    isListening = false;
    micBtn.classList.remove('listening');
  }

  
  const validCommands = {
    'হাসপাতাল কোথায়': 'events.html',
    'মানসিক স্বাস্থ্য': 'anonymous.html',
    'ইভেন্ট দেখাও': 'events.html',
    'ভলান্টিয়ার': 'volunteer.html',
    'স্বাস্থ্য টিপস': null,
    'হোম পেজ': 'index.html',
    'ডাটা দেখাও': 'datas.html'
  };

  function handleCommand(command) {
    command = command.toLowerCase();
    let found = false;

    for (let key in validCommands) {
      if (command.includes(key)) {
        speak(`"${key}" কমান্ড পাওয়া গেছে। পেজে যাচ্ছি...`);
        setTimeout(() => {
          if (validCommands[key]) {
            window.location.href = validCommands[key];
          } else {
            showNotification('স্বাস্থ্য টিপস: প্রতিদিন ৮ গ্লাস পানি পান করুন।');
          }
        }, 2000);
        found = true;
        break;
      }
    }

    
    if (!found) {
      speak('দুঃখিত, বুঝতে পারিনি। অনুমোদিত কমান্ড দেখতে যাচ্ছি...');
      setTimeout(() => {
        window.location.href = 'voice.html';
      }, 2500);
    }
  }

  function speak(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'bn-BD';
      utter.rate = 0.9;
      window.speechSynthesis.speak(utter);
    }
  }

  function showNotification(msg) {
    notification.textContent = msg;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
  }

  document.getElementById('year').textContent = new Date().getFullYear();
});