/// <reference path="../../angular.js" />

angular.module("mainModule")
    .component("todoNote", {
        templateUrl: "Scripts/Components/Draggables/TodoNote.html",
        controller: function () {
            var model = this;
            var component = {};

            setTimeout(function () {
                component = $("#draggable-" + model.id);
                component.draggable({
                    grid: [10, 10],
                    cursor: "move"


                });
                component.disableSelection();

            }, 100);

            //model.delete = function () {
            //    model.onDelete({note: model.note});
            //};


        },
        controllerAs: "model",
        bindings: {
            id: "<",
            title: "<",
            description: "<"
            //note:"<",
            //onDelete: "&"

        }
    })