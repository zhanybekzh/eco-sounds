const elements = document.querySelectorAll('.element');
const landscape = document.getElementById('landscape');
const audioPlayer = document.getElementById('audio-player');
const playPauseButton = document.getElementById('play-pause');

elements.forEach(element => {
  element.addEventListener('click', () => {
    landscape.src = element.dataset.image;
    audioPlayer.src = element.dataset.sound;
    audioPlayer.play();
    elements.forEach(el => el.classList.remove('active'));
    element.classList.add('active');
  });
});

playPauseButton.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playPauseButton.textContent = 'Pause';
    playPauseButton.classList.add('playing');
  } else {
    audioPlayer.pause();
    playPauseButton.textContent = 'Play';
    playPauseButton.classList.remove('playing');
  }
});
