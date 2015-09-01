
app.service("gameLookup", function ($http, $q))
{
    // var SUMMONER_NAME = "";
    // SUMMONER_NAME = $("#userName").val();
 
    var deferred = $q.defer();
    $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Reptuar?api_key=c17a43ab-a7a2-40b9-8dbd-be3f67d189e1').then(function (data)
    {
        deferred.resolve(data);
    });
    
    this.getSummonerId = function ()
    {
        return deferred.promise;
    }
})


.controller("gameCtrl", function ($scope, gameLookup)
{
    var promise = gameLookup.getSummonerId();
    promise.then(function (data)
    {
        $scope.id = data;
        console.log($scope.id);
        
    });
    
})    
