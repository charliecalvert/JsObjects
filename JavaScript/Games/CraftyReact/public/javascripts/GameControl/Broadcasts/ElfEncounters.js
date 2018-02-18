angular.module('elfGameMod')
    .factory('encounters', function(gameEventService, people) {
        'use strict';
        return new Encounters(gameEventService, people);
    });

const Encounters = (function() {

    let gameEventService = null;
    let people = null;

    function Encounters(gameEventServiceInit, peopleInit) {
        people = peopleInit;
        gameEventService = gameEventServiceInit;
    }

    const rollD3 = function() {
        return Math.floor(Math.random() * 3) + 1;
    };

    Encounters.prototype.encounterFood = function(food, count) {
        const foodDetails = "Food: {0} (X:{2} Y:{4}) ({1}px - {3}px)";
        const debug = foodDetails.format(count, food.x, food.x / food.w, food.y, food.y / food.h);
        gameEventService.debugBroadcast(debug);

        if (count === 4) {
            gameEventService.encounterBroadcast({
                encounterType: 'food',
                message: 'Food Success',
                details: debug,
                //food: food,
                count: count,

            });
        } else {
            gameEventService.encounterBroadcast({
                encounterType: 'food',
                message: 'Food Success',
                details: debug,
                //food: food,
                count: count,
            });
        }
        return true;
    };

    Encounters.prototype.encounterBush = function(bush, count) {
        var name = 'Tree';
        if (bush.__c.Bush) {
            name = 'Bush'
        }
        var foodDetails = "{5}) {6}: {0} (X:{2} Y:{4}) ({1}px - {3}px)";
        var debug = foodDetails.format(
            count,
            bush.x,
            bush.x / bush.w,
            bush.y,
            bush.y / bush.h,
            this.bushHits++,
            name);
        gameEventService.debugBroadcast(debug);
        gameEventService.encounterBroadcast({
            bushHits: this.bushHits,
            status: 'success',
            encounterType: 'bush',
            details: debug,
            x: bush.x,
            y: bush.y,
            count: count
        });
        return true;
    };

    Encounters.prototype.encounter = function(village) {
        village.tower.hitPoints -= rollD3(village);
        gameEventService.debugBroadcast(people.heroMain.name);

        const status = {
            status: '',
            encounterType: 'tower',
            heroStatus: {
                name: people.heroMain.name,
                bonusDamage: people.heroMain.bonusDamage(),
                bonusHitPoints: people.heroMain.bonusHitPoints(),
                hitpoints: people.heroMain.hitPoints,
                damage: people.heroMain.damage
            },
            towerStatus: {
                name: 'tower',
                bonusDamage: village.tower.bonusDamage(),
                bonusHitPoints: village.tower.bonusHitPoints(),
                hitpoints: village.tower.hitPoints,
                damage: village.tower.damage
            }
        };
        const heroStatus = {};
        gameEventService.debugBroadcast('Tower hit points: ' + village.tower.hitPoints);
        if (village.tower.hitPoints <= 0) {
            status.status = 'success';
            gameEventService.encounterBroadcast(status);
            return true;
        } else {
            status.status = 'miss';
            gameEventService.encounterBroadcast(status);
            if (this.misses++ > 3) {
                Crafty.trigger('youLose', Crafty);
            }

            return false;
        }
    };

    return Encounters;
})();