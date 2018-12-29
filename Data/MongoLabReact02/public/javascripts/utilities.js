const utils = {
    clearList: function(event) {
        document.getElementById('mongoData').innerHTML = '';
    },

    createSubSpan: function(element, text, className) {
        const span = document.createElement('span');
        span.innerHTML = text;
        span.className = className;
        element.appendChild(span);
        return span;
    },

    createIcon: function(span) {
        const icon = document.createElement('i');
        icon.className = 'material-icons mdl-list__item-avatar';
        icon.appendChild(document.createTextNode('person'));
        span.appendChild(icon);
    },

    createMainSpan: function(president, li) {
        const span = document.createElement('span');
        span.className = 'mdl-list__item-primary-content';
        this.createIcon(span);
        this.createSubSpan(
            span,
            president.presidentName,
            'mdl-list__item-primary-content'
        );
        this.createSubSpan(span, president._id, 'mdl-list__item-sub-title');
        li.appendChild(span);
    },

    appendToList: function(president) {
        const ul = document.getElementById('mongoData');
        const li = document.createElement('li');
        li.className += 'mdl-list__item mdl-list__item--two-line';
        this.createMainSpan(president, li);
        ul.appendChild(li);
    },

    addButton: function(text) {
        var button = document.createElement('button');
        var textNode = document.createTextNode(text);
        button.appendChild(textNode);
        button.className = 'mdl-button mdl-js-button mdl-js-ripple-effect';
        componentHandler.upgradeElement(button);
        document.getElementById('container').appendChild(button);
    }
};
