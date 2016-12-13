(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 970,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [
		{src:"images/_16mp.png", id:"_16mp"},
		{src:"images/bg.png", id:"bg"},
		{src:"images/ditoko.png", id:"ditoko"},
		{src:"images/free.png", id:"free"},
		{src:"images/hanya.png", id:"hanya"},
		{src:"images/ramrom.png", id:"ramrom"},
		{src:"images/touch.png", id:"touch"}
	]
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._16mp = function() {
	this.initialize(img._16mp);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,203,26);


(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1100,300);


(lib.ditoko = function() {
	this.initialize(img.ditoko);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,28);


(lib.free = function() {
	this.initialize(img.free);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,257,35);


(lib.hanya = function() {
	this.initialize(img.hanya);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,249,20);


(lib.ramrom = function() {
	this.initialize(img.ramrom);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,26);


(lib.touch = function() {
	this.initialize(img.touch);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,24);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.touch();
	this.instance.setTransform(-81,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,0,198,24);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ramrom();
	this.instance.setTransform(-81,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,0,235,26);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._16mp();
	this.instance.setTransform(-81,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,0,203,26);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ditoko();
	this.instance.setTransform(-92,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,0,225,28);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hanya();
	this.instance.setTransform(-90,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,0,249,20);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.free, null, new cjs.Matrix2D(1,0,0,1,-128.5,-17.5)).s().p("A0DCvIAAldMAoHAAAIAAFdg");
	this.shape.setTransform(35.2,17.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.3,0,257,35);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1100,300);


// stage content:
(lib._970x300preorder = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhLxgXbMCXjAAAMAAAAu3MheJAAAMg5aAAAg");
	this.shape.setTransform(485,150);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("EAkhAXLIAAAhMhJBAAAIAAghEgkggXrID6AA");
	this.shape_1.setTransform(133.7,151.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(245));

	// Layer 7
	this.instance = new lib.Symbol8();
	this.instance.setTransform(1223.2,210.5,1,1,0,0,0,99,12);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(132).to({_off:false},0).to({x:915.7},3).to({x:883.4},2).wait(102).to({x:885.3,alpha:0},5).wait(1));

	// Layer 6
	this.instance_1 = new lib.Symbol7();
	this.instance_1.setTransform(1223.2,179.9,1,1,0,0,0,118.5,13);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(128).to({_off:false},0).to({x:915.7},3).to({x:883.4},2).wait(106).to({x:885.3,alpha:0},5).wait(1));

	// Layer 5
	this.instance_2 = new lib.Symbol6();
	this.instance_2.setTransform(1222.7,147.4,1,1,0,0,0,101.5,13);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(124).to({_off:false},0).to({x:915.2},3).to({x:882.9},2).wait(110).to({x:884.8,alpha:0},5).wait(1));

	// Layer 4
	this.instance_3 = new lib.Symbol5();
	this.instance_3.setTransform(1203,202.9,0.882,0.882,0,0,0,112.5,14);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:915.5},3).to({x:873.4},2).wait(105).to({alpha:0},5).to({_off:true},1).wait(120));

	// Layer 3
	this.instance_4 = new lib.Symbol4();
	this.instance_4.setTransform(1215.6,183.9,0.903,0.903,0,0,0,124.5,10);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:915.6},3).to({x:873.5},2).wait(110).to({alpha:0},5).to({_off:true},1).wait(120));

	// Layer 2
	this.instance_5 = new lib.Symbol3();
	this.instance_5.setTransform(1228,154.6,0.875,0.875,0,0,0,128.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:915.5},3).to({x:873.4},2).wait(114).to({alpha:0},5).to({_off:true},1).wait(120));

	// Layer 1
	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(420,150,1,1,0,0,0,550,150);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(245));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(355,149,1388.7,305.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;