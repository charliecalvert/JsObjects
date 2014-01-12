function Convert(number, fromUnit) {
    var differences = {
        distance : {
            meters : 1,
            cm     : 0.01,
            feet   : 0.3048,
            inches : 0.0254,
            yards  : 0.9144
        },
        volume : {
            liters : 1,
            gallons: 3.785411784,
            cups   : 0.236588236 
        }
    },
        betweenUnit = false,
        type, unit;

    for (type in differences) {
        if (differences.hasOwnProperty(type)) {
            if ( (unit = differences[type][fromUnit]) ) {
                betweenUnit = number * unit * 1000;
            }
        }
    }

    return {
        to : function (toUnit) {
            if (betweenUnit) {
                for (type in differences) {
                    if (differences.hasOwnProperty(type)) {
                        if ( (unit = differences[type][toUnit]) ) {
                            return fix(betweenUnit / (unit * 1000));
                        }
                    }
                }
                throw new Error("unrecognized to-unit");
            } else {
                throw new Error("unrecognized from-unit");
            }  
            
            function fix (num) {
                return parseFloat( num.toFixed(2) );
            }
        }
    };
}
