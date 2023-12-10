//creation of variables for my respective elements//

//my 4 links//
let all = document.querySelector("#all")
let starters = document.querySelector("#starters")
let salads = document.querySelector("#salads")
let specialty = document.querySelector("#specialty")

//for the 3 starters//
let myStarterOne = document.querySelector("#my-starter-one")
let myStarterTwo = document.querySelector("#my-starter-two")
let myStarterThree = document.querySelector("#my-starter-three")

//for the 3 salads//
let mySaladOne = document.querySelector("#my-salad-one")
let mySaladTwo = document.querySelector("#my-salad-two")
let mySaladThree = document.querySelector("#my-salad-three")

//for the 3 specialty//
let mySpecialtyOne = document.querySelector("#my-specialty-one")
let mySpecialtyTwo = document.querySelector("#my-specialty-two")
let mySpecialtyThree = document.querySelector("#my-specialty-three")

//creation of Events: ".remove" deletes "display:none" defined under class .diappear in SASS sheet, so elements appear!//

all.addEventListener("click",()=>{
    myStarterOne.classList.remove("disappear")
    myStarterTwo.classList.remove("disappear")
    myStarterThree.classList.remove("disappear")
    mySaladOne.classList.remove("disappear")
    mySaladTwo.classList.remove("disappear")
    mySaladThree.classList.remove("disappear")
    mySpecialtyOne.classList.remove("disappear")
    mySpecialtyTwo.classList.remove("disappear")
    mySpecialtyThree.classList.remove("disappear")
})

starters.addEventListener("click",()=>{
    myStarterOne.classList.remove("disappear")
    myStarterTwo.classList.remove("disappear")
    myStarterThree.classList.remove("disappear")
    mySaladOne.classList.add("disappear")
    mySaladTwo.classList.add("disappear")
    mySaladThree.classList.add("disappear")
    mySpecialtyOne.classList.add("disappear")
    mySpecialtyTwo.classList.add("disappear")
    mySpecialtyThree.classList.add("disappear")
})

salads.addEventListener("click",()=>{
    myStarterOne.classList.add("disappear")
    myStarterTwo.classList.add("disappear")
    myStarterThree.classList.add("disappear")
    mySaladOne.classList.remove("disappear")
    mySaladTwo.classList.remove("disappear")
    mySaladThree.classList.remove("disappear")
    mySpecialtyOne.classList.add("disappear")
    mySpecialtyTwo.classList.add("disappear")
    mySpecialtyThree.classList.add("disappear")
})

specialty.addEventListener("click",()=>{
    myStarterOne.classList.add("disappear")
    myStarterTwo.classList.add("disappear")
    myStarterThree.classList.add("disappear")
    mySaladOne.classList.add("disappear")
    mySaladTwo.classList.add("disappear")
    mySaladThree.classList.add("disappear")
    mySpecialtyOne.classList.remove("disappear")
    mySpecialtyTwo.classList.remove("disappear")
    mySpecialtyThree.classList.remove("disappear")
})

// //Button on scroll//

// //creation of variable for my button (called with its id)//

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

// //when the scroll is more than 20px from the top of the site, the button will disappear//
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

// //when the user clicks on it, the scroll goes back to top of the page//
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }