// NavBar Functionality Starts Here
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

// NavBar Functionality Ends Here

// Hero Section Functionality Starts Here
const createTeam = document.getElementById("createTeam")
const cardContent = document.querySelectorAll(".cardContent")

createTeam.addEventListener("click", function(){
   cardContent.forEach(function(card){
        card.classList.add("hidden")
   })
    
   
})

// Hero Section Functionality Ends Here