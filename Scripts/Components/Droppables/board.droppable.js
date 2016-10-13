/// <reference path="../../angular.js" />

angular.module("mainModule")
    .component("dropBoard", {
        templateUrl: "Scripts/components/Droppables/DropBoard.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#dropboard-" + scope.id);
                component.droppable({
                    drop: function (event, ui) {
                        $(this)
                        .addClass("ui-state-highlight");



                        console.log("Dropped in " + scope.id)
                    },

                });
            });
        },
        controllerAs: "scope",
        bindings: {
            id: "="

        }
    });