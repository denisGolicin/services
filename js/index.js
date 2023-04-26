let containerDescriptor = [];
containerDescriptor = document.querySelectorAll('.container-descriptor');
const containerItemCount = document.querySelector('.container-item-count');

const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const bgCurcle = document.querySelector('.bg-curcle');
let curcleMoveFlag = false;
let curcleMoveCount = 0;

for(let i = 0; i < containerDescriptor.length; i++){
    if(i === 0) { continue; }
    
    containerDescriptor[i].style.opacity = '0';
}

arrowLeft.addEventListener('click', function(){
    if(curcleMoveFlag === true) return;
    curcleMove('left');
});

arrowRight.addEventListener('click', function(){
    if(curcleMoveFlag === true) return;
    curcleMove('right');
});

function curcleMove(type){
    if(curcleMoveFlag) return;

    const style = window.getComputedStyle(bgCurcle);
    const matrix = new DOMMatrix(style.transform);
    const translateX = matrix.m41;
    console.log(curcleMoveCount)

    if(type === "right"){
        if(curcleMoveCount >= containerDescriptor.length - 1) return;
        containerDescriptor[curcleMoveCount].style.opacity = '0';
        bgCurcle.style.width = '30px';
        bgCurcle.style.borderRadius = '30px';
        curcleMoveCount++;
        bgCurcle.style.transform = `translate(calc(${translateX}px + 5px), -50%)`;
        curcleMoveFlag = true;
        setTimeout(function(){
            bgCurcle.style.width = '10px';
            bgCurcle.style.borderRadius = '50%';
            bgCurcle.style.transform = `translate(calc(${translateX}px + 30px), -50%)`;

            containerDescriptor[curcleMoveCount].style.opacity = '1';
            
        }, 200)
    }
    if(type === "left"){
        if(curcleMoveCount <= 0) return;
        bgCurcle.style.width = '30px';
        bgCurcle.style.borderRadius = '30px';
        containerDescriptor[curcleMoveCount].style.opacity = '0';
        curcleMoveCount--;
        
        bgCurcle.style.transform = `translate(calc(${translateX}px - 30px), -50%)`;
        curcleMoveFlag = true;
        setTimeout(function(){
            bgCurcle.style.width = '10px';
            bgCurcle.style.borderRadius = '50%';
            bgCurcle.style.transform = `translate(calc(${translateX}px - 30px), -50%)`;

            containerDescriptor[curcleMoveCount].style.opacity = '1';
        }, 200)
    }
    if(curcleMoveCount < 6) containerDescriptor[curcleMoveCount].style.opacity = '1';

    setTimeout(function(){
        curcleMoveFlag = false;
    }, 500)
}

//=======================
const block = document.getElementById('myElement');
const headerBlock = document.getElementById('header')
window.addEventListener('scroll', function() {
    // if (block.scrollTop === 0) {
    //     console.log('Скролл находится на верху элемента myElement');
    //   }
    if(window.scrollY >= 100){
        headerBlock.style.background = 'linear-gradient(to right, #8f31a6 0, #2871b5 100%)';
    }
    else{
        headerBlock.style.background = '#ffffff00';
    }
});