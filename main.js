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
function myFun(column, colName, colContent){
    $(".forAll").removeClass("col-xl-9 col-9");
    $(".forAll").addClass("col-xl-1 col-1");
    $(".allContent").removeClass("content");
    $(".allContent").addClass("close");
    $(".verticalOption").removeClass("opened");
    $(column).addClass("col-xl-9 col-9");
    $(colName).addClass("opened");
    $(colContent).removeClass("close");
}


$(document).click(function(e) {
    if($(e.target).is("#about")){
        myFun(".col2", "#menuAbout","#aboutContent");
    }
    else if ($(e.target).is("#home")) {
        myFun(".col1", "#menuHome", "#homeContent");
    }
    else if ($(e.target).is("#contact")) {
        myFun(".col3","#menuContact", "#contactContent");
    }
    else if ($(e.target).is("#portfolio")) {
        myFun(".col4","#menuPortfolio","#portfolioContent");
    }
});

/*
(function ($) {
    function mediaSize() {
        if (window.matchMedia('(min-width: 550px)').matches) {
            $(".inBody").removeClass("flex-row-reverse");
            $(".inBody").addClass("flex-column-reverse");
        } else {
            $(".inBody").addClass("flex-row-reverse");
            $(".inBody").removeClass("flex-column-reverse");
        }
    };

    mediaSize();
    window.addEventListener('resize', mediaSize, false);
})(jQuery);*/
