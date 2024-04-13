const emojis = ["&#128512","&#128512","&#128513","&#128513","&#128514","&#128514","&#128515","&#128515","&#128516","&#128516","&#128517","&#128517","&#128518","&#128518","&#128519","&#128519"];
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
for ( let i = 0; i < emojis.length; i++){
  let box = document.createElement('div')
  box.className = 'item';
  box.innerHTML = shuf_emojis[i]
  saveGame();

  box.onclick = function(){
    this.classList.add('boxOpen')
    setTimeout(function(){
      if(document.querySelectorAll('.boxOpen').length > 1){
        if(document.querySelectorAll('.boxOpen')[0].innerHTML == 
        document.querySelectorAll('.boxOpen')[1].innerHTML){
          document.querySelectorAll('.boxOpen')[0].classList.add
          ('boxMatch')
          document.querySelectorAll('.boxOpen')[1].classList.add
          ('boxMatch')

          document.querySelectorAll('.boxOpen')[1].classList.remove
          ('boxOpen')
          document.querySelectorAll('.boxOpen')[0].classList.remove
          ('boxOpen')

          if(document.querySelectorAll('.boxMatch').length == emojis.length){
            alert('WIN')
            saveGame();
          }
        } else {
          document.querySelectorAll('.boxOpen')[1].classList.remove
          ('boxOpen')
          document.querySelectorAll('.boxOpen')[0].classList.remove
          ('boxOpen')
          saveGame();
        }
      }
    },500)
  }

  document.querySelector('.game').appendChild(box);
  saveGame();
}

function saveGame(){
  localStorage.setItem('emojis', JSON.stringify(emojis));
}
function showGame(){
  JSON.parse(localStorage.getItem('emojis'));
}
showGame();
