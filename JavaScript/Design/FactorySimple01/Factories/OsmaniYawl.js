/**
 * @author Charlie Calvert
 */

// A constructor for defining new trucks
function Yawl( options){
 
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blue";
}
