setTimeout(function(){
    console.log("기능 실행")
},2000)
// 2
// VM462:2 기능 실행
setInterval(function(){
    console.log("안녕하세용")
}, 1000)
// 3

let time = 180
setInterval(function(){
    if(time>=0){
        const minutes=Math.floor(time/60)
        const seconds=time%60  // %는 나머지 나타내는 연산자
        console.log(minutes+":"+seconds)
        time=time-1
    }
},1000)