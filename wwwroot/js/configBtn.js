const calque = document.querySelector('.calque');
const btnPrimary = document.querySelectorAll('.btn-primary');

const config = document.getElementById('config');
const listConfig = document.querySelector('.list-config');

//Event btn config
config.addEventListener('click', () => {
    config.classList.toggle('rotate');
    listConfig.classList.toggle('show');
});

const linkBackground = document.getElementById('linkBackground');
const modalBackground = document.querySelector('.modal-background');

//Event that opens the modal with the list of images
linkBackground.addEventListener('click', () => {
    listConfig.classList.toggle('show');    
    modalBackground.classList.toggle('show-modal'); 

    if(aside.classList.value == 'show' || config.classList.value == 'rotate') {
        aside.classList.remove('show')
        config.classList.remove('rotate')
    }
});

//Close modal
const closeModal = document.getElementById('closeModal');
closeModal.addEventListener('click', () => {
    modalBackground.classList.remove('show-modal'); 
});

//Linear gradient variable for background image overlay
const backgroundLinear = 'linear-gradient(rgb(60, 60, 60) 0%, rgba(60, 60, 60, 0) 100%)';

//Background image add start 
function backgroundStart() {
    calque.style.backgroundImage = `${backgroundLinear}, url(${localStorage.getItem('background')})`;

    if(localStorage.getItem('background') != null) {
        result.classList.add('result-background');
        for(let i = 0; i < btnPrimary.length; i++) {
            btnPrimary[i].classList.add('btn-black');
        }
    }
}
backgroundStart();

//Get image url 
for(let i = 0; i < 200; i++) {
    const img = document.createElement('img');
    
    //Url images
    let imgLoad = `https://i.picsum.photos/id/${i}/500/500.jpg`;    
    img.src = imgLoad;
    
    //Image that didn't load
    const urlError = 'wwwroot/img/not-found.png';   

    img.addEventListener('error', () => {        
        img.src = urlError
    });    

    //Event to add background image 
    img.addEventListener('click', () => {
        if(img.src === imgLoad) {
            calque.style.backgroundImage = `${backgroundLinear}, url(${img.src})`;
            localStorage.setItem('background', img.src);

            backgroundStart();
        }  else {
            alert('Imagem não disponível')
        }        
    })

    const loadImg = document.getElementById('loadImg');
    loadImg.appendChild(img)
}

//Remove background image  from the class claque
const removeBackground = document.getElementById('removeBackground');
removeBackground.addEventListener('click', () => {
    calque.style.backgroundImage = '';    
    /*
        Clear data Local Storage    

        #Local storage in the browser
        Google Chrome
        DevTools >> Tab Application >> menu Local Storage

        Firefox
        DevTools >> tab storage >> menu Local Storage
    */
    localStorage.clear();
    result.classList.remove('result-background');

    for(let i = 0; i < btnPrimary.length; i++) {
        btnPrimary[i].classList.remove('btn-black');
    };
});