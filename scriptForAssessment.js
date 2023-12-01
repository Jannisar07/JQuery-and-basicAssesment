$(document).ready(function(){
    $("#bt").click(function(){
        // $("#bx").toggle("display","block")
        $("#bx").toggle()
        $("#bx a").css("display","block")

        $("#bt").css("color","red")
    })
})