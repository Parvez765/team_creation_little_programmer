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

const removeOpacity = function(){
    navContainer.style.opacity = '1';
    teamCreationHead.style.opacity = '1';
    createGroup.style.display = "none"
    createTeam.style.display = "block"
    createGroup.style.opacity = '1';
}

const showCard = function() {
    cardContent.forEach(function(card){
        card.classList.remove("hidden");
    });
    modalContainer.classList.add("hidden");
    removeOpacity();
}


createTeam.addEventListener("click", function(){
   cardContent.forEach(function(card){
        card.classList.add("hidden")
    })
   
    opacity()
    modalContainer.classList.remove("hidden")
   
})

const continueBtn = document.getElementById("continueBtn")
const cancelBtn = document.getElementById("cancelBtn")

continueBtn.addEventListener("click", ()=> {
    console.log("Hello");
    opacity()
    categoryContainer.classList.remove("hidden")
    modalContainer.classList.add("hidden")
})

cancelBtn.addEventListener("click", showCard);

// Hero Section Functionality Ends Here

// Team Category

const categoryContainer = document.querySelector(".categoryContainer")
const teamCancelBtn = document.getElementById("teamCancelBtn")
const teamContinueBtn = document.getElementById("teamContinueBtn")
const teamAgial = document.querySelector(".teamAgile")

teamCancelBtn.addEventListener('click', function(){
    categoryContainer.classList.add("hidden")
    modalContainer.classList.remove("hidden")
})

teamContinueBtn.addEventListener('click', function(){
    teamAgial.classList.remove("hidden")
    categoryContainer.classList.add("hidden")
    createGroup.style.display = "none"
    teamCreationHead.style.display = "none"
    navContainer.style.opacity = '1';
    
})

// Create Team Dashboard
const addMembersBtn = document.getElementById("addMembersBtn")
const teamAgialHead = document.querySelector(".teamAgialHead")
const teamAgailBtn = document.querySelector(".teamAgailBtn")
const agialImage = document.querySelector(".agialImg")
const teamDescription = document.querySelector(".teamDescription")
const tableContainer = document.querySelector(".tableContainer")
const btnContainer = document.querySelector(".btnContainer")
const addMemberModal = document.querySelector(".addMemberModal")

const teamDescriptionOpacity = function(){
    tableContainer.style.opacity = "0.6"
   teamDescription.style.opacity = "0.3"
   navContainer.style.opacity = '0.3';
   btnContainer.style.opacity = '0.3';
}

addMembersBtn.addEventListener('click', function(){
   teamAgialHead.classList.add("hidden")
   teamAgailBtn.classList.add("hidden")
   agialImage.classList.add("hidden")
   teamDescription.classList.remove("hidden")
   addMemberModal.classList.remove("hidden")
   teamAgial.style.backgroundColor = "#FFF"
   teamDescriptionOpacity()
})

