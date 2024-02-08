document.querySelector(".left-div").addEventListener("mousemove",function(){
    document.querySelector(".c-center-one").style.height="120vh";
    document.querySelector(".btn").style.backgroundColor="black";
    document.querySelector(".btn").style.color="white";
    document.querySelector("#one").style.opacity=1;
    document.querySelector("#one").style.width="23vw";
    document.querySelector("#one").style.height="30vh";
    document.querySelector("#two").style.opacity=1;
    document.querySelector("#two").style.width="20vw";
    document.querySelector("#two").style.height="25vh";
    document.querySelector("#two").style.filter="blur(3px)";
    document.querySelector("#three").style.opacity=1;
    document.querySelector("#three").style.width="16vw";
    document.querySelector("#three").style.height="19vh";
    document.querySelector("#three").style.filter="blur(5px)";
    document.querySelector("#four").style.opacity=1;
    document.querySelector("#four").style.width="14vw";
    document.querySelector("#four").style.height="17vh";
    document.querySelector("#four").style.filter="blur(8px)";
       
       

})
document.querySelector(".left-div").addEventListener    ("mouseleave",function(){
    document.querySelector(".c-center-one").style.height="0vh";
    document.querySelector(".btn").style.backgroundColor="white";
    document.querySelector(".btn").style.color="black";
    document.querySelector("#one").style.opacity=0;
    document.querySelector("#one").style.width="20vw";
    document.querySelector("#one").style.height="20vh";
    document.querySelector("#two").style.opacity=0;
    document.querySelector("#two").style.width="16vw";
    document.querySelector("#two").style.height="18vh";
    document.querySelector("#two").style.filter="blur(0 px)";
    document.querySelector("#three").style.opacity=0;
    document.querySelector("#three").style.width="14vw";
    document.querySelector("#three").style.height="15vh";
    document.querySelector("#three").style.filter="blur(0px)";
    document.querySelector("#four").style.opacity=0;
    document.querySelector("#four").style.width="11vw";
    document.querySelector("#four").style.height="15vh";
    document.querySelector("#four").style.filter="blur(0px)";
       

})
document.querySelector(".right-div").addEventListener("mousemove",function(){
    document.querySelector(".c-center-two").style.height="120vh";
    document.querySelector(".btns").style.backgroundColor="black";
    document.querySelector(".btns").style.color="white";
    document.querySelector("#five").style.opacity=1;
    document.querySelector("#five").style.width="23vw";
    document.querySelector("#five").style.height="30vh";
    document.querySelector("#six").style.opacity=1;
    document.querySelector("#six").style.width="20vw";
    document.querySelector("#six").style.height="25vh";
    document.querySelector("#six").style.filter="blur(3px)";
    document.querySelector("#seven").style.opacity=1;
    document.querySelector("#seven").style.width="16vw";
    document.querySelector("#seven").style.height="19vh";
    document.querySelector("#seven").style.filter="blur(5px)";
    document.querySelector("#eight").style.opacity=1;
    document.querySelector("#eight").style.width="14vw";
    document.querySelector("#eight").style.height="17vh";
    document.querySelector("#eight").style.filter="blur(8px)";
       
    
})
document.querySelector(".right-div").addEventListener("mouseleave",function(){
    document.querySelector(".c-center-two").style.height="0vh";
    document.querySelector(".btns").style.backgroundColor="white";
    document.querySelector(".btns").style.color="black";
    document.querySelector("#five").style.opacity=0;
    document.querySelector("#five").style.width="20vw";
    document.querySelector("#five").style.height="20vh";
    document.querySelector("#six").style.opacity=0;
    document.querySelector("#six").style.width="16vw";
    document.querySelector("#six").style.height="18vh";
    document.querySelector("#six").style.filter="blur(0 px)";
    document.querySelector("#seven").style.opacity=0;
    document.querySelector("#seven").style.width="14vw";
    document.querySelector("#seven").style.height="15vh";
    document.querySelector("#seven").style.filter="blur(0px)";
    document.querySelector("#eight").style.opacity=0;
    document.querySelector("#eight").style.width="11vw";
    document.querySelector("#eight").style.height="15vh";
    document.querySelector("#eight").style.filter="blur(0px)";
})