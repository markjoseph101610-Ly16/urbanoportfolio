$(document).ready(function(){

    $("#btn").click(function(){
        $("#title").text("As BSIT Student")
        $(this).css("background", "lightblue")
    })
    $("#btn").mousedown(function(){
        $(this).css("background", "black")
    })
    $("#btn").mouseup(function(){
        $(this).css("background", "black")
    })
    $("#btn").dblclick(function(){
        $("#title").text("My Student Profile")
        $(this).css("background", "black")
    })

    $("#btn").mouseleave(function(){
         $("#message2").text("Your Mouse leave the button!")
    })

    $("#btn").mouseenter(function(){
        $("#message2").text("Your Mouse reach the button!")
    })

    $("#btnHide").click(function(){
        $("#Profile").hide("slow")
        $("#message2").text("Your Hide Profile!")
        window.close()
    })
    
    $("#btnShow").click(function(){
        $("#Profile").show(2000)
        $("#message2").text("Your Show Profile!")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
         $("#message2").text("Your Button Click the Course!")
    })

    $("#message1").focus(function(){
         $("#course").text("Your course is IT")
    })

    $("#course").change(function(){
        $("#message1").text($(this).val())
        $("#message1").css("color", "white")
    })

    $("#btnHides").click(function(){
    $("#table1").hide("slow")
    $("#message2").text("Your Click the hide!")
    window.close(2000)
    })


    $("#btnShows").click(function(){
        $("#table1").show(2000)
        $("#message2").text("Your Click the show!")
    })

    
    $("#btnHidess").click(function(){
        $("tr:odd").css("background", "black")
        $("tr:odd").css("color", "white")
        $("tr:even").css("background", "rgba(80, 35, 17, 0.486)")
        $("#message2").text("Your Click the odd!")

    })


    $("#btnShowss").click(function(){
        $("tr:even").css("background", "white")
        $("tr:even").css("color", "black")
        $("tr:odd").css("background", "rgba(80, 35, 17, 0.486)")
        $("#message2").text("Your Click the even!")
    })




})