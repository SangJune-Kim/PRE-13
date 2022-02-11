let isStarted = false;

let pressedBtn = () => {
    
    if(isStarted === false){
            
            isStarted = true;

            const token = String( Math.floor(Math.random() * 1000000 ) ).padStart(6,"0")
            document.getElementById("auth").innerText = token
            document.getElementById("auth").style.color = "#"+token
        
            let time = 10
            let timer = null
        
            timer = setInterval(function(){
        
                if(time >= 0){
                    document.getElementById("timer").innerText = time;
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
