import React from 'react';
import styles from './index.css';

export default class GetNine extends React.Component {

    constructor() {
        super();
    }

    nine() {
        const nineResult = $('#getSimpleNine');
        nineResult.load('/nine', function(response, status, xhr) {
            if (status == "error") {
                nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
            }
        });
    };

    getNine() {
        const nineResult = $('#getNineResult');
        nineResult.load('/getNine', function(response, status, xhr) {
            if (status == "error") {
                nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
            }
        });
    };

    getNineParse() {
        const nineResultParse = $('#getNineParseResult');
        $.get('/getNine', function(data) {
            console.log('Got server data back', data);
            nineResultParse.html("The value sent from the server is: <strong>" + data.result + "</strong>");
        });
    };

    add() {
        const operandA = $("#operandA").val();
        const operandB = $("#operandB").val();

        $.ajax({
            url: "/add",
            type: "GET",
            data: {
                "operandA": operandA,
                "operandB": operandB
            },
            dataType: "json",
            success: function(data) {
                $("#addResult").html(operandA + " + " + operandB + " = " + data.result);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    };

    addPost() {
        const operandA = $("#operandAPost").val();
        const operandB = $("#operandBPost").val();

        $.ajax({
            url: "/add",
            type: "POST",
            data: {
                "operandA": operandA,
                "operandB": operandB
            },
            dataType: "json",
            success: function(data) {
                $("#addResultPost").html(operandA + " + " + operandB + " = " + data.result);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR.responseText);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    };

    render() {
        return (
            <div>

                <h2>Simple Nine</h2>

                <button onClick={this.nine}>nine</button>
                <p id="getSimpleNine">Get Nine Result will be placed here.</p>

                <h2>Get Nine</h2>

                <button onClick={this.getNine}>getNine</button>
                <p id="getNineResult">Get Nine Result will be placed here.</p>

                <h2>Get Nine Parse</h2>
                <button onClick={this.getNineParse}>Get Nine Parse</button>

                <p id="getNineParseResult">Get Nine Parse Result will be placed here.</p>

                <h2>Add Number with Get</h2>

                <input type="number" id="operandA" defaultValue="1" />
                <input type="number" id="operandB" defaultValue="2" />
                <p id="addResult"> </p>
                <button onClick={this.add}>add</button>

                <h2>Add Number with Post</h2>

                <input type="number" id="operandAPost" defaultValue="1" />
                <input type="number" id="operandBPost" defaultValue="2" />
                <p id="addResultPost"> </p>
                <button onClick={this.addPost}>addPost</button>
            </div>
        );
    }
}

