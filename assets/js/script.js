addEventListener('DOMContentLoaded', () => {
  const burger_menu = document.querySelector('.burger_menu')
  if(burger_menu) {
    burger_menu.addEventListener('click', () => {
      const menu = document.querySelector('.menu')
      menu.classList.toggle('active')
      const bm = document.querySelector('.bm')
      bm.classList.toggle('active')
    })
  }
})
