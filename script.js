const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;

function toggleMusic() {
    if (!playing) {
        music.play().then(function() {
            playing = true;
            musicButton.innerHTML = "♫ Pause music";
        }).catch(function() {
            alert("Add a romantic MP3 file named music.mp3 next to index.html first!");
        });
    } else {
        music.pause();
        playing = false;
        musicButton.innerHTML = "♫ Play music";
    }
}

function revealMessage() {
    const message = document.getElementById("finalMessage");

    message.style.display = "block";
    message.style.animation = "appear 1.5s ease";

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 650);
