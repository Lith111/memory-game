let delay = 2000;
let boxCont = document.querySelector(".box-container");
let box = Array.from(boxCont.children);
let orderRange = [...Array(box.length).keys()];
let sec = 60;
let minutes = 9;
// start th gamming
document.querySelector(".control-buttons span").onclick = function(){
    let yourName = prompt("what your name");
    if(yourName === null || yourName === "" ){
        yourName = "admin";}
    document.querySelector(".info-container .name span").innerHTML = yourName;
    // watch the all box
    box.map((e)=>{
        e.classList.add("filpped");
    });
    setTimeout( ()=>{
        box.map((e)=>{
            e.classList.remove("filpped");
        })
    },2000);
    // the cont down
    let contDown = setInterval(() => {
        sec--;
        if(sec == 0){
            minutes--;
            sec=59;
        }
      if(minutes  == 0 ){
          sec--;
          if( sec < 30){
            document.getElementById("minutes").style.color =  document.getElementById("seconds").style.color = " rgb(255, 0, 30)";
           window.location.reload();
        }
          if( sec == 0){
           clearInterval(contDown);
          }
        }
        document.getElementById("minutes").innerHTML = minutes;
       document.getElementById("seconds").innerHTML = sec;
    }, 1000);
  document.querySelector(".control-buttons").remove();
shuffle(orderRange,orderRange.length);
 box.forEach((ele, index)=>{
     ele.style.order= orderRange[index];
     ele.addEventListener("click", function(){
        filppendFunction(ele);
     });
 });
 // funciton filppendFunction
   function filppendFunction(element){
       element.classList.add("filpped");
       let filppBox = box.filter(e =>e.classList.contains("filpped"));
       if(filppBox.length === 2){
        stopClick ();
        console.log(filppBox[0]);
        chickItem(filppBox[0] , filppBox[1] );
       }
     }
     function stopClick () {
         boxCont.classList.add("not-click");
         setTimeout(()=> boxCont.classList.remove("not-click"),delay);
     }
         function chickItem( first , secondly) {
             let tries = document.querySelector(".tries span");
             if(first.dataset.flower === secondly.dataset.flower){
                 first.classList.remove("filpped");
                 secondly.classList.remove("filpped");
                 first.classList.add("has-match");
                 secondly.classList.add("has-match");
             }
             else{
                 tries.innerHTML = parseInt(tries.innerHTML) + 1;
                 setTimeout(()=>{
                    first.classList.remove("filpped");
                    secondly.classList.remove("filpped");
                 },delay);
             }
         }
     
 // function shuffle 
 function shuffle(array , i) {
     let current = i,
     temp,
     random;
     while(current > 0){
         random = Math.floor( Math.random()*current);
         current--;
     temp = array[current];
     array[current] = array[random];
     array[random] = temp; 
    } 
   return array;
 }
}