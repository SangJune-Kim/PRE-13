const classmates = ['상준','지명','문희']
// undefined
classmates
// (3) ['상준', '지명', '문희']
classmates[1]
// '지명'
classmates.includes("변수")
// false
classmates.push("변수")
// 4
classmates
// (4) ['상준', '지명', '문희', '변수']
classmates.includes("변수")
// true
classmates.pop()
// '변수'
classmates
// (3) ['상준', '지명', '문희']
classmates.length
// 3