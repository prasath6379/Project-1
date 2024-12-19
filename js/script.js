let preload = document.querySelector(".preload")
let body = document.querySelector("body")
let minTime = 2000;

window.addEventListener("load",()=>
{
    this.setTimeout(()=>
    {
        preload.style.display = "none"
        body.style.display = "block"
    },minTime)
})