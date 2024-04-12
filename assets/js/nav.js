function nav(x){
    $(".statusx").text("");
    switch(x){
        case 1:
            getfundsdata();
            $(".bi-house-door").css("color","rgb(25, 135, 84)");
            $(".bi-envelope").css("color","rgb(27,29,29)");
            $(".bi-inboxes").css("color","rgb(27,29,29)");
            $(".bi-person-circle").css("color","rgb(27,29,29)");
            $("#home").css("display","block");
            $("#inbox").css("display","none");
            $("#transactions").css("display","none");
            $("#account").css("display","none");
            break;
        case 2:
            $(".bi-house-door").css("color","rgb(27,29,29)");
            $(".bi-envelope").css("color","rgb(25, 135, 84)");
            $(".bi-inboxes").css("color","rgb(27,29,29)");
            $(".bi-person-circle").css("color","rgb(27,29,29)");
            $("#home").css("display","none");
            $("#inbox").css("display","block");
            $("#transactions").css("display","none");
            $("#account").css("display","none");
            break;
        case 3:
            $(".bi-house-door").css("color","rgb(27,29,29)");
            $(".bi-envelope").css("color","rgb(27,29,29)");
            $(".bi-inboxes").css("color","rgb(25, 135, 84)");
            $(".bi-person-circle").css("color","rgb(27,29,29)");
            $("#home").css("display","none");
            $("#inbox").css("display","none");
            $("#transactions").css("display","block");
            $("#account").css("display","none");
            break;
        case 4:
            $(".bi-house-door").css("color","rgb(27,29,29)");
            $(".bi-envelope").css("color","rgb(27,29,29)");
            $(".bi-inboxes").css("color","rgb(27,29,29)");
            $(".bi-person-circle").css("color","rgb(25, 135, 84)");
            $("#home").css("display","none");
            $("#inbox").css("display","none");
            $("#transactions").css("display","none");
            $("#account").css("display","block");
            break;
    }
}
function adminnav(x){
    $(".statusx").text("");
    switch(x){
        case 1:
            
            $(".bi-person-plus-fill").css("color","rgb(25, 135, 84)");
            $(".bi-activity").css("color","rgb(27,29,29)");
            $(".bi-stopwatch").css("color","rgb(27,29,29)");
            $(".bi-person-circle").css("color","rgb(27,29,29)");
            $("#register").css("display","block");
            $("#activate").css("display","none");
            $("#lend").css("display","none");
            $("#client").css("display","none");
            break;
        case 2:
            $(".bi-person-plus-fill").css("color","rgb(27,29,29)");
            $(".bi-activity").css("color","rgb(25, 135, 84)");
            $(".bi-stopwatch").css("color","rgb(27,29,29)");
            $(".bi-person-circle").css("color","rgb(27,29,29)");
            $("#register").css("display","none");
            $("#activate").css("display","block");
            $("#lend").css("display","none");
            $("#client").css("display","none");
            getmembers();
            break;
        case 3:
            $(".bi-person-plus-fill").css("color","rgb(27,29,29)");
            $(".bi-activity").css("color","rgb(27,29,29)");
            $(".bi-stopwatch").css("color","rgb(25, 135, 84)");
            $(".bi-person-circle").css("color","rgb(27,29,29)");
            $("#register").css("display","none");
            $("#activate").css("display","none");
            $("#lend").css("display","block");
            $("#client").css("display","none");
            break;
        case 4:
            $(".bi-person-plus-fill").css("color","rgb(27,29,29)");
            $(".bi-activity").css("color","rgb(27,29,29)");
            $(".bi-stopwatch").css("color","rgb(27,29,29)");
            $(".bi-person-circle").css("color","rgb(25, 135, 84)");
            $("#register").css("display","none");
            $("#activate").css("display","none");
            $("#lend").css("display","none");
            $("#client").css("display","block");
            break;
    }
}