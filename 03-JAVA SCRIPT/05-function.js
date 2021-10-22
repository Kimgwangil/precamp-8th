let isStarted = false
const getToken=()=>{
    if(isStarted === false){
    isStarted=true
    
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("hi").innerText= token
    
    let time = 180
    setInterval(function(){
        if(time>=0){
        const minutes = String(Math.floor(time/60)).padStart(2,"0")
        const seconds = String(time % 60).padStart(2,"0")
        document.getElementById("timer").innerText= minutes + ":" + seconds
        time=time-1}
    },1000)} else {
        alert("이미 실행되었습니다.")
    }
}
