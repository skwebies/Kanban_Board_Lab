/// <reference path="../../angular.js" />


angular.module("mainModule")
    .component("progressbar", {
        controller: function () {
            var scope = this;
            //var progressbar = $("#progressbar-" + scope.id);

            setTimeout(function () {
                $("#progressbar-" + scope.id).progressbar({
                    value: scope.value
                });
            }, 100);


            scope.changeValue = function (number) {
                scope.value += number;
                $("#progressbar-" + scope.id).progressbar("option", "value", scope.value);
            };
        },
        controllerAs: "scope",
        templateUrl: "Scripts/Components/Progressbar/Progressbar.html",
        bindings: {
            id: "=",
            value: "="


        }
});