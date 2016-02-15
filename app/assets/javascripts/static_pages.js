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
});