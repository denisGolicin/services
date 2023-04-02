const projectButtonLeft = document.querySelector('.button-left');
const projectButtonRight = document.querySelector('.button-right');

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

document.addEventListener('DOMContentLoaded', function() {
    alert("Загрузилось")
});