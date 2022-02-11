if (1+1===2){
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다!")
}
// sentry.js:44 정답입니다!
// undefined
if (true){
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다!")
}
// sentry.js:44 정답입니다!
// undefined
if (false){
    console.log("정답입니다!")
} else {
    console.log("틀렸습니다!")
}
// sentry.js:44 틀렸습니다!
// undefined
const pw1 = "123"
// undefined
const pw2 = "345"
// undefined
if(pw1===pw2) {
    alert("비밀번호가 일치합니다")
} else {
    alert("nope!")
}
// VM1161:2 Uncaught SyntaxError: missing ) after argument list
if(pw1===pw2) {
    alert("비밀번호가 일치합니다")
} else {
    alert("nope!")
}
// undefined