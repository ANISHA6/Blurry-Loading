const loadText=document.querySelector('.loading-text');
const bg=document.querySelector('.bg');
let load=0;

//run this function in every 30ms
let int=setInterval(blurring,30);
function blurring(){
    load++;
    if(load>99){
        clearInterval(int);
    }
    // console.log(load);
    loadText.innerHTML=`${load}%`;
    //map a range of number to another range of numbers(0 t0 100 & 100 to 0 for opacity)
    loadText.style.opacity=scale(load, 0 ,100, 1, 0)
    bg.style.filter=`blur(${scale(load,0, 100, 30, 0)}px)`

}

const scale=(num, in_min, in_max, out_min, out_max)=>{
    return ((num-in_min)* (out_max-out_min))/(in_max-in_min)+out_min
}