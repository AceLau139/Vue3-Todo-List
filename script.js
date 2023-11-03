// ===== Font size option ===== //
// Font Size - LocalStorage
const smallFSList = document.querySelectorAll('.smallFS')
const middleFSList = document.querySelectorAll('.middleFS')
const largeFSList = document.querySelectorAll('.largeFS')
const fontSize = localStorage.getItem('fontSize');

function changeFontSize(size) {
    const body = document.querySelector('body');

    switch (size) {
        case 'small':
            body.style.fontSize = '16px';
            localStorage.setItem('fontSize', 'small');

            for(let i=0; i<smallFSList.length; i++){
                smallFSList[i].classList.add('activeFS');
            }
            for(let i=0; i<middleFSList.length; i++){
                middleFSList[i].classList.remove('activeFS');
            }
            for(let i=0; i<largeFSList.length; i++){
                largeFSList[i].classList.remove('activeFS');
            }
            break;

        case 'medium':
            body.style.fontSize = '18px';
            localStorage.setItem('fontSize', 'medium');

            for(let i=0; i<middleFSList.length; i++){
                middleFSList[i].classList.add('activeFS');
            }
            for(let i=0; i<smallFSList.length; i++){
                smallFSList[i].classList.remove('activeFS');
            }
            for(let i=0; i<largeFSList.length; i++){
                largeFSList[i].classList.remove('activeFS');
            }
            break;

        case 'large':
            body.style.fontSize = '20px';
            localStorage.setItem('fontSize', 'large');

            for(let i=0; i<largeFSList.length; i++){
                largeFSList[i].classList.add('activeFS');
            }
            for(let i=0; i<smallFSList.length; i++){
                smallFSList[i].classList.remove('activeFS');
            }
            for(let i=0; i<middleFSList.length; i++){
                middleFSList[i].classList.remove('activeFS');
            }
            break;

        default:
            break;
    }
}
if (fontSize) {
    changeFontSize(fontSize);
}

// small size - 16px
for(let i=0; i<smallFSList.length; i++){
    smallFSList[i].addEventListener("click", function (){
        const small = 'small'
        changeFontSize(small)
    })
}
// medium size - 18px
for(let i=0; i<middleFSList.length; i++){
    middleFSList[i].addEventListener("click", function (){
        const medium = 'medium'
        changeFontSize(medium)
    })
}
// large size - 20px
for(let i=0; i<largeFSList.length; i++){
    largeFSList[i].addEventListener("click", function (){
        const large = 'large'
        changeFontSize(large)
    })
}