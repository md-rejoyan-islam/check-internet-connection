const online=document.getElementById('online')
const offline=document.getElementById('offline')
const timer=document.getElementById('timer')
const reconnect=document.getElementById('reconnect')

let time=10
let clear=''
const again=onoffline=(e)=>{
    offline.classList.remove("hidden");
    time=10
     clear = setInterval(() => {
      time--;

      timer.innerHTML = time;
      if (time == 0) {
        time = 10;
        timer.innerHTML = time;
        offline.classList.add("hidden");

        clearInterval(clear);
      }
    }, 1000);
 
}








reconnect.onclick=()=>{
  time=10
timer.innerHTML = time;
    clearInterval(clear)
again()

}


ononline=(e)=>{
  offline.classList.add('hidden');
  time=1
    online.classList.remove('hidden')
    setTimeout(() => {
   
      online.classList.add("hidden");
    }, 2000);
}



