// $(function () {
//     $("#about").click(function () {
//         $(".col1").removeClass("col-9");
//         $(".col1").removeClass("opened");
//         $(".col1").addClass("col-1");
//         $("#menuHome").removeClass("opened");
//         $("#homeContent").removeClass("content");
//         $("#homeContent").addClass("close");
//         $(".col2").removeClass("col-1");
//         $(".col2").addClass("col-9");
//         $("#menuAbout").addClass("opened");
//         $("#aboutContent").removeClass("close");
//     });
// });
/*
$(function () {
    $("#about, #home, #contact, #portfolio").click(function () {
        $(".forAll").removeClass("col-xl-9 col-9");
        $(".forAll").addClass("col-xl-1 col-1");
        $(".allContent").removeClass("content");
        $(".allContent").addClass("close");
        $(".verticalOption").removeClass("opened");
        $(".col2").addClass("col-xl-9 col-9");
        $("#menuAbout").addClass("opened");
        $("#aboutContent").removeClass("close");
    });
});*/

function myFun(){
    $(".forAll").removeClass("col-xl-9 col-9");
    $(".forAll").addClass("col-xl-1 col-1");
    $(".allContent").removeClass("content");
    $(".allContent").addClass("close");
    $(".verticalOption").removeClass("opened");
    $(".col2").addClass("col-xl-9 col-9");
    $("#menuAbout").addClass("opened");
    $("#aboutContent").removeClass("close");
}


$(document).click(function(e) {

    if($(e.target).is("#about")){
        myFun();
    }
    else if ($(e.target).is("#home")) {
        myFun();
    }
    else if ($(e.target).is("#contact")) {
        myFun();
    }
    else if ($(e.target).is("#protfolio")) {
        myFun();
    }

});



