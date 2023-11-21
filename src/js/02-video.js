import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const currentTime = localStorage.getItem('videoplayer-current-time');
const reloadBtn = document.querySelector('#reload');
const resetBtn = document.querySelector('#reset');

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    console.log(seconds);
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
if (currentTime) player.setCurrentTime(currentTime);

reloadBtn.addEventListener('click', () => {
  location.reload();
});

resetBtn.addEventListener('click', () => {
  localStorage.removeItem('videoplayer-current-time');
  player.setCurrentTime(0);
});
