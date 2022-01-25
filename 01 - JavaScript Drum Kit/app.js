window.addEventListener('keydown', function (e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = this.document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!audio) return
   audio.currentTime = 0; // rewind sound to start
   audio.play();
   key.classList.add('playing')
})





window.addEventListener('keyup', function (e) {
   const keys = this.document.querySelectorAll('.key');
   keys.forEach(key => {
      key.classList.remove('playing')
   });
})