document.querySelector(".left-div").addEventListener("mousemove",function(){
    document.querySelector(".c-center-one").style.height="120vh";
    document.querySelector(".btn").style.backgroundColor="black";
    document.querySelector(".btn").style.color="white";
    document.querySelector("#one").style.opacity=1;
    document.querySelector("#one").style.width="23vw";
    document.querySelector("#one").style.height="30vh";
    // document.querySelector("#one").style.filter="blur(1px)";
       
       

})
document.querySelector(".left-div").addEventListener("mouseleave",function(){
    document.querySelector(".c-center-one").style.height="0vh";
    document.querySelector(".btn").style.backgroundColor="white";
    document.querySelector(".btn").style.color="black";
    document.querySelector("#one").style.opacity=0;
    document.querySelector("#one").style.width="20vw";
    document.querySelector("#one").style.height="20vh";
    // document.querySelector("#one").style.filter="blur(0px)";
   

})
document.querySelector(".right-div").addEventListener("mousemove",function(){
    document.querySelector(".c-center-two").style.height="120vh";
    document.querySelector(".btns").style.backgroundColor="black";
    document.querySelector(".btns").style.color="white";
    document.querySelector("#five").style.opacity=1;
    document.querySelector("#five").style.width="23vw";
    document.querySelector("#five").style.height="30vh";
})
document.querySelector(".right-div").addEventListener("mouseleave",function(){
    document.querySelector(".c-center-two").style.height="0vh";
    document.querySelector(".btns").style.backgroundColor="white";
    document.querySelector(".btns").style.color="black";
    document.querySelector("#five").style.opacity=0;
    document.querySelector("#five").style.width="20vw";
    document.querySelector("#five").style.height="20vh";

})