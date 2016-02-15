$(function(){
    $("#para").click(function(){
        alert("Something");
        $("#para").hide();
    });
    $("#testbtn").click(function(){
        alert("Clicked");
        $("#testbtn").css("background-color", "red");
    });

    //$("li").each(function(index, element){
    //    alert(index+":"+$(element).text());
    //});

    //or
    //$("li").each(function(index, element){
    //    alert($(this).text());
    //});
    // exit from each function

    //$("li").each(function(index, element){
    //    if($(this).text() == "UK"){
    //        return false;
    //    }
    //    alert($(this).text());
    //});

     //design with each
    $("li").each(function(index, element){
        $(this).css("color","red");
        console.log($(this).text());
    });
});

