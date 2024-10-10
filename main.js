let num = []
let sec = 30;
let countDownPar = document.getElementById('count-down')
let numberSection = document.getElementById('numbers')

for(let i=0; i<5; i++){
    num[i] = Math.floor(Math.random() * 100) + 1;
}


setInterval(countDown, 1000)
function countDown(){
    if(sec==0){
        countDownPar.innerHTML = 'Scrivi i numeri che ti ricordi'
    }else{
        numberSection.innerHTML = `${num}`
        countDownPar.innerHTML = `i numero scompariranno tra: ${sec}` 
        sec--
    }
}