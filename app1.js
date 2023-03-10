const cardA=[
    { img:'img/ice.jpeg',name:'ice'},
    { img:'img/flower.jpeg',name:'flower'},
    { img:'img/air.jpg',name:'air'},
    { img:'img/book.jpeg',name:'book'},
    { img:'img/plant.jpeg',name:'plant'},
    { img:'img/view.jpeg',name:'view'},

    { img:'img/ice.jpeg',name:'ice'},
    { img:'img/flower.jpeg',name:'flower'},
    { img:'img/air.jpg',name:'air'},
    { img:'img/book.jpeg',name:'book'},
    { img:'img/plant.jpeg',name:'plant'},
    { img:'img/view.jpeg',name:'view'}
    
]

cardA.sort(()=>0.5-Math.random())
console.log(cardA);
const gridDisplay=document.querySelector('#grid')
let score=document.getElementById('score')
let cardChosen=[]
let cardChosenID=[]
let cardWon=[]

function createBoard(){
    for(let i=0;i<cardA.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','img/ocen.jpeg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }

}
createBoard()


function checkMatch(){
    const cards=document.querySelectorAll('#grid img')
    const optionOneID=cardChosenID[0]
    const optionTwoID=cardChosenID[1]


    if(cardChosen[0]===cardChosen[1]){
        cards[optionOneID].setAttribute('src','img/many.jpeg')
        cards[optionTwoID].setAttribute('src','img/many.jpeg')
        cards[optionOneID].removeEventListener('click',flipCard)
        cards[optionTwoID].removeEventListener('click',flipCard)

        cardWon.push(cardChosen)
    }else{
        cards[optionOneID].setAttribute('src','img/ocen.jpeg')
        cards[optionTwoID].setAttribute('src','img/ocen.jpeg')

    }
    score.textContent=cardWon.length
    cardChosen=[]
    cardChosenID=[]
  
  
    if(cardWon.length==cardA.length/2){
        score.innerHTML='You won,congrats!'
    }
  
}

function flipCard(){
    const cardID=this.getAttribute('data-id')
    cardChosen.push(cardA[cardID].name)
   // console.log(cardChosen)
    cardChosenID.push(cardID)
    this.setAttribute('src',cardA[cardID].img)
    if(cardChosen.length==2){
        setTimeout(checkMatch,500)
    }
}