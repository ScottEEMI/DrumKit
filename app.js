// TODO :
// 1 - Select corresponding audio file
// 2 - Play audio file
// 3 - Rewind audio file
// 4 - Select key divs
// 5 - Transitionend listener
// 6 - Remove transition

const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
    key.style.animationName = 'shake-crazy';
    setTimeout ( function () {  key.style.animationName = '';

    key.classList.remove("playing");},  1500);

});



keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
function removeTransition(e) {
    if(e.propertyName!=="transform")
        return;
    e.currentTarget.classList.remove("playing");
};
