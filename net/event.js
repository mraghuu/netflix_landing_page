//question 1
const targetDiv = document.getElementById('ans1');
const btn = document.getElementById('btn-4');
btn.onclick = function () {
    if(targetDiv.style.display !=="none"){
        targetDiv.style.display = "none";
    }
    else{
        targetDiv.style.display = "block";
    }
}