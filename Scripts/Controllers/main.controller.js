/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController",
    [
        "$scope",
        "$location",
        "$route",
        function($scope,  $location, $route) {
            $scope.$route = $route;

            $scope.model = {
                todoNotes: [
                    {
                        id: 1,
                        title: "Todo Note 1",
                        description:"Description 1"


                    },
                    {
                        id: 2,
                        title: "Todo Note 2",
                        description:"Description 2"


                    }

                ]

            };



            $scope.go = function(url) {
                $location.path(url);
            };
        }
    ]);