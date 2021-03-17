const pass = document.getElementById("password")
const back = document.getElementById("background")
pass.addEventListener("input", (e)=>{
    const input = e.target.value
    const length = input.length
    back.style.filter = `blur(${40-(length*3)}px)`
})