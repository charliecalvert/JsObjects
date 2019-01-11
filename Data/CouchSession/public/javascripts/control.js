$(document).ready(function() {
    'use strict';

    function setActiveMenuItem(pathname) {
        $('.nav li').removeClass('active');
        try {
            $('#' + pathname).addClass('active');
        } catch (e) {
            console.log(
                'Could not find selector. This is expected when testing.',
                e
            );
        }
    }

    $('nav li').hover(function(event) {
        //setActiveMenuItem(event.target.pathname);
        setActiveMenuItem(event.currentTarget.id);
    });

    function togglePage1(element) {
        // Remove slash from front of URI
        element = element.slice(1, element.length);

        var page = document.getElementById(element);

        if (page.style.display === 'none') {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    }

    function togglePage(element) {
        // Remove slash from front of URI
        element = element.slice(1, element.length);

        var elements = ['basics-page', 'database-page', 'authentication-page'];

        var index = elements.indexOf(element);
        if (index > -1) {
            elements.splice(index, 1);
        }
        var page = document.getElementById(element);
        if (page) {
            page.style.display = 'block';
            for (var i = 0; i < elements.length; i++) {
                var item = elements[i];
                page = document.getElementById(item);
                page.style.display = 'none';
            }
        }
    }

    togglePage('/basics-page');
    setActiveMenuItem('basics-menu');
    //var basicsPage = document.getElementById('basics-page');
    //var databasePage = document.getElementById('database-page');
    //var authenticationPage = document.getElementById('authentication-page');

    //hidePage(basicsPage);
    //hidePage(databasePage);
    //hidePage(authentication-page);

    $('.togglePageClick').click(function(event) {
        event.preventDefault();
        togglePage(event.target.pathname);
    });

    $('.urlClickss').click(function(event) {
        event.preventDefault();
        console.log(event.target.pathname);
        showPage(event.target.pathname + '?jsoncallback=?');
        /*$.ajax({
         url: event.target.pathname,
         method: "GET",
         datatype: "jsonp"
         })*/
    });

    function sendDataAndShowPage(pageRoute, data, callback) {
        $.getJSON(pageRoute, data, function(response) {
            if (callback) {
                callback(response);
            }
            $('#displayArea').html(JSON.stringify(response, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function(jq, status, error) {
                $('#displayArea').html('error: ' + jq.responseText);
                console.log('error: ', status);
                console.log('error: ', error);
            })
            .always(function() {
                console.log('complete');
            });
    }

    function showPage(pageRoute, callback) {
        $.getJSON(pageRoute, function(response) {
            if (callback) {
                callback(response);
            }
            $('#displayArea').html(JSON.stringify(response, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function(jq, status, error) {
                var responseText = JSON.parse(jq.responseText);
                $('#displayArea').html(
                    'error: ' + JSON.stringify(responseText, null, 4)
                );
                console.log('error: ', status);
                console.log('error: ', error);
            })
            .always(function() {
                console.log('complete');
            });
    }

    $('#page01').click(function() {
        showPage('/page01');
    });

    $('#page02').click(function() {
        showPage('/page02');
    });

    $('#page03').click(function() {
        showPage('/page03');
    });

    $('#views01').click(function() {
        showPage('/views/page01');
    });

    $('#views02').click(function() {
        showPage('/views/page02');
    });

    $('#sessionStatus').click(function() {
        showPage('/views/session-status');
    });

    $('#fileStore').click(function() {
        showPage('/views/file-store');
    });

    $('#request').click(function() {
        showPage('/views/request');
    });

    $('#designDoc').click(function() {
        showPage('/designDoc');
    });

    $('#sessionView').click(function() {
        showPage('/viewSessions?designDoc=elf-session&view=elf-session-store');
    });

    $('#sessionViewCouch').click(function() {
        showPage('/viewSessions?designDoc=elf-session&view=elf-sessions');
    });

    $('#sessionExpires').click(function() {
        showPage('/elfSessionStoreExpires', function(response) {
            if (response.docs.rows) {
                var rows = response.docs.rows;
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i].key) {
                        rows[i].date = new Date(rows[i].key);
                    }
                }
            }
        });
    });

    $('#couchSessionExpires').click(function() {
        showPage('/session-couch-expires', function(response) {
            if (response.docs.rows) {
                var rows = response.docs.rows;
                for (var i = 0; i < rows.length; i++) {
                    if (rows[i].key) {
                        rows[i].date = new Date(rows[i].key);
                    }
                }
            }
        });
    });

    $('#getDatabaseName').click(function() {
        showPage('/databaseName');
    });

    $('#setDatabaseName').click(function() {
        var inputDbName = $('#inputDatabaseName').val();
        sendDataAndShowPage('/databaseName', {
            newDbName: inputDbName
        });
    });

    $('#loginStatus').click(function() {
        showPage('/login-status');
    });

    $('#logout').click(function() {
        showPage('/logout');
    });

    $('#loginPage').click(function() {
        showPage('/loginPage');
    });
});
