/**
 * Created by charlie on 5/30/2015.
 */


elf.GetBarFoo = (function() {

    function GetBarFoo() {
        $("#getBar").click(getBar);
        $("#getFoo").click(getFoo);
    }

    function getBar() {
        elf.utilities.clear();
        $('#displayArea').load('/bar', function(err) {
            console.log('page loaded');
        })
    }

    function getFoo() {
        elf.utilities.clear();
        $('#displayArea').load('/foo', function(err) {
            console.log('page loaded');
        })
    }

    return GetBarFoo;
})();

