//
// MainScene class
//
var MainScene = function(){};

// Create callback for button
MainScene.prototype.onPressButton = function()
{	
    // Rotate the label when the button is pressed
    this.helloLabel.runAction(cc.RotateBy.create(1,360));
    this.helloLabel.runAction(cc.Blink.create(1,10));
    //this.helloLabel.runAction(cc.ScaleBy.create(3,2));
};