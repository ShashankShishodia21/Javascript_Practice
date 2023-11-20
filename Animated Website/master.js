var rect = document.querySelector("#center")
rect.addEventListener("mousemove",function(details){
    var totalspace = rect.getBoundingClientRect()
    var currentposition = details.clientX - totalspace.left
    
    if (currentposition < totalspace.width / 2){
        var redcolor = gsap.utils.mapRange(0, totalspace.width / 2 , 255 , 0 , currentposition)
        gsap.to(rect, {
            backgroundColor : `rgb(${redcolor}, 0, 0)`,
            ease : Power4,
        })
    }
    else{
        var bluecolor = gsap.utils.mapRange(totalspace.width / 2 , totalspace.width , 0 , 255 , currentposition)
        gsap.to(rect, {
            backgroundColor : `rgb(0, 0 ,${bluecolor})`,
            ease : Power4,
        })
    }
})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect ,{
        backgroundColor : "white",
    }) 
})
