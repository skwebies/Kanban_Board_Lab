/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("HomeController",
    [
        "$scope",
        function($scope) {
            $scope.title = "Home";

            $scope.newNote = {};

            $scope.addNote = function () {
                $scope.newNote.id = Date.now();
                $scope.model.todoNotes.push($scope.newNote);
                $scope.newNote = {};

            }

            $scope.deleteNote = function (index) {
                //var index = $scope.model.todoNotes.indexOf(note)
                $scope.model.todoNotes.splice(index, 1);

            }

        }
    ]);