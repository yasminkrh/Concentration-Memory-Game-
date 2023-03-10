/*----- constants -----*/
const cardsA=[
    { img:'img/ice.jpeg',name:'ice'},
    { img:'img/flower.jpeg',name:'flower'},
    { img:'img/ice.jpeg',name:'ice'},
    { img:'img/flower.jpeg',name:'flower'}
    
]

/*----- state variables -----*/
let cardChosen=[]
let cardChosenID=[]
let cardWon=[]

/*----- cached elements  -----*/
const gridDisplay=document.querySelector('#grid')
const score=document.getElementById('.score')


/*----- event listeners -----*/

card.addEventListener('click',flipCard)


/*----- functions -----*/

cardsA.sort(()=>0.5-Math.random())

//1.sort metodu kullanildi arrow fanksin icinde.karistirmak icin kullandim.Her sayfa yenilendiginde diziyi yeniler.
// console.log(cardsA);

//2.for ddongusu icinde kard arreyin  uzunlugu kadar element olustur ve bu elementin turu img olsun.srs ve datasini olusturdum.event listenerla her ustune tikladiginda degismesini istiyorum
//3.bunlari gride olusturmam lazin appand child ile.flip kard olusturduk ama tanimlamam lazim


function createBoard(){
    for(let i=0;i<cardsA.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src','img/ocen.jpeg')
        card.setAttribute('data-id',i)
       // card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }

}
createBoard()

//8.imglari bana dgetir dedim ve ikisini olusturdum.
function checkMatch(){

    const cards=document.querySelectorAll('#grid-img')
    const optionOneID=cardChosenID[0]
    const optionTwoID=cardChosenID[1]

//9. ikisi esitmi.esitse resimi degistir

    if(cardChosen[0]==cardChosen[1]){
        cards[optionOneID].setAttribute('src','img/created.jpg')
        cards[optionTwoID].setAttribute('src','img/created.jpg')
        cards[optionOneID].removeEventListener('click',flipCard)
        cardWon.push(cardChosen)
        //10.push ile cardwona attim sectiklerimi
        //esit degilse geri dondur okyanusa

    }else{
        cardsA[optionOneID].setAttribute('src','img/ocen.jpeg')
        cardsA[optionTwoID].setAttribute('src','img/ocen.jpeg')

    }
//11 iceriye attikca skorum 1 tane articak.ve kartcuzunlari bosaltmam lazim.01 seklinde ilerlesin diye.
    score.textContent=cardWon.length
    let cardChosen=[]
    let cardChosenID=[]
    //12 iceriye karisi girsdiyse kazandik dicem.
    if(cardWon.length==cardsA.length/2){
        score.innerHTML='You won,congrats!'
    }
}
//4. data id alip card chosun arrayi olusturmam lazim.ve tikladigim kartarreyin  kart adi seninin degerini alicam.
function flipCard(){
    const cardID=this.getAttribute('data-id')
    cardChosen.push(cardsA[cardID].name)
   // console.log(cardChosen)
    cardChosenID.push(cardID)
    this.setAttribute('src',cardsA[cardID].img)
    if(cardChosen.length==2){
        setTimeout(checkMatch,500)
    }
}
//5. src degistiricem tikladigim id alip
//6.kart chosunda sadece 2 eleman olmalimkarsilastirma icin
//7.checkmatch ile iki eleman varsa esitmi degilmi onu kontrol edicek