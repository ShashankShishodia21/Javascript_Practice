var arr = [
    {dp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    story:"https://m.media-amazon.com/images/M/MV5BNzMzYmRiNGEtMDg5OC00OGZmLWFmNDktYzRlZTFkZmZiMjAzXkEyXkFqcGdeQXVyMTE2OTE2MzE1._V1_FMjpg_UX1000_.jpg"},
    {dp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    story:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"},
    {dp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    story:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"},
    {dp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    story:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"},
    {dp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    story:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"},
    {dp: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
    story:"https://politics.princeton.edu/sites/default/files/styles/square/public/images/p-5.jpeg?h=87dbaab7&itok=ub6jAL5Q"},
]
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="stoory">
    <img id = "${idx}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector(".stories").innerHTML = clutter

document.querySelector(".stories").addEventListener("click",function(dets){
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"  
    },3000)
})