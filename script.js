// CUSTOMIZE YOUR MESSAGE HERE
const message = "Happy Birthday my love! 🎉 You are the most beautiful part of my life. I hope this little surprise makes you smile. Here is to making more memories together! I love you so much. ❤️";

const clickTrigger = document.getElementById('click-trigger');
const welcomeScreen = document.getElementById('welcome-screen');
const celebrationScreen = document.getElementById('celebration-screen');
const typingText = document.getElementById('typing-text');
const audio = document.getElementById('bg-music');
const musicBtn = document.getElementById('musicBtn');

clickTrigger.addEventListener('click', () => {
    // 1. Play Music immediately on click
    audio.volume = 0.5; // Set volume to 50% so it's not too loud
    audio.play().catch(error => {
        console.log("Audio play failed: ", error);
    });

    // 2. Explode Confetti
    launchConfetti();
    
    // 3. Transition Screens
    welcomeScreen.classList.add('hidden');
    celebrationScreen.classList.remove('hidden');
    
    // 4. Start Typing Message
    setTimeout(() => {
        typeWriter(message, 0);
    }, 500);
});

// Typing Effect
function typeWriter(text, i) {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

// Button Logic: Play/Pause
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicBtn.innerText = "⏸️ Pause Music";
    } else {
        audio.pause();
        musicBtn.innerText = "🎵 Play Music";
    }
}

// Confetti Logic
function launchConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}