let num = []
let rndNum;
let verifyNum = []
let sec = 30;
let countDownPar = document.getElementById('count-down')
let allPage = document.getElementById('all')

for(let i=0; i<5; i++){
    rndNum = Math.floor(Math.random() * 100) + 1;
    if(!num.includes(rndNum)){
        num.push(rndNum)
    }
}

console.log(num);

let numberSection = document.getElementById('numbers')
numberSection.innerHTML = `${num}`

let clock = setInterval(countDown, 1000)
function countDown(){
    if(sec==0){
        numberSection.innerHTML = `
            <input type="text" id="verify0">
            <input type="text" id="verify1">
            <input type="text" id="verify2">
            <input type="text" id="verify3">
            <input type="text" id="verify4">
            <button id="bottone">Invia</button>
            `
        countDownPar.innerHTML = 'Scrivi i numeri che ti ricordi'
        clearInterval(clock)
    }else{
        countDownPar.innerHTML = `i numeri scompariranno tra: ${sec}` 
        sec--
    }
}

let verifyNumber=[]

setTimeout(readingBottone, 31000)
function readingBottone(){
    let bottone = document.getElementById('bottone')
    bottone.addEventListener('click', function(){
        for(let z=0; z<5; z++){
            let sum="verify"+z
            verifyNum[z]=document.getElementById(sum).value
            verifyNumber[z]=Number(verifyNum[z])
            if(isNaN(verifyNumber[z])){
                alert('Scrivere 5 numeri dentro gli input')
                location.reload()
                throw new Error('s')
            }
        }
        console.log(verifyNumber);

        let guessNum = num.filter(element => verifyNumber.includes(element))
        console.log(guessNum);
        
        if(guessNum.length==0){
            allPage.innerHTML = `Non hai indovinato nessun numero`
        }else if(guessNum.length==1){
            allPage.innerHTML = `Hai indovinato solo il numero: ${guessNum}`
        }else if(guessNum.length>1 && guessNum.length<5){
            allPage.innerHTML = `Hai indovinato i numeri: ${guessNum}`
        }else if (guessNum.length==5){
            allPage.innerHTML = `Hai indonivato tutti i numeri: ${guessNum}`
        }

        let reload =document.getElementById('reload')
        reload.innerHTML='<button id="reloadBottone">Clicca qui per un altra partita</button>'
        let reloadBottone=document.getElementById('reloadBottone')
        reloadBottone.addEventListener('click', function(){
            location.reload();
        })


    })
}


