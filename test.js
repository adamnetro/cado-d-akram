var button = document.querySelector('.btn');
var h1 = document.querySelector('.hG1');
var Ahref = document.querySelector('a');
var btn2 = document.querySelector('.btn2');
var body = document.querySelector('body');
var tablo = document.querySelector('.tablo');
var tbH1 = document.querySelector('.tablo h1');
var tbIp = document.querySelector('.tablo input');
var tbenter = document.querySelector('.btnEnter');



function psbt(){
    button.style = "margin-left: 1em; transition: 0.2s ease;"
    button.innerText = "click me :("
    h1.style = "margin-left: 6.5em"
    h1.innerText = "واا الحول 😠"
}

function psbt2(){
    button.style = "margin-right: 2em; transition: 0.2s ease;"
    button.innerText = "click me :("
    h1.style = "margin-left: 6.5em"
    h1.innerText = "واش منيتك 😤"
    Ahref.style.display = "block"
    btn2.style.display = "block"
}

let PSW ={
    g: "lazanya"
}


function ldhsm(){
    body.style = "background-color: black; transition:0.2s ease;"
    tablo.style.display = "block"
    Ahref.style.display = "none"
}

function ldhsm2(){
    tbH1.innerText = "RA-Q7HMFYDLLYTVM95J"
    tbH1.style.color = "rgb(0, 255, 0)"
}

tbenter.addEventListener('click', function(){
    if(tbIp.value == PSW.g){
        ldhsm2()
    } else{
        tbH1.innerText = "ijaba khati2a"
        tbH1.style.color = "red"
    }
})



btn2.addEventListener('click', function(){
    ldhsm()
})



var change = true;
button.addEventListener('mouseover', () => {
    if(change){
    psbt();
    change = false;
} else {
    psbt2()
    change = true;
}
})

