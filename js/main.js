const projectButtonLeft = document.querySelector('.button-left');
const projectButtonRight = document.querySelector('.button-right');
const buttonOrder = document.querySelector('.button-request');
const mainBox = document.getElementsByTagName('main')[0];

let projectItem = [];
projectItem = document.querySelectorAll('.projects-element');
console.log(projectItem.length)

let projectid = 0;
projectButtonLeft.style.display = 'none';

for(let i = 0; i < projectItem.length; i++){
    if(i){
        //projectItem[i].style.display = 'none';
        projectItem[i].style.transform = 'translateY(500px)';
    }

}

projectButtonRight.addEventListener('click', function(){

    if(projectItem.length - 1 === projectid) return false;

    // projectItem[projectid++].style.display = "none";
    // projectItem[projectid].style.display = 'flex';

    projectItem[projectid++].style.transform = 'translateY(-500px)';
    projectItem[projectid].style.transform = 'translateY(0)';

    if(projectItem.length - 1 === projectid){
        projectButtonRight.style.display = 'none';
    }


    if(projectItem.length >= 1){
        projectButtonLeft.style.display = 'block';
    }


});

projectButtonLeft.addEventListener('click', function(){ 

    if(projectid === 0) return false;

    if(projectid === 1){
        projectButtonLeft.style.display = 'none';
    }

    if(!(projectItem.length === projectid)){
        projectButtonRight.style.display = 'block';
    }

    // projectItem[projectid--].style.display = "none";
    // projectItem[projectid].style.display = 'flex';

    projectItem[projectid--].style.transform = 'translateY(500px)';
    projectItem[projectid].style.transform = 'translateY(0)';

});

buttonOrder.addEventListener('click', function(){
    if(buttonOrder.innerText === "Заказать проект") console.log('Заказать проект');
    else console.log('Онлайн консультация');
})

document.addEventListener('DOMContentLoaded', function() {

    const element = document.querySelector('.loader');

    setInterval(function(){
        element.style.opacity = '0';
        addDelay();

        setInterval(function(){
            element.style.display = 'none';
        }, 1000);

    }, 1000);
});

let animationBlock = [];
animationBlock = document.querySelectorAll('.window-message-wrapper');
const requestBlock = document.querySelector('.box-request');
const firstTitle = document.querySelector('#services');
const firstBlock = document.querySelector('#advantages-element-first');

function addDelay(){

    for(let i = 0; i < animationBlock.length; i++){
        animationBlock[i].style.animationDelay = `${i + 2.3}s`;
    }
    requestBlock.style.animationDelay = `${animationBlock.length + 2.5}s`;
    firstTitle.style.animationDelay = `${animationBlock.length + 3.5}s`;
    firstBlock.style.animationDelay = `${animationBlock.length + 4}s`;
}

let iOS = (navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ? true : false);
let iOS7 = (navigator.userAgent.match(/(OS 7_0)/i) ? true : false);
let android = (navigator.userAgent.match(/Android/i) ? true : false);

let buttonMain = document.querySelector('.button-main');
let textMain = document.querySelector('.main-text-pk');

if(iOS || iOS7 || android){
    buttonOrder.innerText = "Заказать проект";
} 
window.addEventListener('resize', function() {
    if (window.innerWidth <= 767) {
        buttonOrder.innerText = "Заказать проект";
    } else {
        buttonOrder.innerText = "Онлайн консультация";
    }
});

// получаем все ссылки на странице
const links = document.querySelectorAll('a[href^="#"]');
const element = document.querySelector('.main-srl');

// добавляем обработчик события клика на каждую ссылку
links.forEach(link => {
  link.addEventListener('click', function(event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();

    // получаем id якоря, на который ссылается ссылка
    const id = this.getAttribute('href').substr(1);


    // получаем элемент якоря
    const target = document.getElementById(id);
    //===============

    // плавно прокручиваем до элемента якоря
    element.scrollTo({
      top: target.offsetTop - 15,
      behavior: 'smooth'
    });
  });
});
