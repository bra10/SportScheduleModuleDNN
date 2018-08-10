var leagues = [];
var sportScheduleFE = [];

var domain = "http://localhost:56006/";



function init()
{   

 
    $('#loadingModal').modal('show');
    
    getLeagues();
}

function displayView() {
    if (leagues.length == 0) {
        displayMessage("There aren't leagues");
    }
    else {
        displayLeagues();
    }
}

function displayMessage(message) {
    
    var messageHtml = $("#message-text");
    messageHtml.html("");
    messageHtml.append(
        "<div class='row text-center'>" +
        "<h2 class='message-text text-success'>" + message + "</h2>" +
        "</div>"
    );
    
    $("#content").addClass('hidden');
    $("#errorMessage").removeClass('hidden');
}


function displayLeagues()
{
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var leaguesHtml = $("#content");
	leaguesHtml.html("");
    
    leaguesHtml.append(
                        
                        "<div class='text-center text-success'>" +
                                    "<h2 class='section-header'>Leagues</h2>"+
                        "</div>"
                        );
    
    
    for( var i = 0 ; i < leagues.length ; i++ )
	{   
                
                
                var date = new Date(leagues[i].createdDate);
                            
                leaguesHtml.append(
                    "<div class='border bg-gray'>" +
                        "<div class='border-info'>" +
                            "<div class='row'>" + 
                                "<div class='col-sm-2'>" + 

                                    "<div class='text-center radioButton'>" +
                                        "<input type='radio' id='l" + i + "' class='form-check-input' name='optradio' value='" + leagues[i].moduleID + "'>" +
                                    "</div>" +
                                "</div>" +                
                                    
                                    "<div class='col-sm-10'>"+
                                        "<h5>  ModuleID: " + leagues[i].moduleID + "</h5>" + 
                                        "<h5> Title: " + leagues[i].title.substr(9).slice(0, -11) + "</h5>" +
                                        "<h5> CreatedByUser: " + leagues[i].createdByUser +  "</h5>" +
                                        "<h5> CreatedDate: " + date.toLocaleDateString("en-US", options) + "</h5>" +
                                    "</div>"+

                                "</div>"+
                            "</div>"+
                        "</div>"
                 );
    }
    
    leaguesHtml.append( 
                            "<div class='text-center'>" + 
        "<button id='saveButton' type='button' class='btn btn-success' onclick='validateInput()' >Save </button>" +
                            
                        "</div >")

    $("#content").removeClass('hidden');
}



function getOption()
{
    var leagueId = -1 ;

    for (var i = 0; i < leagues.length; i++)
    {
        if (document.getElementById( 'l' + i ).checked) {
            leagueId = document.getElementById( 'l' + i ).value;
        }
    }
    return leagueId;
}




function validateInput()
{
    var leagueId = getOption();

    console.log(leagueId);

    if(leagueId >= 0 )
    {
        $('#loadingModal').modal('show');
        postSportScheduleFE(leagueId);
    }
    else
    {
        
        $('#validationModal').modal('show');
    }

    return false;

}

function getLeagues() {

    $.ajax({
        url: domain + "leagues",
        type: "GET",
        contentType: "application/json",
        success: function (res) {
            console.log(res);
            leagues = res;
            delayLoaderInit();

        },
        error: function (err) {
            delayLoaderError("Internal Error");
            console.log(err);
        }
    });

}





function postSportScheduleFE(id)
{
   

    var obj = {
        moduleID: moduleId,
        leagueId: id

    };
  
    $.ajax({
        url: domain + "postSportScheduleFE",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify(obj),
        success: function (res) {
            console.log(res);
          
            delayLoader();

        },
        error: function (err) {
            delayLoaderError("Internal Error");
            console.log(err);
        }
    });

}



function delayLoader()
{
    var delayInMilliseconds = 2000; //2 seconds
    setTimeout(function() {
        $('#loadingModal').modal('hide');
        }, delayInMilliseconds);
}

function delayLoaderInit()
{
    var delayInMilliseconds = 2000; //2 seconds
    setTimeout(function() {
       $('#loadingModal').modal('hide');
       displayView();
    }, delayInMilliseconds);
}

function delayLoaderError(message)
{
    
    var delayInMilliseconds = 2000; //2 seconds
    setTimeout(function() {
       $('#loadingModal').modal('hide');
       displayMessage(message);
    }, delayInMilliseconds);
}


window.onload = init;