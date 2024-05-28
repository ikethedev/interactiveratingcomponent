const btn = document.querySelector("button");
const list = document.querySelector("ol")
const modal = document.querySelector(".modal")

let rate = null;
list.addEventListener("click", (e) => {
    let rating = e.target.id
    const arr = [...document.querySelectorAll("li")]
    if(e.target === list){
        return
    }

    arr.forEach(item => {

        if(item.classList.contains("active")){
            item.classList.remove("active")
            console.log(item)
        }
    })
    if(e.target !== list){
        e.target.classList.add("active")
    }
    const message = document.querySelector("#rating").textContent = `You selected ${rating} out of 5`
    console.log(message)
    rate = rating
})

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if(rate === null){
        return
    }
    
    modal.classList.remove('hide')
    btn.classList.add("hide")


})