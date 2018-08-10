
var schedule = [];
var standings = [];
var league;
var domain = "http://localhost:56006/";

function init() {
    
    $('#loadingModal').modal('show');
    getLeague();

}

function getLeague() {

    
    $.ajax({
        url: domain + "league/" + moduleId,
        type: "GET",
        contentType: "application/json",
        success: function (res) {
            console.log(res);
            league = res;
            displayView();
            
        },
        error: function (err) {
            delayLoaderError("Internal Error");
            console.log(err);
        }
    });

}

function displayView()
{
    if (league == null) {
        delayLoaderError("League not set by admin user");
        
    }
    else {
        //displayLeagueName( league.title );
        initStandings(league.moduleID);
        initSchedule(league.moduleID);
    }
}


function displayLeagueName( title )
{
    var messageHtml = $("#leagueName");
    title = title.substr(9).slice(0, -11);
    messageHtml.html("");
    messageHtml.append("<h1 class='page-header'>" + title + "</h1>" +
                        "<hr>"
                        );
}


function displayMessage( message )
{
    
    var messageHtml = $("#message-text");
    messageHtml.html("");
    messageHtml.append(  
                            "<div class='row text-center'>"  + 
                                "<h2 class='message-text text-success'>" + message + "</h2>" +
                            "</div>" 
                        );
    $("#content").addClass('hidden');
    $("#errorMessage").removeClass('hidden');

}




function initSchedule( id )
{
    
    $.ajax({
        url: domain + "games/" + id ,
        type:"GET",
        contentType:"application/json",
        success:function(res)
                {
                    console.log(res);
                    schedule = res;
                    delayLoader();
                    
                },
        error:function(err)
                {
                    delayLoaderError("Internal Error")
                    console.log(err);
                }
    });

}

function initStandings( id )
{
    
    $.ajax({
        url: domain + "teams/" + id,
        type:"GET",
        contentType:"application/json",
        success:function(res)
                {
                    console.log(res);
                    standings = res;
                    
                },
        error:function(err)
                {
                    delayLoaderError("Internal Error");
                    console.log(err);
                }
    });

}


function displaySchedule()
{
    
    if( schedule.length == 0 )
    {
        displayMessage("There aren't games in the league");
        return;
    }
    
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var scheduleHtml = $("#content");
	scheduleHtml.html("");
    
    var scheduleString = 
                        "<div class='text-center text-success' > "+
                                    "<h2 class='section-header'>Schedule</h2>"+
                        "</div>";
                        
    
    
    for( var i = 0 ; i < schedule.length ; i++ )
	{   
                var date = new Date(schedule[i].gameDate);
                
                
                            
                scheduleString +=  "<div class='border bg-gray'>" +
                                        "<div>"+
                                            "<h3>" +  date.toLocaleDateString("en-US", options) + "</h3>" +
                                        "</div>"+
                
                                        "<div class='border-info'>" +
                                            
                                            "<div class='row'>" + 
                                                "<div class='col-sm-3'>" +
                                                    "<h5>" +  date.toLocaleString()  + "</h5>"+
                                                    "<h5>" + schedule[i].locationName + "</h5>"+
                                                    "<h5>" + schedule[i].gameType  + "</h5>"+
                                
                                                "</div>"+
                                                "<div class='col-sm-3'>"+
                                                    "<h4>" + schedule[i].teamName1 + "</h4>"+
                                                "</div>"+
                                                "<div class='col-sm-3'>" + 
                                                    appendScore(schedule[i].teamScore1, schedule[i].teamScore2 ) + 
                                                "</div>" +
                                                "<div class='col-sm-3'>"+
                                                    "<h4>" + schedule[i].teamName2 + "</h4>"+
                                                "</div>"+
                                            "</div>"+
                                        "</div>" +
                                    "</div>";
                                    
    }

    scheduleHtml.append(scheduleString);
    $("#errorMessage").addClass('hidden');
    $("#content").removeClass('hidden');

}

function appendScore(score1 , score2 )
{
    if (score1 > - 1) {
        return "<h4>" + score1 + " - " + score2 + "</h4>";
    }
    else {
        return "<h4> - </h4>";
    }
}



function displayStandings()
{
	
    if( standings.length == 0 )
    {
        displayMessage("There aren't teams in the league");
        return;
    }
    
    var standingsHtml = $("#content");
	standingsHtml.html("");
    var stringHtml = "";
    stringHtml =    
                   "<div class='text-center text-success'>" +
                                    "<h2 class='section-header'>Standings</h2>"+
                   "</div>"+

                        "<div class='standings'>" +
                            "<table class='table'>" +
                                "<thead>" +
                                    "<tr>" +
                                    "<th scope='col'>Pos</th>" +
                                    "<th scope='col'>Equipos</th>" +
                                    "<th scope='col'>JJ</th>" +
                                    "<th scope='col'>JG</th>" +
                                    "<th scope='col'>JP</th>" +
                                    "<th scope='col'>JE</th>" +
                                    "<th scope='col'>GF</th>" +
                                    "<th scope='col'>GE</th>" +
                                    "<th scope='col'>PTS</th>" +
                                    "</tr>" +
                                "</thead>" +
                                "<tbody>"
                     ;
    
    
    for( var i = 0 ; i < standings.length ; i++ )
	{   
                
                stringHtml += 
                    "<tr>"+
                        "<th scope='row'>" + i + "</th>" +
                        "<td>" + standings[i].teamName + "</td>" +
                        "<td>" + standings[i].playedGames + "</td>" +
                        "<td>" + standings[i].wins + "</td>" +
                        "<td>" + standings[i].losses + "</td>" +
                        "<td>" + standings[i].ties  + "</td>" +
                        "<td>" + standings[i].runsFor + "</td>" +
                        "<td>" + standings[i].runsAgainst  + "</td>" +
                        "<td>" + standings[i].points + "</td>" +
                        
                    "</tr>"
                    ;
    }

    stringHtml += 
                "</tbody>" +
            "</table>" +
        "</div>"
    ;

    standingsHtml.html(stringHtml);
    $("#errorMessage").addClass('hidden');
    $("#content").removeClass('hidden');

}

function delayLoader()
{
    var delayInMilliseconds = 2000; //2 seconds
    setTimeout(function() {
        $('#loadingModal').modal('hide');
        displayLeagueName( league.title );
        displaySchedule();
        }, delayInMilliseconds);
}

function delayLoaderError( message )
{
    var delayInMilliseconds = 2000; //2 seconds
    setTimeout(function() {
       $('#loadingModal').modal('hide');
       displayMessage(message);
    }, delayInMilliseconds);
}


window.onload = init;