function changeFocus1() {

    const phone1 = document.getElementById("phone1").value;

    if(phone1.length === 3) { 
        document.getElementById("phone2").focus();
    }

}

function changeFocus2() {

    const phone2 = document.getElementById("phone2").value;

    if(phone2.length === 4) { 
        document.getElementById("phone3").focus();
    }

}

let isStarted = false;

let pressedBtn = () => {
    
    if(isStarted === false){
            
            isStarted = true;

            const token = String( Math.floor(Math.random() * 1000000 ) ).padStart(6,"0")
            document.getElementById("authNumber").innerText = token
            document.getElementById("authNumber").style.color = "#"+token
        
            let time = 180
            let timer = null
        
            timer = setInterval(function(){
        
                if(time >= 0){
                    document.getElementById("timer").innerText = time;
                    const min = String(Math.floor(time/60)).padStart(2,"0")
                    const sec = String(time% 60).padStart(2,"0")
                    console.log(min + ":" +sec)
                    time = time -1  
                } else {
                    document.getElementById("completeBtn").disabled = true;
                    isStarted = false;
                    clearInterval(timer)
                }
                
                },1000)

    } else {
        alert("타이머가 이미 동작중입니다")
    }
}