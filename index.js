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
const navContainer = document.querySelector(".navContainer")
const teamCreationHead = document.querySelector(".teamCreationHead")
const createGroup = document.getElementById("createGroup")

// Modal Section's Content
const modalContainer = document.querySelector(".modalContainer")

const opacity = function(){
    navContainer.style.opacity = '0.2';
    teamCreationHead.style.opacity = '0.2';
    createGroup.style.display = "block"
    createTeam.style.display = "none"
    createGroup.style.opacity = '0.2';
}


createTeam.addEventListener("click", function(){
   cardContent.forEach(function(card){
        card.classList.add("hidden")
    })
   
    opacity()
    modalContainer.classList.remove("hidden")
   
})

// Hero Section Functionality Ends Here