const menuIcon = document.querySelector(".menu-icon")
const menuClose = document.querySelector(".close-menu")
const menu = document.querySelector(".menu")
const body = document.body
const menuTitle = document.querySelectorAll(".menu-title")
const firstMenuItem = document.querySelector(".first-menu-item")
const secondMenuItem = document.querySelector(".second-menu-item")
const firstArrow = document.querySelector(".first-arrow")
const secondArrow = document.querySelector(".second-arrow")
menuIcon.addEventListener('click', () => {
    menu.classList.add('menu-slide-in')
    body.classList.add('dimmed')

})

menuClose.addEventListener('click', () => {
    menu.classList.remove('menu-slide-in')
    body.classList.remove('dimmed')
})

// menuTitle.forEach((item)=>{
//     item.addEventListener("click", function(){
//         if(item === firstMenuItem.children[0]){
//             firstMenuItem.children[1].classList.toggle('show')
//         }
//         else if(item === secondMenuItem.children[0]){
//             secondMenuItem.children[1].classList.toggle('show')
//         } else {
            
//         }
//     })
// })

firstMenuItem.children[0].addEventListener("click", function(){
        firstMenuItem.children[1].classList.toggle('show')
        firstArrow.classList.toggle('rotate')
    })

secondMenuItem.children[0].addEventListener("click", function(){
    secondMenuItem.children[1].classList.toggle('show')
    secondArrow.classList.toggle('rotate')
})