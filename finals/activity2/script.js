const message = document.getElementById("message")
const Button = document.getElementById("loadBtn")
const Buttons = document.getElementById("loadBtn1")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedules = document.getElementById("schedules")

Buttons.addEventListener("click", function(){
    Button.style.backgroundColor = "red"
    Buttons.style.backgroundColor = "red"

    profile.style.backgroundColor = "yellow"
    grades.style.backgroundColor = "blue"
    schedules.style.backgroundColor = "black"
    schedules.style.color = "white"
    

    message.innerHTML = "Loading Dashboard....."

    profile.innerHTML = "Profile Waiting...."
    grades.innerHTML = "Grades Waiting...."
    schedules.innerHTML = "Schedule Waiting...."

    const profilePromise = new Promise(function(resolve){
        
        setTimeout(function(){

            profile.innerHTML = "Profile Loaded";

            resolve();

        }, 1000);
    })

    const gradesPromise = new Promise(function(resolve){
        
        setTimeout(function(){

            grades.innerHTML = "Grades Loaded";

            resolve();

        }, 2000);
    })

    const schedulesPromise = new Promise(function(resolve){
        
        setTimeout(function(){

            schedules.innerHTML = "Schedule Loaded";

            resolve();

        }, 3000);
    })
    
    Promise.all([profilePromise, gradesPromise, schedulesPromise])

    .then(function(){
        message.innerHTML = "Dashboard Ready"
    })
})


function showMessage(){
     return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Checking Account..!")
        }, 2000)
    })
}

Button.addEventListener("click", function(){
    message.innerHTML = "Loading!"
    
     showMessage()

    .then(function(result){
        message.innerHTML = result

        return new Promise(function(resolve){
            setTimeout(function(){
                resolve("Loading Asset...")
            }, 3000)
        })

        .then(function(result){
            message.innerHTML = result

            return new Promise(function(resolve){
                setTimeout(function(){
                    resolve("Loading Final!")
                }, 3000)
            })
        })

         .then(function(result){
            message.innerHTML = result
        })
    })
})

