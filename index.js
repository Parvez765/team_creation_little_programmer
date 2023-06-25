const hamburger = document.getElementById("hamburger")
const crossMark = document.getElementById("crossMark")
const navItems = document.getElementById("navItems")

crossMark.style.display = "none"
navItems.style.display = "none"

hamburger.addEventListener('click', function(){
    crossMark.style.display = "block"
    hamburger.style.display = "none"
    navItems.style.display = "block"
})

crossMark.addEventListener('click', function(){
    crossMark.style.display = "none"
    hamburger.style.display = "block"
    navItems.style.display = "none"
})