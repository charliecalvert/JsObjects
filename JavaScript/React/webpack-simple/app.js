/**
 * Created by charlie on 3/26/17.
 */

import countries from './countries';
import $ from 'jquery';

$('<h1>Countries</h1>').appendTo('body');
const ul = $('<ul></ul>').appendTo('body');
for (const country of countries) {
    $('<li></li>')
        .text(country)
        .appendTo(ul);
}
