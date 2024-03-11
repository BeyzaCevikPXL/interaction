const audio = document.getElementById('myAudio');
const progressBar = document.querySelector('.progress');
const timeDisplay = document.querySelector('.time');
const durationDisplay = document.querySelector('.duration');
const playButton = document.getElementById('playButton');
const volumeSlider = document.querySelector('.volume-slider');
const progressThumb = document.querySelector('.progress-thumb');
const volumeOverlay = document.querySelector('.volume-overlay');
const volumeText = document.querySelector('.volume-text');

let isDragging = false;

volumeSlider.addEventListener('input', function() {
    const volume = this.value;
    const volumePercentage = volume + '%';
    
    volumeOverlay.style.width = volumePercentage;
    volumeText.textContent = volumePercentage;
    audio.volume = volume / 100;
});
audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
    const currentTime = formatTime(audio.currentTime);
    timeDisplay.textContent = currentTime;
});
audio.addEventListener('loadedmetadata', function() {
    const duration = formatTime(audio.duration);
    durationDisplay.textContent = duration;
});
playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playButton.classList.remove('fa-play');
        playButton.classList.add('fa-pause');
    } else {
        audio.pause();
        playButton.classList.remove('fa-pause');
        playButton.classList.add('fa-play');
    }
});
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
volumeSlider.addEventListener('input', function() {
    const volume = this.value / 100;
    audio.volume = volume;
    
});

const modal = document.getElementById("modal");
const microbutton = document.querySelector('.microbutton');


const microphone = document.querySelector(".microphone");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
    const volume = 80; 
    audio.volume = volume / 100; 
    volumeSlider.value = volume; 
    volumeOverlay.style.width = volume + '%'; 
    volumeText.textContent = volume + '%'; 
}

microphone.onclick = function() {
    openModal();
}
microbutton.addEventListener('click', function() {
    const subtitel = document.querySelector('.subtitel');
    const voicebutton = document.querySelector('.voicebutton');
    subtitel.style.transition = 'opacity 0.5s ease-out';
    voicebutton.style.transition = 'opacity 0.5s ease-out';
    subtitel.style.opacity = 0;
    voicebutton.style.opacity = 0;
    setTimeout(() => {
        subtitel.style.display = 'none';
        voicebutton.style.display = 'none';

        const modalContent = document.querySelector('.modal-content');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Zet het volume op 80%';
        newParagraph.classList.add('custom-p-class'); 
        newParagraph.style.opacity = 0;
        modalContent.appendChild(newParagraph);
        setTimeout(() => {
            newParagraph.style.opacity = 1;
        }, 50);

        const newImage = document.createElement('img');
        newImage.src = 'assets/geluidbalk.png';
        newImage.alt = 'Modal Image';
        newImage.classList.add('custom-image-class'); 
        newImage.style.opacity = 0;
        modalContent.appendChild(newImage);
        setTimeout(() => {
            newImage.style.opacity = 1;
        }, 50);
    }, 500);
});