let toggle = document.querySelector(".toggle");

toggle.addEventListener("click", function (event){

const target = event.target.closest(".parent")
if (target  ){
    console.log(target.classList)
    target.classList.toggle("open")
}
})

