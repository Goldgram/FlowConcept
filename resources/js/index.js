const animationColor = [
  '#fcfc4d', '#22baa7', '#5140dc', '#fcb6d9', '#ffffff'
];
const animationText = [
  'Create', '<span class="m">M</span>ove', 'Taste', 'Relax', 'F<span class="l">l</span>ow'
];
const animationInterval = [
  500, 500, 500, 500, 3000
];

const shouldAnimate = document.getElementById('home-animation');

const changeAnimation = (num) => () => {
  document.getElementById('home-animation').style.backgroundColor = animationColor[num];
  document.getElementById('home-animation-text').innerHTML = animationText[num];
  const nextNum = num === 4 ? 0 : num + 1;
  setTimeout(changeAnimation(nextNum), animationInterval[num]);
}

window.onload = () => {
  if (shouldAnimate) {
    setTimeout(changeAnimation(0), 500);
  }
}

const clickRadio = (num) => {
  const elements = document.getElementsByClassName('order-radio');
  for (var i = 0; i < 4; i++) {
    if (num === i) {
      elements[i].classList.add('selected');
    } else {
      elements[i].classList.remove('selected');
    }
  }
}
