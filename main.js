const body = document.querySelector('body');

// ===== Themes ===== */
const greenThemeBtn = document.querySelector('.greenThemeBtn')
const orangeThemeBtn = document.querySelector('.orangeThemeBtn')
const blueThemeBtn = document.querySelector('.blueThemeBtn')
const theme = localStorage.getItem('theme');
if (theme){
    document.body.classList.add(theme)
}
else{
    document.body.classList.add('blueTheme');
    blueThemeBtn.classList.add('activeThemeBtn');
}

function changeTheme(newTheme){
    // Remove existing theme class from body
    document.body.classList.remove('greenTheme', 'orangeTheme', 'blueTheme');

    // Add new theme class to body
    document.body.classList.add(newTheme);

    // Save new theme to localStorage
    localStorage.setItem('theme', newTheme);

    // Remove activeTheme class from all theme buttons
    greenThemeBtn.classList.remove('activeThemeBtn');
    orangeThemeBtn.classList.remove('activeThemeBtn');
    blueThemeBtn.classList.remove('activeThemeBtn');

    // Add activeTheme class to the clicked theme button
    if (newTheme === 'greenTheme') {
        greenThemeBtn.classList.add('activeThemeBtn');
    } 
    else if (newTheme === 'orangeTheme') {
        orangeThemeBtn.classList.add('activeThemeBtn');
    } 
    else if (newTheme === 'blueTheme') {
        blueThemeBtn.classList.add('activeThemeBtn');
    }
}

// Add activeTheme class to the clicked theme button
if (theme === 'greenTheme') {
    greenThemeBtn.classList.add('activeThemeBtn');
} 
else if (theme === 'orangeTheme') {
    orangeThemeBtn.classList.add('activeThemeBtn');
} 
else if (theme === 'blueTheme') {
    blueThemeBtn.classList.add('activeThemeBtn');
}

// Event listeners for theme buttons
greenThemeBtn.addEventListener('click', function() {
    changeTheme('greenTheme');
});
  
orangeThemeBtn.addEventListener('click', function() {
    changeTheme('orangeTheme');
});
  
blueThemeBtn.addEventListener('click', function() {
    changeTheme('blueTheme');
});

// ===== Font size option ===== //
// Font Size - LocalStorage
const smallFSList = document.querySelectorAll('.smallFS')
const middleFSList = document.querySelectorAll('.middleFS')
const largeFSList = document.querySelectorAll('.largeFS')
const fontSize = localStorage.getItem('fontSize');
if (fontSize) {
    changeFontSize(fontSize);
}
else{
    changeFontSize('small');
}

function changeFontSize(size) {
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