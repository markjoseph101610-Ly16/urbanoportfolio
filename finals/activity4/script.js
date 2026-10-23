const button = document.getElementById("LoadBtn")
const result = document.getElementById("result")

button.addEventListener("click", function(){

    let request = new XMLHttpRequest()

    request.open("GET", "student.txt", true)

    request.onload = function (){
        result.innerHTML = request.responseText;
    }

    request.onreadystatechange = function(){
        console.log(request.readyState)
    }

    request.send();

})