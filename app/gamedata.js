

function summonerLookUp() {
    var SUMMONER_NAME = "";
    SUMMONER_NAME = $("#userName").val();
 
    if (SUMMONER_NAME !== "") {

        $.ajax({
            url: 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + SUMMONER_NAME +  '?api_key=c17a43ab-a7a2-40b9-8dbd-be3f67d189e1',
            type: 'GET',
            dataType: 'json',
            data: {

            },
            success: function (json) {
                var SUMMONER_NAME_NOSPACES = SUMMONER_NAME.replace(" ", "");

                SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();

                summonerLevel = json[SUMMONER_NAME_NOSPACES].summonerLevel;
                summonerId = json[SUMMONER_NAME_NOSPACES].id;
                

                document.getElementById("sLevel").innerHTML = summonerLevel;
                document.getElementById("sID").innerHTML = summonerId;
                document.getElementById("sIcon").innerHTML = "<img src='http://avatar.leagueoflegends.com/na/" + SUMMONER_NAME + ".png'>";
                
                
                gameLookUp(summonerId);
            },
            
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                alert("Invalid or Non-Existent Entry!");
            }
        });
   
    } else {}
}


// function summonerStatsLookUp(summonerId) {
    
//         $.ajax({
//             url: 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + summonerId + '/summary?season=SEASON2015&api_key=c17a43ab-a7a2-40b9-8dbd-be3f67d189e1',
//             type: 'GET',
//             dataType: 'json',
//             data: { 
                
//             },
//             success: function (resp) {
                
//                 numWins = resp.playerStatSummaries[0].playerStatSummaryType.Unranked.wins;
              
                
//                 document.getElementById("sWins").innerHTML = numWins; 
               
//             },
            
//             error: function (XMLHttpRequest, textStatus, errorThrown) {
//                 alert("Error Getting Game Data");
//             }
//         });
// }
 
 
 

function gameLookUp(summonerId) {

    $.ajax({
        url: 'https://na.api.pvp.net/api/lol/na/v1.3/game/by-summoner/' + summonerId + '/recent?api_key=c17a43ab-a7a2-40b9-8dbd-be3f67d189e1',
        type: 'GET',
        dataType: 'json',
        data: { 
            
        },
        success: function (resp) {
            
            win = resp.games[0].stats.win;
            item2 = resp.games[0].stats.item2;
            
            document.getElementById("sGame").innerHTML = win; 
            document.getElementById("sitem2").innerHTML = item2; 
        },
        
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert("Error Getting Game Data");
        }
    });
}