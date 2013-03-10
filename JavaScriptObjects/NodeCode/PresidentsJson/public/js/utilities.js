
var Utilities = function(){};



Utilities.prototype.isEmptyString = function(value){
	return ( (!value) || (value === "") );
}

Utilities.prototype.readyForUpdate = function(firstName, lastName) {
	var failure = isEmptyString(firstName) || isEmptyString(lastName);
	return !failure;
}

Utilities.prototype.port = function()
{
	that.clearResponse("Get Port Called");
	that.simpleQuery('/port');
};

Utilities.prototype.dirName = function()
{
	that.clearResponse("Dir Name Called");
	that.simpleQuery('/dirname');
};
