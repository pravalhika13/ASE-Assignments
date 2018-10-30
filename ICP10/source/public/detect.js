var app = angular.module("facedetect", []);
app.controller("Ctrl1", function ($scope, $http) {
    //Delclaring the books variable.
    $scope.url = "";
    
    

    //In this method will make a get request to node api to get all records. 
    $scope.getName = function () {
        $scope.name="";
        $scope.desc="";
        $http({
            method: 'GET',
            url: 'https://secret-brushlands-75804.herokuapp.com/get1?url=' + $scope.url
        }).then(function successCallback(response) {
            console.log(response.data);
            
           
            $scope.gender=response.data[0].faceAttributes.gender;
           $scope.age=response.data[0].faceAttributes.age;
           $scope.eyemakeup=response.data[0].faceAttributes.makeup.eyeMakeup

        
        }, function errorCallback(response) {
            console.log(response);
        });
    }
});