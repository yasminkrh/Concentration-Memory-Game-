const cardsA=[
    { imgSrc:'.img/ice.jpeg',name:'ice'},
    { imgSrc:'.img/flower.jpeg',name:'flawer'},
    { imgSrc:'.img/book.jpeg',name:'book'},
    { imgSrc:'.img/many.jpeg',name:'money'},
    { imgSrc:'.img/ocen.jpeg',name:'ocen'},
    { imgSrc:'.img/plant.jpeg',name:'plant'},
    { imgSrc:'.img/view.jpeg',name:'view'},
    { imgSrc:'.img/air.jpg',name:'air'},
    { imgSrc:'.img/ice.jpeg',name:'ice'},
    { imgSrc:'.img/flower.jpeg',name:'flawer'},
    { imgSrc:'.img/book.jpeg',name:'book'},
    { imgSrc:'.img/many.jpeg',name:'money'},
    { imgSrc:'.img/ocen.jpeg',name:'ocen'},
    { imgSrc:'.img/plant.jpeg',name:'plant'},
    { imgSrc:'.img/view.jpeg',name:'view'},
    { imgSrc:'.img/air.jpg',name:'air'}

]
cardsA.sort(()=>0.5-Math.random())
// console.log(cards);

const gridDisplay=document.querySelector('#grid')
let score=document.getElementById('score')
let cardChosen=[]
let cardChosenID=[]
const cardWon=[]

function createBoard(){
    for(let i=0;i<cardsA.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','./img/ocen.jpeg')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcCard)
        gridDisplay.appendChild(card)
    
    }

}
createBoard()

function checkMatch(){
    const cards=document.querySelectorAll('#grid-img')
    const optionOneID=cardChosenID[0]
    const optionTwoID=cardChosenID[1]

    if(cardChosen[0]===cardChosen[1]){
        cardsA[optionOneID].setAttribute('src','.img/created.jpg')
        cardsA[optionTwoID].setAttribute('src','.img/created.jpg')
        cardsA[optionOneID].removeEventListener('click')
        cardWon.push(cardChosen)

    }else{
        cardsA[optionOneID].setAttribute('src','.img/ocen.jpeg')
        cardsA[optionTwoID].setAttribute('src','img/ocen.jpeg')

    }

    score.textContent=cardWon.length
    cardChosen=[]
    cardChosenID=[]
    if(cardWon.length==cardsA.length/2){
        score.innerHTML='You won,congratulations!!'
    }
}

function flipcCard(){
    const cardID=this.getAttribute('data-id')
    cardChosen.push(cardsA[cardID].name)
    //console.log(cardChosen)
    cardChosenID.push(cardID)
    this.setAttribute('src',cardsA[cardID].imgSrc)
    if(cardChosen.length==2){
        setTimeout(checkMatch,500)
    }
}