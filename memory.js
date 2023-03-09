/*----- constants -----*/
const cards=[
    { imgSrc:'.img/ice.jpeg',id:1},
    { imgSrc:'.img/flower.jpeg',id:2},
    { imgSrc:'.img/book.jpeg',id:3},
    { imgSrc:'.img/many.jpeg',id:4},
    { imgSrc:'.img/ocen.jpeg',id:5},
    { imgSrc:'.img/plant.jpeg',id:6},
    { imgSrc:'.img/view.jpeg',id:7},
    { imgSrc:'.img/air.jpg',id:8},
    { imgSrc:'.img/ice.jpeg',id:1},
    { imgSrc:'.img/flower.jpeg',id:2},
    { imgSrc:'.img/book.jpeg',id:3},
    { imgSrc:'.img/many.jpeg',id:4},
    { imgSrc:'.img/ocen.jpeg',id:5},
    { imgSrc:'.img/plant.jpeg',id:6},
    { imgSrc:'.img/view.jpeg',id:7},
    { imgSrc:'.img/air.jpg',id:8}

];
//elementleri yerlestirdik.metoduyla kartlari resimleri sirayla yerlestircek.
const drawCards=()=>{
    const cardContainerEl=document.querySelector(".card-container");
//elemani yakaladik

//htmle string olarak yazdircam

    let cardItemsHtml=``;
    
    cards.forEach(item=> {
        cardItemsHtml+='<img class="card" src="${item.src}"/>';
    });
    //herbir resmin rafkli olmasini bekliyorum.
    cardItemsHtml=cardContainerEl.innerHTML;
// html olarak uzerine eklendi.
}


//hata veriyor.




//kartlarin dagitilmasi lazim randim olarak

let dealingCards=[];

const selectRandomCard=()=>{
    //herseferinde farkli resimler vermesini istiyoruz
    let randomCardOrder=Math.round(Math.random()*cards.length-1);
    return cards.splice(randomCardOrder,1);
    //tekrar gelmesin diye splice ile siliyorum aldiktan sonra
//randim sirayi geriye o elemani donucem
};


//cartlari dagitmam lazim
//sirasiyla randim bir sekilde yerlestirip dealcartin i. elemanini randim bir sekilde yerlestirmem lazim.
const dealCards=()=>{
    for(let i=0;i<16;i++){
        dealingCards[i]=[...cards,...selectRandomCard()];
    }

}
drawCards();

