var words = ['Создание сайтов', 'Дополненая реальность AR', 'Разработка мобильных приложений', 'Создание телеграм ботов', 'Дизайн и контент', 'Разработка на любые платформы', 'Парсинг данных'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 150,
    speed = 30;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
let moveableTop = document.querySelector('.top');
let moveableBottom = document.querySelector('.bottom');
let blockMoveable = document.querySelector('.wrapper-descriptor');
let blockText = document.querySelector('.word');

blockMoveable.addEventListener('mousemove', function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    let moveX = ((mouseX - window.innerWidth / 2) * 0.05);
    let moveY = (mouseY - window.innerHeight / 2) * 0.05;
    moveableTop.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    moveableBottom.style.transform = 'translate(' + (moveX + 2)+ 'px, ' + moveY + 'px)';

    blockText.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
});
