function changeFocus1() {
  const phone1 = document.getElementById("phone1").value;

  if (phone1.length === 3) {
    document.getElementById("phone2").focus();
  }
}

function changeFocus2() {
  const phone2 = document.getElementById("phone2").value;

  if (phone2.length === 4) {
    document.getElementById("phone3").focus();
  }
}

function checkPhonenumber() {
  const ph1 = document.getElementById("phone1").value;
  const ph2 = document.getElementById("phone2").value;
  const ph3 = document.getElementById("phone3").value;

  if (ph1.length === 3 && ph2.length === 4 && ph3.length === 4) {
    // 활성화
    document.getElementById("authButton").disabled = false;
    document
      .getElementById("authButton")
      .setAttribute("style", "background-color : white");
    document.getElementById("authButton").style.color = "#0068FF";
  } else {
    //  비활성화
    document.getElementById("authButton").disabled = true;
    document
      .getElementById("authButton")
      .setAttribute("style", "background-color : none");
  }
}

let isStarted = false;

let pressedBtn = () => {
  if (isStarted === false) {
    isStarted = true;

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("authNumber").innerText = token;
    document.getElementById("authNumber").style.color = "#" + token;

    let time = 10;
    let timer = null;

    timer = setInterval(function () {
      if (time >= 0) {
        const min = String(Math.floor(time / 60)).padStart(2, "0");
        const sec = String(time % 60).padStart(2, "0");
        document.getElementById("time").innerText = min + ":" + sec;
        time = time - 1;
        document.getElementById("completeBtn").style.color = "white";
        document.getElementById("completeBtn").style.backgroundColor =
          "#0068FF";
      } else {
        document.getElementById("completeBtn").disabled = true;
        document.getElementById("completeBtn").style = "";
        isStarted = false;
        clearInterval(timer);
      }
    }, 1000);
  } else {
    alert("타이머가 이미 동작중입니다");
  }
};

function checkValidation() {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const pw1 = document.getElementById("password1").value;
  const pw2 = document.getElementById("password2").value;

  if (email !== "" && name !== "" && pw1 !== "" && pw2 !== "") {
    // 활성화
    document.getElementById("submit").disabled = false;
    document
      .getElementById("submit")
      .setAttribute("style", "background-color : white");
    document.getElementById("submit").style.color = "#0068FF";
    document.getElementById("submit").style.borderColor = "#0068FF";
  } else {
    //  비활성화
    document.getElementById("submit").disabled = true;
  }
}
