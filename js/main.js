'use strict'
let divStart=document.querySelector('.start')
let divGame=document.querySelector('.game')
let buttonStart=divStart.querySelector('.start-button')
let divResalut=document.querySelector('.resalut')
let hResalut=divResalut.querySelector('h1')
let butttonResalut=divResalut.querySelector('.resalut-button')

let b0=divGame.querySelector('.button1')
let b1=divGame.querySelector('.button2')
let b2=divGame.querySelector('.button3')
   

let qn=divGame.querySelector('#qn')
let qall=divGame.querySelector('#qall')
let qr=divGame.querySelector('#qr')


let right=0
let number=0


let sound_src='https://ccatrine.github.io/sound/src/sounds/'
let win=new Audio(sound_src+'win.mp3')
let win2=new Audio(sound_src+'win2.mp3')
let error=new Audio(sound_src+'error.mp3')

//document.addEventListener('click',()=>win.play())


buttonStart.onclick=startGame
function startGame(){
    win2.play()
    divStart.style.display='none';
    divGame.style.display='block';
    nextQuetion()
}  


butttonResalut.onclick=restart
function restart() {
    win2.play()
    right=0
    number=0
    divResalut.style.display='none';
    divGame.style.display='block';
    nextQuetion()
}


function nextQuetion(){
    divGame.querySelector('h2').innerHTML=questions[number].q

    b0.innerHTML=questions[number].a[0]
    b0.onclick=()=>getAnswer(0)
    b1.innerHTML=questions[number].a[1]
    b1.onclick=()=>getAnswer(1)
    b2.innerHTML=questions[number].a[2]
    b2.onclick=()=>getAnswer(2)
       
    qn.innerHTML=number+1
    qall.innerHTML=questions.length
    qr.innerHTML=right 
}
function getAnswer(n){
   if (n===questions[number].r){ 
       right++
       win.play()

   } else{
       error.play()
   }


    number++
    if (number<questions.length){
       nextQuetion()
    }
    else{ 


        divGame.style.display='none'
        divResalut.style.display='block'
        hResalut.innerHTML=`Вы правильно ответили \n на ${right} Вопросов из ${questions.length} `
    }

}
let questions=[
   {
    q:'Какая самая высокая гора на Земле?',
    a:[
        'Эверест', 
        'Мауна-Кеа',
        'Джомолунгма'
    ],
    r:2
    
   },
 {
    q:'x-4=10,x=?',
   a:[
        '6', 
        '14',
        '8'
    ],
    r:1
    
   },
 {
    q:'В чем измеряется давление?',
    a:[
        'Па', 
        'кг',
        'Дж'
    ],
    r:0
    
   },
    {
    q:'Какой газ является самым легким?',
    a:[
        'Кислород', 
        'Водород',
        'Углекислый газ'
    ],
    r:1

    
   },
    {
    q:'Какая самая мелкая птица?',
    a:[
        'Колибри', 
        'Синица',
        'Попугай'
    ],
    r:0
    
   },

]