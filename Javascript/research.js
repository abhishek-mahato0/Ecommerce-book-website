let rpic=document.querySelector('.rpic');
let rpic2=document.querySelector('.rpic2');
let rpic3=document.querySelector('.rpic3');
let rpic4=document.querySelector('.rpic4');
let rpic5=document.querySelector('.rpic5');
let first=document.querySelector('.first');
let sec=document.querySelector('.sec');
let third=document.querySelector('.third');
let fourth=document.querySelector('.fourth');
let fifth=document.querySelector('.fifth');
let sixth=document.querySelector('.sixth');
let seven=document.querySelector('.seven');
let eight=document.querySelector('.eight');
let nine=document.querySelector('.nine');
let ten=document.querySelector('.ten');

let fimage1=['internet/category.png','made/category.png'];
let fimage2=['internet/button.png','made/btn.png'];
let fimage3=['internet/offers.png','made/offer.png'];
let fimage4=['internet/footer.png','made/footer.png'];
let fimage5=['internet/resea.png','made/resea.png'];

const changei=(x)=>{
    rpic.innerHTML=`<img src="../../images/researches/${fimage1[x]}">`;
    sec.style.backgroundColor="rgb(114, 113, 113)";
    first.style.backgroundColor="black";

}

const changes=(x)=>{
    rpic.innerHTML=`<img src="../../images/researches/${fimage1[x]}">`;
    sec.style.backgroundColor="black";
    first.style.backgroundColor="rgb(114, 113, 113)";
}

const changet=(x)=>{
    rpic2.innerHTML=`<img src="../../images/researches/${fimage2[x]}">`;
    fourth.style.backgroundColor="rgb(114, 113, 113)";
    third.style.backgroundColor="black";

}

const changef=(x)=>{
    rpic2.innerHTML=`<img src="../../images/researches/${fimage2[x]}">`;
    fourth.style.backgroundColor="black";
    third.style.backgroundColor="rgb(114, 113, 113)";
}

const changev=(x)=>{
    rpic3.innerHTML=`<img src="../../images/researches/${fimage3[x]}">`;
    sixth.style.backgroundColor="rgb(114, 113, 113)";
    fifth.style.backgroundColor="black";

}

const changex=(x)=>{
    rpic3.innerHTML=`<img src="../../images/researches/${fimage3[x]}">`;
    sixth.style.backgroundColor="black";
    fifth.style.backgroundColor="rgb(114, 113, 113)";
}


const changee=(x)=>{
    rpic4.innerHTML=`<img src="../../images/researches/${fimage4[x]}">`;
    eight.style.backgroundColor="rgb(114, 113, 113)";
    seven.style.backgroundColor="black";

}

const changeg=(x)=>{
    rpic4.innerHTML=`<img src="../../images/researches/${fimage4[x]}">`;
    eight.style.backgroundColor="black";
    seven.style.backgroundColor="rgb(114, 113, 113)";
}

const changen=(x)=>{
    rpic5.innerHTML=`<img src="../../images/researches/${fimage5[x]}">`;
    ten.style.backgroundColor="rgb(114, 113, 113)";
    nine.style.backgroundColor="black";

}

const change10=(x)=>{
    rpic5.innerHTML=`<img src="../../images/researches/${fimage5[x]}">`;
    ten.style.backgroundColor="black";
    nine.style.backgroundColor="rgb(114, 113, 113)";
}
console.log("kk");
