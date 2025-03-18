//carousel 
$(document).ready(function () {
    $(".owl-carousel").each(function () {
        $(this).owlCarousel({
            loop: false,
            margin: 10,
            nav: false,
            responsive: {
                0: {
                    items: 2,
                    autoWidth: true,
                },
                600: {
                    items: 4,
                },
                1000: {
                    items: 5,
                },
            },
        });
    });
});



// allows you to link to url
function goToPage(url) {
    window.location.href = url;
}


//Switches background color to dark mode
function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle('dark-mode');
    
    var darkModeIcon = document.getElementById('darkModeIcon');
    darkModeIcon.classList.toggle('fa-moon');
    darkModeIcon.classList.toggle('fa-sun');
}

function toggleLanguage(){


}

//Switches main picture when you click on icons in carousel
function switchImage(imgID, biggerPicture){
    const bigPicture = document.getElementById(biggerPicture);
    bigPicture.src = imgID;
}

//loading screen code
function loadingScreen(){
    document.getElementById("loadingScreen").style.opacity = "0";
    document.getElementById("loadingScreen").style.transition = 'all 2s';
}
window.onload = loadingScreen();

function removeLoading(){
    if (document.getElementById("loadingScreen").style.opacity == "0"){
        document.getElementById("loadingScreen").style.display ="none";
    }
}



//Display caption on mobile view
function mobileCaption(){
    const opac = document.getElementById(caption).style.opacity;
    if(opac == '65%'){
        opac = '0%';
    }
    else{
        opac = '65%';
    }
}


// Switches languages
function switchLanguage() {
    for (let i=1; i < 5; i++){
      let num = i.toString();
      let ingles = "Ingles".concat(num);
      let espanol ="Espanol".concat(num);
  
      if (document.getElementById(ingles)) {
  
        if (document.getElementById(ingles).style.display == 'none') {
            document.getElementById(ingles).style.display = 'block';
            document.getElementById(espanol).style.display = 'none';
        }
        else {
            document.getElementById(ingles).style.display = 'none';
            document.getElementById(espanol).style.display = 'block';
        }
    }
  
    }
     
}

  

function togglePlayPause(sound,button,icon) {

        const audio = document.getElementById(sound);
        const playPauseBtn = document.getElementById(button);
        const playPauseIcon = document.getElementById(icon);

      if (audio.paused) {
        audio.play();
        playPauseIcon.className = 'fas fa-pause';
      } else {
        audio.pause();
        playPauseIcon.className = 'fas fa-play';
      }

      audio.addEventListener('ended', () => {
        playPauseIcon.className = 'fas fa-play';
      });

}

//carousel 
let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
    
}