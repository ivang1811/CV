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
    e.target.parentNode.classList.add("active")
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
            activateNavBarClick(e , sideNavUl)
        })
    })

})

