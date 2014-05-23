define(function(require) {'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = ( function() {
            var paragraph01 = $("#paragraph01");
            var paragraph02 = $("#paragraph02");
            var listItem = $(".listItem");
            var intro = $("#intro");
            

            function ClickEvents() {
                $(intro).html("ClickEvents is loaded. Click items on this page.");
                $(intro).addClass('blue');
                $(listItem).click(listClick);
                $(paragraph01).click(p01);
                $(paragraph02).click(p02);
                $("input[name=groupRadio]:radio").click(radioSelection);                
                $("input[name=groupCheck]:checkbox").click(displayCheckboxSelection);
            }
            
            var displayCheckboxSelection = function(event) {
                removeClasses();
                var id = event.target.id;
                var checked = $("#"+id).is(':checked');
                $(intro).html("CheckBox " + id + " is checked: " + checked);
                $(intro).addClass("blue");
            };

            var radioSelection = function() {
                removeClasses();
                var id = $("input[name=groupRadio]:checked").attr('id');
                $(intro).html("Radio clicked: " + id);                
                $(intro).addClass("green");
            };
            
            var removeClasses = function() {
                $(paragraph01).removeClass();
                $(paragraph02).removeClass();
                $(intro).removeClass();
            };

            var listClick = function(event) {       
                removeClasses();         
                $(intro).html(event.target.innerHTML);
                $(intro).addClass('blue');
            };

            var p01 = function() {
                removeClasses();
                $(paragraph01).addClass('blue');
            };

            var p02 = function() {
                removeClasses();
                $(paragraph02).addClass('blue');
            };

            return ClickEvents;

        }());

    return elf.ClickEvents;

});
