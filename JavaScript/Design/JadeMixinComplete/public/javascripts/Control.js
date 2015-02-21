/**
 * Created by charlie on 2/19/15.
 */

function setActiveMenuItem() {
    $(".nav li").removeClass("active");

    // var menuItem = $('a[href=".' + this.location.pathname + '"]');
    var name = this.location.pathname;
    var name = name.slice(1, name.length).trim();
    if (name.length === 0) { name = 'home'; }
    var menuItem1 = $('#' + name);

    menuItem1.addClass('active');
}

$(document).ready(function() {
    setActiveMenuItem();
});