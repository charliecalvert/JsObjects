/**
 * @author Charlie Calvert
 */

angular.module('npcapp', ['ui.bootstrap']);

function NpcController($scope, $dialog) {
    'use strict';

    $scope.npcs = [
        {
            npcName: 'George',
            hitPoints: 0,
            health: 0,
            totalMoves: 0
        },
        {
            npcName: 'Sam',
            hitPoints: 0,
            health: 0,
            totalMoves: 0
        },
        {
            npcName: 'Suzy',
            hitPoints: 0,
            health: 0,
            totalMoves: 0
        }
    ];

    var dialogOptions = {
        controller: 'EditCtrl',
        templateUrl: 'itemEdit.html'
    };

    $scope.edit = function(npc) {
        var itemToEdit = npc;

        $dialog
            .dialog(
                angular.extend(dialogOptions, {
                    resolve: {
                        npc: angular.copy(itemToEdit)
                    }
                })
            )
            .open()
            .then(function(result) {
                if (result) {
                    angular.copy(result, itemToEdit);
                }
                itemToEdit = undefined;
            });
    };
}

// the dialog is injected in the specified controller
function EditCtrl($scope, npc, dialog) {
    'use strict';

    $scope.npc = npc;

    $scope.save = function() {
        dialog.close($scope.npc);
    };

    $scope.close = function() {
        dialog.close(undefined);
    };
}
