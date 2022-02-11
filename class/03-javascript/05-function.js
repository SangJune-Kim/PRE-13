// function pressedBtn(){
    
//     const token = String( Math.floor(Math.random() * 1000000 ) ).padStart(6,"0")
//     document.getElementById("auth").innerText = token

// }




let pressedBtn = () => {
    
    const token = String( Math.floor(Math.random() * 1000000 ) ).padStart(6,"0")
    document.getElementById("auth").innerText = token
    document.getElementById("auth").style.color = "#"+token
}