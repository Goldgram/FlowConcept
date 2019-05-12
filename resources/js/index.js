const animationColor = [
  '#fcfc4d', '#5657fb', '#22baa7', '#f8c6dd', '#ffffff'
];
const animationText = [
  'Create', 'Move', 'Taste', 'Relax', 'Flow'
];
const animationInterval = [
  1000, 1000, 1000, 1000, 5000
];

const changeAnimation = (num) => () => {
  document.getElementById('home-animation').style.backgroundColor = animationColor[num];
  document.getElementById('home-animation-text').innerText = animationText[num];
  const nextNum = num === 4 ? 0 : num + 1;
  setTimeout(changeAnimation(nextNum), animationInterval[num]);
}

(() => {
  const windowheight = window.innerHeight || 800;
  document.getElementById('home-animation').style.height = windowheight + 'px';
})();

window.onload = () => {
  setTimeout(changeAnimation(0), 500);
}
