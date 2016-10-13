/// <reference path="../../angular.js" />


angular.module("mainModule")
    .component("trashCan", {
        templateUrl: "Scripts/components/Droppables/TrashCan.html",
        controller: function () {
            var scope = this;
            var component = {};

            setTimeout(function () {
                component = $("#trashcan-" + scope.id);
                component.droppable({
                    hoverClass: "droppable-hover",
                    drop: function (event, ui) {
                        var element = ui.draggable.css('position', '');
                        $(this).append(element);

                        $(ui.draggable).fadeOut(1000);


                    },

                });
            });
        },
        controllerAs: "scope",
        bindings: {
            id: "="

        }
    });