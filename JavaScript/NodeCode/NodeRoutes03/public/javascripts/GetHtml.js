/**
 * Created by charlie on 3/17/15.
 */

elf.GetHtml = (function() {

    function GetHtml() {
        $("#getHtml").click(loadHtml);
        $("#getHtmlWithDivs").click(loadHtmlWithDivs);
        $("#getHtmlSecondDiv").click(loadHtmlSecondDiv);
        $("#getMarkdown").click(loadMarkdown);
        $("#getJadeWithMarkdown").click(loadJadeWithMarkdown);
    }


    function loadHtml() {
        elf.utilities.clear();
        $('#displayArea').load('/pageInsert', function(err) {
            console.log('page loaded');
        })
    }

    function loadHtmlWithDivs() {
        elf.utilities.clear();
        $('#displayArea').load('/pageWithDivs', function(err) {
            console.log('page loaded');
        })
    }

    function loadHtmlSecondDiv() {
        elf.utilities.clear();
        $('#displayArea').load('/pageWithDivs #partTwo', function(response, status, xhr ) {
            console.log(response, status, xhr);
        })
    }

    function loadMarkdown() {
        elf.utilities.clear();
        $("#markdown").load("MarkdownSample.md");
    }

    function loadJadeWithMarkdown() {
        elf.utilities.clear();
        $('#displayArea').load('jadeWithMarkdown', function(response, status, xhr ) {
            console.log(response, status, xhr);
        });
    }

    return GetHtml;
})();

elf.GetMarkdown = (function() {

    function GetMarkdown() {
        $("#getMarkdown").click(loadMarkdown);
        $("#getJadeWithMarkdown").click(loadJadeWithMarkdown);
    }

    function loadMarkdown() {
        elf.utilities.clear();
        $("#markdown").load("MarkdownSample.md");
    }

    function loadJadeWithMarkdown() {
        elf.utilities.clear();
        $('#displayArea').load('jadeWithMarkdown', function(response, status, xhr ) {
            console.log(response, status, xhr);
        });
    }

    return GetMarkdown;
})();
