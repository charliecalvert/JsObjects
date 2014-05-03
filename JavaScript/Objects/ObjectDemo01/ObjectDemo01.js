elf.ShowObjects = (function() {

        function ShowObjects() {
            $("#showElf").click(this.showElf);
            $("#showUtilities").click(this.showUtilities);
            $("#showMyObject").click(this.showMyObject);
            $("#showPropertyObject").click(this.showPropertyObject);
        }
     
        ShowObjects.prototype.showElf = function() {
            elf.utilities.clearList();
            elf.utilities.showKeys(elf);
        };
        
        ShowObjects.prototype.showUtilities = function() {
            elf.utilities.clearList();
            elf.utilities.showKeys(elf.utilities);
        };

        ShowObjects.prototype.showMyObject = function() {
            elf.utilities.clearList();
            elf.utilities.display(elf.myObject.multiplyProperties());
            elf.utilities.showKeys(elf.myObject);
        };
        
        ShowObjects.prototype.showPropertyObject = function() {
            elf.utilities.clearList();
            elf.utilities.showKeys(elf.propertyObject);
            elf.utilities.drawLine("endEnumeration", 'red');
            elf.utilities.display("The next two properties could not be enumerated");
            elf.utilities.display('<strong>Name:</strong> cw');
            elf.utilities.getPropertyDescriptor(elf.propertyObject, "cw");
            elf.utilities.getPropertyIsEnumerable(elf.propertyObject, "cw");
            elf.utilities.display('<strong>Name:</strong> blank');
            elf.utilities.getPropertyDescriptor(elf.propertyObject, "blank");
            elf.utilities.getPropertyIsEnumerable(elf.propertyObject, "blank");
        };
        
        ShowObjects.prototype.showPropertyLoops = function() {
            elf.utilities.clearList();
            elf.utilities.showPropertyLoop(elf);
            elf.utilities.showPropertyLoop(elf.utilities);
            elf.utilities.showPropertyLoop(elf.myObject);
            elf.utilities.showPropertyLoop(elf.propertyObject);
        };

        return ShowObjects;
    }());

$(document).ready(function() {
    var showObjects = new elf.ShowObjects();
    showObjects.showPropertyLoops();    
});
