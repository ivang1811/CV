const activateNavBar = (e) => {
    const sideNavUl = document.querySelectorAll("ul.side-nav li:not(:first-child)")
    sideNavUl.forEach((item) => {
        if (item.dataset.selection === e.target.id){
            item.classList.add("active")
        }
        else {
            item.classList.remove("active")
        }
    })
}

const activateNavBarClick = (e, sideNavUl) => {
    sideNavUl.forEach((item) => {
        item.classList.remove("active")
    })
    console.log(e.target.tagName)
    if (e.target.tagName == "A"){
        e.target.parentNode.classList.add("active")
    }
    else {
        e.target.classList.add("active")
    }
}


function phoneNavigation() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


document.addEventListener("DOMContentLoaded", (e) => {
    const mouseEnterSections = document.querySelectorAll(".mouseover")
    console.log(mouseEnterSections)
    mouseEnterSections.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            activateNavBar(e)
        })
    })

    const sideNavUl = document.querySelectorAll("ul.side-nav li:not(:first-child)")
    sideNavUl.forEach((item) => {
        item.addEventListener("click", (e) => {
            console.log(item)
            activateNavBarClick(e , sideNavUl)
        })
    })
    const phoneClick = document.querySelector("#phone-navigation-click")
    phoneClick.addEventListener("click", (e) => {
        phoneNavigation()
    })
})

