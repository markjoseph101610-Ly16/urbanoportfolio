$(document).ready(function(){

    $("*").css("font-family","Verdana")

    $("#title").text("Welcome Students!")

    $(".intro").text("Learning jQueary")

    // $("#btn").click(function(){
    //     $(this).css("background","black")
    //     $(this).css("color","white")
    // })

    $("p:first").css("color","pink")

    $("ul li:first").css("color", "green")

    $("[href]").css("color","gray")

    $("th").css("background","black")
    $("th").css("color","white")
    $("tr:even").css("background", "lightblue")
    $("tr:odd").css("background", "lightgreen")

    $("#btn").click(function(){
        $("#message").text("You Clicked Button!")
    })

    $("#btn").dblclick(function(){
        $("#message").text("You Double Clicked Button!")
        $(this).css("background","yellow")
    })

    $("#btn").mouseenter(function(){
        $("#message").text("Your Mouse reach the button!")
    })

    $("#btn").mouseleave(function(){
         $("#message").text("Your Mouse leave the button!")
    })

    $("#btn2").mousedown(function(){
        $(this).css("background", "yellow")
    })

     $("#btn2").mouseup(function(){
        $(this).css("background", "royalblue")
    })

    $("#name").focus(function(){
        $("#message").text("Typing.....")
        $(this).css("background","lightyellow")
    })

    $("#name").blur(function(){
        $("#message").text("Out: ")
        $(this).css("background","lightblue")
        $(this).css("border-radius","5px")
    })

    $("#course").change(function(){
        $("#message").text($(this).val())
    })

    $("#btnHide").click(function(){
        $("#table").hide("slow")
    })
    
    $("#btnShow").click(function(){
        $("#table").show(2000)
    })

})