let move = 10;
let dog=document.getElementById("mydog");
window.onload=()=>{
  
   
    dog.style.left=0;
 }
window.onkeydown=(e)=>{
    switch(e.key){
        
                case 'ArrowLeft':
                    dog.style.left = parseInt(dog.style.left) - move + "px";
                    break;
                    case 'ArrowRight':
                        dog.style.left = parseInt(dog.style.left) + move + "px";
                        break;
    }
}

setInterval(()=>{
    num=Math.floor(Math.random()*(550-50+1)+50);
    document.getElementById("food").style.left=`${num}px`;
},50000);
setInterval(()=>{
    num=Math.floor(Math.random()*(550-50+1)+50);
    document.getElementById("bone").style.left=`${num}px`;
},20000);

setInterval(()=>{
    num=Math.floor(Math.random()*(550-50+1)+50);
    document.getElementById("personimg2").style.left=`${num}px`;
},10000);

setInterval(()=>{
    num=Math.floor(Math.random()*(550-50+1)+50);
    document.getElementById("cat2").style.left=`${num}px`;
},15000);
let n=0;
setInterval(()=>{
    document.getElementById("score").innerText=`Score :${n}`
    n=n+1;
   let cat_left=Math.abs(document.getElementById("cat2").getBoundingClientRect().left);
   let cat_right=Math.abs(document.getElementById("cat2").getBoundingClientRect().right);
   let cat_up=Math.abs(document.getElementById("cat2").getBoundingClientRect().up);
   let cat_down=Math.abs(document.getElementById("cat2").getBoundingClientRect().down);

   let dog_left=Math.abs(document.getElementById("mydog").getBoundingClientRect().left);
   let dog_right=Math.abs(document.getElementById("mydog").getBoundingClientRect().right);
   let dog_up=Math.abs(document.getElementById("mydog").getBoundingClientRect().up);
   let dog_down=Math.abs(document.getElementById("mydog").getBoundingClientRect().down);

   if(((cat_left<dog_left && dog_left<cat_right)||(cat_left<dog_right && dog_right<cat_right))&&((cat_up<dog_up && dog_up>cat_down)||(cat_up<dog_down &&dog_down<cat_down)))
     setTimeout(()=>{
         alert("GAME OVER !")
    })
    // location.reload()
},100);