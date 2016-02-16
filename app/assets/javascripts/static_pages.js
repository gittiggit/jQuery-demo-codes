//$(function(){
//        $("li").css("color", "green");
//        $("li").slideUp(1000);
//        $("li").slideDown(1000);
//        $("li").attr("title", "MY TITLE")
//});
// 18937, 17717
// to reduce the redundancy


$(function(){
    $("li").css("color", "green").slideUp(2000).slideDown(2000).attr("title", "MY TITLE")


    // Creating JSON object

    var employeeJSON = {
        "firstName" : "Jamal",
        "lastName" : "Ahmed",
        "gender" : "Male",
        "salary" : 50000
    };
    //Accessing data from a JSON object
    var result = "";
    result += "firstName = "+employeeJSON.firstName+"<br>";
    result += "lastName = "+employeeJSON.lastName+"<br>";
    result += "Gender = "+employeeJSON.gender+"<br>";
    result += "Salary = "+employeeJSON.salary+"<br>";

    $("#json-result").html(result);
});

$(function(){
    // Creating JSON object for multiple employee

    var employeesJSON = [{
        "firstName" : "Jamal",
        "lastName" : "Ahmed",
        "gender" : "Male",
        "salary" : 50000
        },
        {
            "firstName" : "Kamal",
            "lastName" : "Ahmed",
            "gender" : "Male",
            "salary" : 50000
        },
        {
            "firstName" : "Habib",
            "lastName" : "Ahmed",
            "gender" : "Male",
            "salary" : 50000
        },
        {
            "firstName" : "Montu",
            "lastName" : "Miah",
            "gender" : "Male",
            "salary" : 50000
        }];
    //Accessing data from a JSON object
    var result = "";
    for(i=0; i< employeesJSON.length; i++){
        result += "<h4>Employee"+[i+1]+" :</h4>"
        result += "firstName = "+employeesJSON[i].firstName+"<br>";
        result += "lastName = "+employeesJSON[i].lastName+"<br>";
        result += "Gender = "+employeesJSON[i].gender+"<br>";
        result += "Salary = "+employeesJSON[i].salary+"<br>";
    }
    $("#json-result-mul-employee").html(result);

    // Converting JSON object to string format

    var jsonString =  JSON.stringify(employeesJSON);
    $("#JSON-to-string").html(jsonString);

    // Converting JSON string to JSON object
    //var jsonString = [{"firstName":"Jamal","lastName":"Ahmed","gender":"Male","salary":50000},
    //                    {"firstName":"Kamal","lastName":"Ahmed","gender":"Male","salary":50000},
    //                    {"firstName":"Habib","lastName":"Ahmed","gender":"Male","salary":50000},
    //                    {"firstName":"Montu","lastName":"Miah","gender":"Male","salary":50000}]
    //var jsonObject = JSON.parse(jsonString);
    //
    //var result = ""
    //$.each(jsonObject, function(i, item){
    //    result += "First Name = "+item.firstName+ "<br>";
    //    result += "Last Name = "+item.lastName+ "<br>";
    //    result += "Gender = "+item.gender+ "<br>";
    //    result += "Salary= "+item.salary+ "<br>";
    //});
    //$("#JSON-string-to-object").html(result);
});


$(function(){
    $(".div1").wrap("<div class='containerDiv'></div>");
    //$(".div1").unwrap();
    $(".div2").wrapAll("<div class='containerDiv'></div>");
});



//$(document).ready(function(){
//    $(".div1").wrap("<div class='containerDiv'></div>");
//});


