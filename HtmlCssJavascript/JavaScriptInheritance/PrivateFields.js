// Show JavaScript inheritance and private data
// Based on the model presented by Douglas Crockford 
// in JavaScript: The Good Parts (pp. 53-54). 
var sentient = function (privateSpec) 
{ 
    var that = {}; 
    
    that.getName = function ( ) 
    { 
        return privateSpec.firstName + " " + privateSpec.lastName; 
    }; 
    
    that.speak = function ( ) 
    { 
        return privateSpec.favoriteSaying || ''; 
    }; 
    
    return that;
};

var mathematician = function (privateSpec) 
{ 
    privateSpec.favoriteSaying = 
		privateSpec.favoriteSaying || 
		'Logic merely sanctions the conquests of the intuition!'; 
	
    var that = sentient(privateSpec);

    that.compound = function (n) 
    { 
        var i, sum = 0, sumAsString = ""; 
        for (i = 0; i <= n; i += 1) 
        {
            if (sum!==0) 
            {                
				sumAsString += "+" + i; 
            } 
			else
			{
				sumAsString = i;
			}
			sum += i;             
        } 
        return sumAsString + " = " + sum; 
    }; 
    
    that.getName = function () 
    { 
        return privateSpec.lastName + ', ' + privateSpec.firstName; 
    };
    
    return that; 
};

$('document').ready(function () 
{    
    var mySentient = sentient({ firstName: 'Lucy', lastName: 'Higgins' });
    $("#showName").html(mySentient.getName());

    var math = mathematician({ firstName: 'Annette', lastName: 'Barstowe'});
    $("#mathName").html(math.getName());
    $("#calculation").html(math.compound(10));
    $("#speak").html(math.speak());
});
