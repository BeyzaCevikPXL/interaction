const audio = document.getElementById('myAudio');
const progressBar = document.querySelector('.progress');
const timeDisplay = document.querySelector('.time');
const durationDisplay = document.querySelector('.duration');
const playButton = document.getElementById('playButton');
const volumeSlider = document.querySelector('.volume-slider');
const progressThumb = document.querySelector('.progress-thumb');

let isDragging = false;


// Update progress bar
audio.addEventListener('timeupdate', function() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + '%';
    const currentTime = formatTime(audio.currentTime);
    timeDisplay.textContent = currentTime;
});
// Update duration display once metadata is loaded
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
// Helper function to format time in mm:ss format
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
volumeSlider.addEventListener('input', function() {
    const volume = this.value / 100;
    audio.volume = volume;
});

// Get the modal
const modal = document.getElementById("modal");
const microbutton = document.querySelector('.microbutton');


// Get the div that opens the modal
const microphone = document.querySelector(".microphone");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}

// When the user clicks on the microphone div, open the modal
microphone.onclick = function() {
    openModal();
}
microbutton.addEventListener('click', function() {
    // Hide subtitel and voicebutton smoothly
    const subtitel = document.querySelector('.subtitel');
    const voicebutton = document.querySelector('.voicebutton');
    subtitel.style.transition = 'opacity 0.5s ease-out';
    voicebutton.style.transition = 'opacity 0.5s ease-out';
    subtitel.style.opacity = 0;
    voicebutton.style.opacity = 0;
    setTimeout(() => {
        subtitel.style.display = 'none';
        voicebutton.style.display = 'none';

        // Show the new paragraph and image smoothly
        const modalContent = document.querySelector('.modal-content');
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Zet het volume op 80%';
        newParagraph.style.opacity = 0;
        modalContent.appendChild(newParagraph);
        setTimeout(() => {
            newParagraph.style.opacity = 1;
        }, 50);

        const newImage = document.createElement('img');
        newImage.src = 'assets/Group1.png';
        newImage.alt = 'Modal Image';
        newImage.style.opacity = 0;
        modalContent.appendChild(newImage);
        setTimeout(() => {
            newImage.style.opacity = 1;
        }, 50);
    }, 500);
});
// Function to increase volume
/* function increaseVolume() {
    if (audio.volume < 1.0) {
        audio.volume += 0.1; // Increase volume by 10%
    }
}

// Function to decrease volume
function decreaseVolume() {
    if (audio.volume > 0.0) {
        audio.volume -= 0.1; // Decrease volume by 10%
    }
}

// Example: Listening to a button click to turn up the volume
document.getElementById('turnUpButton').addEventListener('click', () => {
    increaseVolume();
});


// Example: Listening to a button click to turn down the volume
document.getElementById('turnDownButton').addEventListener('click', () => {
    decreaseVolume();
}); */