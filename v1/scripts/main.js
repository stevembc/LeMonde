// J'ai laiss√© en es5 pour plus de compatibilit√© vu la simplicit√© du code
console.log('clicj')
var menuButton = document.querySelector('.menu-btn')
menuButton.addEventListener('click', function(){
  console.log('clicj')
  document.body.classList.toggle('main-menu-open') // le reste est en css
}, false)