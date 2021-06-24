addEventListener('DOMContentLoaded', () => {
  const burger_menu = document.querySelector('.burger_menu')
  if(burger_menu) {
    burger_menu.addEventListener('click', () => {
      const menu1 = document.querySelector('.menu1')
      menu1.classList.toggle('active')
      const bm = document.querySelector('.bm')
      bm.classList.toggle('active')
    })
  }
})


// var $burguerButton = document.getElementById('burger_button');
// var $menu = document.getElementById('menu');
// $burguerButton.addEventListener('touchstart', toggleMenu);
// function toggleMenu(){
// 	$menu.classList.toggle('active')
// };
// function showMenu(){
// 	$menu.classList.add('active')
// };
// function hideMenu(){
// 	$menu.classList.remove('active')
// };
