var rect = document.querySelector("#center")
rect.addEventListener("mousemove",function(details){
    var totalspace = rect.getBoundingClientRect()
    var currentposition = details.clientX - totalspace.left
    
    if (currentposition < totalspace.width / 2){
        console.log("left")
    }
    else{
        console.log("right")
    }
})
