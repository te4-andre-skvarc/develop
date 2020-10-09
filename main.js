const image = [ '1_pig.png', '2_squirrel.png', '3_rabbit.png', '4_frog.png', '5_fox.png', '6_bear.png', '7_monkey.png', '8_panda.png', '9_chick.png', '10_tiger.png', '11_penguin.png', '12_racoon.png', '1_pig.png', '2_squirrel.png', '3_rabbit.png', '4_frog.png', '5_fox.png', '6_bear.png', '7_monkey.png', '8_panda.png', '9_chick.png', '10_tiger.png', '11_penguin.png', '12_racoon.png']
const backside = ['back.png']
const cardTemplate = document.querySelector('#card-template')
const cardContainer = document.querySelector('.cardb');

let savedCard = null;

cardContainer.addEventListener('click', handleClick)





function handleClick(e){

  let clickedCard = e.target.parentElement;
  let id = clickedCard.getAttribute('data-id');
  let selectedcards = document.querySelectorAll('.clicked:not(.win)').length
  let finished = document.querySelectorAll('.card.win.clicked').length
  
  if(finished == 22){setTimeout(() => {
    alert("du vann")
    location.reload();
  
  
  }, 1000)
}
    

  console.log(finished)
  
  if(selectedcards < 2){
  console.log(savedCard)

  // save one?
  if(savedCard === null){
       
    savedCard = id;

    // toggle class
    clickedCard.classList.toggle('clicked')
    
  } else {

    // Compare
    if(savedCard === id){

      // Win!
      clickedCard.classList.toggle('clicked')
      matched(savedCard, id)
    
    } else {

      // Loose
      unmatched(clickedCard)
      clickedCard.classList.toggle('clicked')
      
    }

  }

  

}
}
function matched(current){
  console.log('matched!')
  savedCard = null;
  document.querySelector('body').style.background = 'lightgreen'

  // document.querySelector(`[data-id="${saved}"]`).classList.add('win')
  for(let e of document.querySelectorAll(`[data-id="${current}"]`)) {
    setTimeout(() => {
      e.classList.add('win')
     document.querySelector('body').style.background = 'peachpuff'  
  }, 1000)
  }
   
}
 


function unmatched(card){
 
  let x = document.querySelectorAll('.clicked:not(.win)')
  console.log(x)
  document.querySelector('body').style.background = 'red'
  for(e of x ){
    console.log(e == card)
    if (e != card) { 
    setTimeout(() => {

    document.querySelectorAll('.clicked:not(.win)').forEach(card => {
      
      card.classList.remove('clicked')
      document.querySelector('body').style.background = 'peachpuff' 
    })

  }, 1000)
    }
  }
  console.log(x)
  console.log('NO matched!')
  savedCard = null;
     

        
      
  // efter if statment e.classList.remove('clicked')
      
    
      
  


}



function addbackimg(){
  for(let c of image){ 
    let card = cardTemplate.content.cloneNode(true).querySelector('div');
    card.setAttribute('data-id', c.split('_')[0])
    card.querySelector(".front").src = "img/" + c
    cardContainer.appendChild(card);
    
  }
}
shuffle(image)
addbackimg()

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}




