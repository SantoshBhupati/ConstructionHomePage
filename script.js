const back_image = document.querySelector('.back_img');
console.log(back_image);
let i =1;
const imagechange = function(){
    back_image.style.backgroundImage=`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url('./img/background_image_${i}.jpg')`;
    i++;
    if(i>9)
    i=1;
}
setInterval(imagechange,3000);