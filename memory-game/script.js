/*----- constants -----*/
const cards=[
    { imgSrc:'.img/ice.jpeg',name:"img1" },
    { imgSrc:'.img/flower.jpeg',name:"img2" },
    { imgSrc:'.img/ice.jpeg',name:"img1" },
    { imgSrc:'.img/flower.jpeg',name:"img2" }
];
console.log(cards);



const frontFace=[
    {  imgSrc:'.img/created.jpg',name:"img3" }
];
//console.log(frontFace);



  /*----- state variables -----*/
  let start;
  let matchCards;
  let flipCards;//just start on it ilk basta



  /*----- cached elements  -----*/

  const card = document.querySelectorAll(".memory-game");
  const startbutton= document.querySelector(".start");
  const finish = document.querySelector(".finish");

  console.log(card)
  console.log(startbutton);
  

  /*----- event listeners -----*/
  startbutton.addEventListener("click",start);
 // cards.addEventListener("click",optionCard);




  /*----- functions -----*/
//initialize

  function init(){
    matchCards=0;
    flipCards=[];

    const card= cards.querySelectorAll(".memory-game");
    cards.forEach((card=> {
        card.classList.remove("flip");
        card.classList.add("memory-item");
    }));

  }
  
function optionCard(option){
    if (!start) return;
    const clickCard= option.target;
    
    if(clickCard.classList.contains("memory-item")&& flipCards.length<2){
        flipCards( clickCard);
    }
}


  function selectCards(clickCard){
    clickCard.classList.remove("memory-item");
    clickCard.classList.add("flip");
  }
console.log(selectCards)
console.log(optionCard)