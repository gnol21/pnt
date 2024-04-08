var pntId;
var accountStatus;
var incomeperS;

function nav(x) {
    $(".statusx").text("");
    switch (x) {
        case 1:
            getfundsdata();
            medata(pntId);
            $(".bi-house-door").css("color", "rgb(25, 135, 84)");
            $(".bi-envelope").css("color", "rgb(27,29,29)");
            $(".bi-inboxes").css("color", "rgb(27,29,29)");
            $(".bi-person-circle").css("color", "rgb(27,29,29)");
            $("#home").css("display", "block");
            $("#inbox").css("display", "none");
            $("#transactions").css("display", "none");
            $("#account").css("display", "none");
            break;
        case 2:
            if(accountStatus){inbox(pntId);}
            $(".bi-house-door").css("color", "rgb(27,29,29)");
            $(".bi-envelope").css("color", "rgb(25, 135, 84)");
            $(".bi-inboxes").css("color", "rgb(27,29,29)");
            $(".bi-person-circle").css("color", "rgb(27,29,29)");
            $("#home").css("display", "none");
            $("#inbox").css("display", "block");
            $("#transactions").css("display", "none");
            $("#account").css("display", "none");
            break;
        case 3:
            if(accountStatus){transaction();}
            $(".bi-house-door").css("color", "rgb(27,29,29)");
            $(".bi-envelope").css("color", "rgb(27,29,29)");
            $(".bi-inboxes").css("color", "rgb(25, 135, 84)");
            $(".bi-person-circle").css("color", "rgb(27,29,29)");
            $("#home").css("display", "none");
            $("#inbox").css("display", "none");
            $("#transactions").css("display", "block");
            $("#account").css("display", "none");
            break;
        case 4:
            medata(pntId);
            $(".bi-house-door").css("color", "rgb(27,29,29)");
            $(".bi-envelope").css("color", "rgb(27,29,29)");
            $(".bi-inboxes").css("color", "rgb(27,29,29)");
            $(".bi-person-circle").css("color", "rgb(25, 135, 84)");
            $("#home").css("display", "none");
            $("#inbox").css("display", "none");
            $("#transactions").css("display", "none");
            $("#account").css("display", "block");
            break;
    }
}

function adminnav(x) {
    $(".statusx").text("");
    switch (x) {
        case 1:
            $(".bi-person-plus-fill").css("color", "rgb(25, 135, 84)");
            $(".bi-activity").css("color", "rgb(27,29,29)");
            $(".bi-stopwatch").css("color", "rgb(27,29,29)");
            $(".bi-person-circle").css("color", "rgb(27,29,29)");
            $("#register").css("display", "block");
            $("#activate").css("display", "none");
            $("#lend").css("display", "none");
            $("#client").css("display", "none");
            break;
        case 2:
            $(".bi-person-plus-fill").css("color", "rgb(27,29,29)");
            $(".bi-activity").css("color", "rgb(25, 135, 84)");
            $(".bi-stopwatch").css("color", "rgb(27,29,29)");
            $(".bi-person-circle").css("color", "rgb(27,29,29)");
            $("#register").css("display", "none");
            $("#activate").css("display", "block");
            $("#lend").css("display", "none");
            $("#client").css("display", "none");
            getmembers();
            break;
        case 3:
            $(".bi-person-plus-fill").css("color", "rgb(27,29,29)");
            $(".bi-activity").css("color", "rgb(27,29,29)");
            $(".bi-stopwatch").css("color", "rgb(25, 135, 84)");
            $(".bi-person-circle").css("color", "rgb(27,29,29)");
            $("#register").css("display", "none");
            $("#activate").css("display", "none");
            $("#lend").css("display", "block");
            $("#client").css("display", "none");
            break;
        case 4:
            $(".bi-person-plus-fill").css("color", "rgb(27,29,29)");
            $(".bi-activity").css("color", "rgb(27,29,29)");
            $(".bi-stopwatch").css("color", "rgb(27,29,29)");
            $(".bi-person-circle").css("color", "rgb(25, 135, 84)");
            $("#register").css("display", "none");
            $("#activate").css("display", "none");
            $("#lend").css("display", "none");
            $("#client").css("display", "block");
            break;
    }
}

function alertx(x) {
    $(".statusx").text(x);
}

$(document).ready(function () {
    $('#registrationForm').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var formData = $(this).serialize(); // Serialize the form data

        $.ajax({
            type: 'POST',
            url: 'https://iptv.givethanksgrocers.com/register-api.php',
            data: formData,
            dataType: 'json',
            success: function (response) {
                alertx(response.message);
                // Reset the form after successful registration
                $('#registrationForm')[0].reset();
            },
            error: function (xhr, status, error) {
                alertx('Error: ' + xhr.responseText);
            }
        });
    });

    $('#loginForm').submit(function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        var formData = {
            'mobilenumber': $('#mobilenumber2').val(),
            'password': $('#password2').val()
        };

        $.ajax({
            type: 'POST',
            url: 'https://iptv.givethanksgrocers.com/login-api.php', // Update with your login API URL
            data: formData,
            dataType: 'json',
            success: function (response) {
                if (response.status === 'success') {
                    alertx(response.message);
                    $("#login").css("display", "none");
                    $("#nav").css("display", "block");
                    $("#logo").css("display", "block");
                    pntId = response.user_data.id;
                    if (response.user_data.accountstatus === 'inactive') {
                        nav(2);
                        accountStatus=0;
                        $("#dfullname").text(response.user_data.fullname);
                        $("#dmobile").text(response.user_data.mobilenumber);
                        $("#daccountstatus").text(response.user_data.accountstatus);
                        $(".welcome").css("display", "flex");
                    } else {
                        nav(1);
                        accountStatus=1;
                        medata(pntId);
                    }


                    // Redirect to dashboard or perform other actions upon successful login
                } else {
                    alertx(response.message);
                }
                if (response.status === 'admin') {
                    $("#login").css("display", "none");
                    $("#rlogin").css("display", "none");
                    $("#register").css("display", "block");
                    $("#adminnav").css("display", "block");

                }
            },
            error: function (xhr, status, error) {
                alertx('Error: ' + xhr.responseText);
            }
        });
    });

    // Call getfundsdata function when the document is ready
    //getfundsdata();
});

function getfundsdata() {
    $.ajax({
        url: 'https://iptv.givethanksgrocers.com/getfunds-api.php',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            // Check if API call was successful
            if (response.status === 'success') {
                cf = parseInt(response.funds[0].currentfunds);
                da = cf - parseInt(response.funds[0].outfunds);
                di1 = parseInt(response.funds[0].infunds) / parseInt(response.funds[0].totalshare);
                if (di1) {
                    di = di1;
                    de = parseInt(response.funds[0].currentprice)+ di;
                } else {
                    di = 0;
                    de = parseInt(response.funds[0].currentprice);
                }

                // Display funds data 
                $("#dcurrentfunds").text("₱ " + cf);
                $("#davailable").text("₱ " + da);
                $("#dentry").text("Entry : ₱ " + Math.floor(de));
                incomeperS=Math.floor(di);
            } else {
                // Display error message

            }
        },
        error: function (xhr, status, error) {
            // Display error message if AJAX request fails

        }
    });

}

function getmembers() {
    // Fetch shares data from the server
    $.ajax({
        url: 'https://iptv.givethanksgrocers.com/getmembers-api.php',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            // Check if the response status is success
            if (data.status === "success") {
                // Get the table body element
                const tableBody = $('#amember');

                // Empty the table body
                tableBody.empty();

                // Iterate over the shares data
                $.each(data.shares, function (index, share) {
                    // Create a new table row
                    const row = $('<tr>');

                    // Add data to the row
                    row.html(`
                        <td class="tfullname" style="width: 160px;">${share.fullname}</td>
                        <td class="text-center"><input class="form-control-sm" id="${share.user_id}" type="number" min="0" max="100" value="${share.amount}" style="width: 50px;" readonly=""/></td>
                        <td class="text-center"><button class="btn btn-primary" onclick="activateM(${share.user_id})" id="applyButton${share.user_id}" type="button" style="display: none;">Apply</button><button class="btn btn-danger editButton" onclick="editM(${share.user_id})" id="editButton${share.user_id}" type="button">Edit</button></td>                           
                    `);

                    // Append the row to the table body
                    tableBody.append(row);
                });
            } else {
                // If status is error, log the error message
                console.error(data.message);
            }
        },
        error: function (xhr, status, error) {
            console.error('Error:', error);
        }
    });
}


function postSharesData(postData) {
    // URL of your PHP API endpoint
    const url = 'https://iptv.givethanksgrocers.com/setshares-api.php';

    // Make the AJAX POST request
    $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(postData),
        success: function (data) {
            alertx(data.message);
            // Handle the response as needed
        },
        error: function (xhr, status, error) {
            alertx('Error: ' + xhr.responseText);
        }
    });
}

function activateM(i) {
    $("#editButton" + i).css("display", "block");
    $("#applyButton" + i).css("display", "none");
    $('.editButton').prop('disabled', false);
    $("#" + i).prop('readonly', true);
    $(".statusx").text("Activating...");
    av = parseInt($('#' + i).val());
    ac = av * 1000;
    const postData = {
        amount: av,
        credit: ac,
        payment: 0,
        user_id: i
    };
    // Call function to post shares data
    postSharesData(postData);

}

function editM(x) {
    $("#editButton" + x).css("display", "none");
    $("#applyButton" + x).css("display", "block");
    $("#" + x).prop('readonly', false);
    $('.editButton').prop('disabled', true);
}

function inbox(x) {
    // Receiver ID to fetch messages for
    var receiverId = x; // Change this to the desired receiver ID

    // API endpoint URL
    var apiUrl = "https://iptv.givethanksgrocers.com/inbox-api.php?receiver_id=" + receiverId; // Replace inbox_api.php with your actual API endpoint
    // jQuery AJAX request to fetch inbox messages
    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Check if there are messages
            $(".welcome").css("display", "none");
            $("#inboxMessages").empty();
            if (data.length > 0) {
                // Loop through each message and display it
                $.each(data, function (index, message) {
                    var messageHtml = '<div class="card inboxMsg" style="margin-top: 10px;background: rgba(27,29,29,0.85);display: block;">';
                    messageHtml += '<div class="card-header"><svg class="bi bi-star-fill text-warning float-end" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">';
                    messageHtml += '<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>';
                    messageHtml += '</svg>';
                    messageHtml += '<h6 id="msgsender" class="text-nowrap text-truncate text-light float-start mb-0">Message: </h6>';
                    messageHtml += '</div>';
                    messageHtml += '<div id="inboxMsg" class="card-body">';
                    messageHtml += '<p id="msgbox" class="text-light">' + message.message_text + '</p>';
                    messageHtml += '<p id="msgbox" class="text-light">Sender: ' + message.sender_name + '</p>';
                    messageHtml += '<p id="msgbox" class="text-light">' + message.timestamp + '</p>';
                    messageHtml += '</div>';
                    messageHtml += '</div>';

                    $("#inboxMessages").append(messageHtml);
                });
            } else {
                $("#inboxMessages").html("<p>No messages found for this receiver.</p>");
            }
        },
        error: function (xhr, status, error) {
            $("#inboxMessages").html("<p>Error fetching inbox messages: " + error + "</p>");
        }
    });
}
function  transaction(){
    // API endpoint URL
    var apiUrl = "https://iptv.givethanksgrocers.com/transaction-api.php"; // Replace inbox_api.php with your actual API endpoint
    // jQuery AJAX request to fetch inbox messages
    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Check if there are messages
            $(".welcome").css("display", "none");
            $("#transhist").empty();
            if (data.length > 0) {
                // Loop through each message and display it
                $.each(data, function (index, transhist) {
                    if(transhist.amount>1000){
                        ent="Amount :"+transhist.amount;
                    }else{
                        ent="Entry :"+transhist.amount;
                    }
                    var transhistHtml = '<div class="card inboxMsg" style="margin-top: 10px;background: rgba(27,29,29,0.85);display: block;">';
                    transhistHtml += '<div class="card-header"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-clock-history text-warning float-end">';
                    transhistHtml += '<path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"></path>';
                    transhistHtml += '<path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"></path>';
                    transhistHtml += '<path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"></path>';
                    transhistHtml += '</svg>';
                    transhistHtml += '<h6 id="tsender" class="text-nowrap text-truncate text-light float-start mb-0">Transaction:</h6>';
                    transhistHtml += '</div>';
                    transhistHtml += '<div class="card-body" style="margin-top: 10px;">'; 
                    transhistHtml += '<p class="text-light">Type: ' + transhist.type +'</p>';
                    transhistHtml += '<p class="text-light">' + transhist.fullname + '</p>';
                    transhistHtml += '<p class="text-light">' + transhist.description + '</p>';
                    transhistHtml += '<p class="text-light">' + ent + '</p>';
                    transhistHtml += '<p class="text-light">' + transhist.transaction_date + '</p>';
                    transhistHtml += '</div>';
                    transhistHtml += '</div>';

                    $("#transhist").append(transhistHtml);
                });
            } else {
                $("#transhist").html("<p>No transhists found for this receiver.</p>");
            }
        },
        error: function (xhr, status, error) {
            $("#transhist").html("<p>Error fetching inbox transhists: " + error + "</p>");
        }
    });
}

function medata(x) {
    // User ID to fetch data for
    var userId = x; // Change this to the desired user ID

    // API endpoint URL
    var apiUrl = "https://iptv.givethanksgrocers.com/me-api.php?user_id=" + userId; // Update with your API URL

    // jQuery AJAX request to fetch user and shares data
    $.ajax({
        url: apiUrl,
        type: "GET",
        dataType: "json",
        success: function(data) {
            // Check if data is retrieved successfully
            if (data) {
                // Display user and shares data
                as=data.accountstatus;
                if(as==='active'){
                    accountStatus=1;
                    $("#daccountstatus").text(as);
                    $("#dlimit").text(data.credit-data.payment);
                    $("#drepayment").text(data.payment);
                    $("#djoindate").text(data.share_date_added);
                    $("#dcount").text(data.share_amount);
                    $("#dincome").text("₱ " + data.share_amount*incomeperS);
                    $("#dfullname").text(data.fullname);
                    $("#dmobile").text(data.mobilenumber); 
                }

                
            } else {
                // Display error message if no data is retrieved
                $("#userData").html("No data found for the user");
            }
        },
        error: function(xhr, status, error) {
            // Display error message if AJAX request fails
            $("#userData").html("Error fetching data: " + error);
        }
    });
}
function lout() {
    location.reload();
}
let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      event.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = event;
      // Update UI to notify the user they can add to home screen
      document.getElementById('login').style.display = 'none';
      document.getElementById('installpannel').style.display = 'block';
    });

    // Handle install button click event
    document.getElementById('installButton').addEventListener('click', () => {
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            document.getElementById('installpannel').style.display = 'none';
            document.getElementById('login').style.display = 'block';
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        deferredPrompt = null;
      });
    });
            // Function to detect if the user is using the Facebook app
            function isFacebookApp() {
                var ua = navigator.userAgent || navigator.vendor || window.opera;
                return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
            }
    
            // Redirect if not using Facebook app
            if (!isFacebookApp()) {
                document.getElementById('login').style.display = 'none';
            }else{
                document.getElementById('login').style.display = 'block';
            }