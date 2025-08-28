console.log("start");
let hex = "0123456789ABCDEF"
let color = "#";
let startInterval
let startChangingColor = function(){
    startInterval = setInterval(function(){
        document.querySelector("#start").removeEventListener("click",startChangingColor)
        for(let i=0; i<6; i++){
            color += hex[Math.floor(Math.random()*16)];
        }
        console.log(color)
        document.body.style.backgroundColor = color;
        color = "#"
    },1000  )
}

let stopChangingColor = function(){
    clearInterval(startInterval)
    document.body.style.backgroundColor = "#ffffff"
}
document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)
