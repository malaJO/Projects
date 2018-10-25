(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#41484A").ss(2.6).p("AiLAAIEXAA");
	this.shape.setTransform(14,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.3,-1.3,30.6,2.6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#41484A").ss(2.6).p("AiLAAIEXAA");
	this.shape.setTransform(14,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1.3,-1.3,30.6,2.6), null);


(lib.Line1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#41484A").ss(2.6).p("AiLAAIEXAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-1.3,30.6,2.6);


// stage content:
(lib.Hamburgertox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(258.9,157.4,0.995,0.994,44.9,0,0,14,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:0,skewX:36.1,skewY:41.2,y:158.3},0).wait(1).to({scaleY:1.2,skewX:27,skewY:37.5,y:159.2},0).wait(1).to({scaleY:1.31,skewX:18,skewY:33.7,y:160.2},0).wait(1).to({scaleY:1.41,skewX:8.9,skewY:30,y:161.1},0).wait(1).to({scaleX:1,scaleY:1.51,skewX:-0.1,skewY:26.2,x:259,y:162.1},0).wait(1).to({scaleY:1.61,skewX:-9.1,skewY:22.5,x:258.9,y:163},0).wait(1).to({scaleY:1.72,skewX:-18.2,skewY:18.7,x:259,y:163.9},0).wait(1).to({scaleY:1.82,skewX:-27.2,skewY:15,x:258.9,y:164.9},0).wait(1).to({scaleY:1.92,skewX:-36.3,skewY:11.2,y:165.8},0).wait(1).to({scaleY:2.03,skewX:-45.3,skewY:7.5,y:166.7},0).wait(1).to({scaleY:2.13,skewX:-54.4,skewY:3.7,y:167.7},0).wait(1).to({scaleX:1,scaleY:2.23,skewX:-63.4,skewY:0,x:259,y:168.7},0).wait(1).to({scaleY:2.1,skewX:-56.4},0).wait(1).to({scaleY:1.96,skewX:-49.3,x:258.9},0).wait(1).to({scaleY:1.82,skewX:-42.3},0).wait(1).to({scaleY:1.69,skewX:-35.2},0).wait(1).to({scaleY:1.55,skewX:-28.2},0).wait(1).to({scaleX:1,scaleY:1.41,skewX:-21.1},0).wait(1).to({scaleY:1.27,skewX:-14.1},0).wait(1).to({scaleY:1.14,skewX:-7},0).wait(1).to({scaleY:1,skewX:0},0).wait(7));

	// Layer 9
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(258.9,157.5,0.107,1.396,0,44.4,180,13.6,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1).to({regX:14,regY:0,scaleX:0.01,scaleY:1.56,skewX:46.3,x:259,y:157.3},0).wait(1).to({scaleX:0.09,scaleY:1.73,skewX:48.2,skewY:0},0).wait(1).to({scaleX:0.18,scaleY:1.89,skewX:50.1,x:259.1},0).wait(1).to({scaleX:0.28,scaleY:2.06,skewX:52},0).wait(1).to({scaleX:0.37,scaleY:2.22,skewX:53.9},0).wait(1).to({scaleX:0.47,scaleY:2.39,skewX:55.8,x:259.2},0).wait(1).to({scaleX:0.56,scaleY:2.55,skewX:57.7},0).wait(1).to({scaleX:0.66,scaleY:2.72,skewX:59.5,x:259.3},0).wait(1).to({scaleX:0.75,scaleY:2.88,skewX:61.4},0).wait(1).to({scaleX:0.83,scaleY:3.04,skewX:63.3,x:259.4},0).wait(1).to({scaleX:0.9,scaleY:3.21,skewX:65.2},0).wait(1).to({scaleX:0.96,scaleY:3.37,skewX:67.1},0).wait(1).to({scaleX:1.01,scaleY:3.54,skewX:69,x:259.5},0).wait(1).to({scaleX:1.05,scaleY:3.7,skewX:70.9},0).wait(1).to({scaleX:1.07,scaleY:3.87,skewX:72.8},0).wait(1).to({scaleX:1.09,scaleY:4.03,skewX:74.7},0).wait(1).to({scaleX:1.09,scaleY:3.43,skewX:59.8},0).wait(1).to({scaleX:1.08,scaleY:2.82,skewX:44.8,x:259.4},0).wait(1).to({scaleX:1.06,scaleY:2.21,skewX:29.9},0).wait(1).to({scaleX:1.03,scaleY:1.61,skewX:14.9,x:259.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:0},0).wait(3).to({regX:13.6,regY:0.1,x:258.9,y:157.4},0).wait(4));

	// Layer 1
	this.instance_2 = new lib.Line1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(259,157.5,0.993,2.214,0,18.5,-44.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).wait(1).to({scaleX:1,scaleY:2.38,skewX:23.2,skewY:-41.2,y:156.5},0).wait(1).to({scaleX:1,scaleY:2.54,skewX:28,skewY:-37.5,y:155.6},0).wait(1).to({scaleX:1,scaleY:2.69,skewX:32.8,skewY:-33.7,y:154.6},0).wait(1).to({scaleX:1,scaleY:2.85,skewX:37.6,skewY:-30,y:153.7},0).wait(1).to({scaleX:1,scaleY:3.01,skewX:42.4,skewY:-26.2,y:152.7},0).wait(1).to({scaleX:1.01,scaleY:3.17,skewX:47.2,skewY:-22.5,y:151.8},0).wait(1).to({scaleX:1.01,scaleY:3.32,skewX:52,skewY:-18.7,y:150.8},0).wait(1).to({scaleY:3.48,skewX:56.8,skewY:-15,y:149.9},0).wait(1).to({scaleX:1.01,scaleY:3.64,skewX:61.6,skewY:-11.2,y:148.9},0).wait(1).to({scaleX:1,scaleY:3.8,skewX:66.4,skewY:-7.5,y:148},0).wait(1).to({scaleX:1,scaleY:3.95,skewX:71.2,skewY:-3.7,y:147},0).wait(1).to({scaleX:1,scaleY:4.11,skewX:76,skewY:0,y:146.1},0).wait(1).to({scaleX:1,scaleY:3.64,skewX:72.8},0).wait(1).to({scaleX:1,scaleY:3.17,skewX:69.7},0).wait(1).to({scaleY:2.7,skewX:66.6},0).wait(1).to({scaleX:1,scaleY:2.23,skewX:63.4},0).wait(1).to({scaleY:1.99,skewX:50.7},0).wait(1).to({scaleY:1.74,skewX:38.1},0).wait(1).to({scaleX:1,scaleY:1.49,skewX:25.4},0).wait(1).to({scaleY:1.25,skewX:12.7},0).wait(1).to({scaleY:1,skewX:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// Layer 1
	this.instance_3 = new lib.Line1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(259,146.1,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:0,regY:0,scaleY:1.25,skewX:8.9,skewY:-3.7,x:258.9,y:146.9},0).wait(1).to({scaleY:1.49,skewX:17.9,skewY:-7.5,y:147.9},0).wait(1).to({scaleX:1,scaleY:1.74,skewX:26.8,skewY:-11.2,y:148.8},0).wait(1).to({scaleY:1.99,skewX:35.7,skewY:-15,x:259,y:149.8},0).wait(1).to({scaleY:2.23,skewX:44.7,skewY:-18.7,y:150.8},0).wait(1).to({scaleX:1,scaleY:2.7,skewX:44.1,skewY:-22.5,y:151.7},0).wait(1).to({scaleY:3.17,skewX:43.5,skewY:-26.2,y:152.6},0).wait(1).to({scaleX:1,scaleY:3.64,skewX:42.8,skewY:-30,y:153.6},0).wait(1).to({scaleX:1,scaleY:4.11,skewX:42.2,skewY:-33.7,x:259.1,y:154.5},0).wait(1).to({scaleX:1,scaleY:3.95,skewX:37.4,skewY:-37.5,x:259,y:155.5},0).wait(1).to({scaleX:1,scaleY:3.8,skewX:32.6,skewY:-41.2,y:156.4},0).wait(1).to({scaleX:1.01,scaleY:3.64,skewX:27.8,skewY:-45,y:157.4},0).wait(1).to({scaleX:1.01,scaleY:3.48,skewX:26.8},0).wait(1).to({scaleY:3.32,skewX:25.8},0).wait(1).to({scaleX:1.01,scaleY:3.17,skewX:24.7},0).wait(1).to({scaleX:1,scaleY:3.01,skewX:23.7},0).wait(1).to({scaleX:1,scaleY:2.85,skewX:22.6},0).wait(1).to({scaleX:1,scaleY:2.69,skewX:21.6},0).wait(1).to({scaleX:1,scaleY:2.54,skewX:20.5},0).wait(1).to({scaleX:1,scaleY:2.38,skewX:19.5},0).wait(1).to({scaleX:0.99,scaleY:2.22,skewX:18.4},0).wait(1).to({scaleX:0.99,scaleY:2.21,skewX:18.5,skewY:-44.9,y:157.5},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(28));

	// Layer 2
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(258.9,157.4,1,1,0,0,0,14,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:0,scaleX:1.03,scaleY:1.61,skewX:14.9,y:157.2},0).wait(1).to({scaleX:1.06,scaleY:2.21,skewX:29.9,x:259},0).wait(1).to({scaleX:1.08,scaleY:2.82,skewX:44.8,x:259.1},0).wait(1).to({scaleX:1.09,scaleY:3.43,skewX:59.8,x:259.2},0).wait(1).to({scaleX:1.09,scaleY:4.03,skewX:74.7,x:259.3,y:157.3},0).wait(1).to({scaleX:1.07,scaleY:3.87,skewX:72.8},0).wait(1).to({scaleX:1.05,scaleY:3.7,skewX:70.9},0).wait(1).to({scaleX:1.01,scaleY:3.54,skewX:69,x:259.2},0).wait(1).to({scaleX:0.96,scaleY:3.37,skewX:67.1},0).wait(1).to({scaleX:0.9,scaleY:3.21,skewX:65.2},0).wait(1).to({scaleX:0.83,scaleY:3.04,skewX:63.3},0).wait(1).to({scaleX:0.75,scaleY:2.88,skewX:61.4,x:259.1},0).wait(1).to({scaleX:0.66,scaleY:2.72,skewX:59.5},0).wait(1).to({scaleX:0.56,scaleY:2.55,skewX:57.7},0).wait(1).to({scaleX:0.47,scaleY:2.39,skewX:55.8},0).wait(1).to({scaleX:0.37,scaleY:2.22,skewX:53.9},0).wait(1).to({scaleX:0.28,scaleY:2.06,skewX:52,x:259},0).wait(1).to({scaleX:0.18,scaleY:1.89,skewX:50.1,x:259.1},0).wait(1).to({scaleX:0.09,scaleY:1.73,skewX:48.2,x:259},0).wait(1).to({scaleX:0.01,scaleY:1.56,skewX:46.3,skewY:180},0).wait(1).to({scaleX:0.11,scaleY:1.4,skewX:44.4},0).wait(1).to({regX:13.6,regY:0.1,scaleY:1.4,x:258.9,y:157.5},0).wait(1).to({_off:true},1).wait(28));

	// Layer 3
	this.instance_5 = new lib.Symbol1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(258.9,168.7,1,1,0,0,0,14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleY:1.14,skewX:-3.3,skewY:3.7,y:167.7},0).wait(1).to({scaleY:1.27,skewX:-6.6,skewY:7.5,y:166.8},0).wait(1).to({scaleY:1.41,skewX:-9.9,skewY:11.2,y:165.8},0).wait(1).to({scaleX:1,scaleY:1.55,skewX:-13.2,skewY:15,y:164.8},0).wait(1).to({scaleY:1.69,skewX:-16.5,skewY:18.7,y:163.9},0).wait(1).to({scaleY:1.82,skewX:-19.8,skewY:22.5,y:163},0).wait(1).to({scaleY:1.96,skewX:-23.1,skewY:26.2,y:162},0).wait(1).to({scaleY:2.1,skewX:-26.4,skewY:30,y:161.1},0).wait(1).to({scaleY:2.23,skewX:-29.7,skewY:33.7,y:160.1},0).wait(1).to({scaleX:1,scaleY:2.13,skewX:-20.6,skewY:37.5,y:159.2},0).wait(1).to({scaleY:2.03,skewX:-11.6,skewY:41.2,y:158.2},0).wait(1).to({scaleY:1.92,skewX:-2.5,skewY:45,y:157.3},0).wait(1).to({scaleY:1.82,skewX:2.8},0).wait(1).to({scaleY:1.72,skewX:8.1},0).wait(1).to({scaleY:1.61,skewX:13.4},0).wait(1).to({scaleY:1.51,skewX:18.6},0).wait(1).to({scaleX:1,scaleY:1.41,skewX:23.9},0).wait(1).to({scaleY:1.31,skewX:29.2},0).wait(1).to({scaleY:1.2,skewX:34.5},0).wait(1).to({scaleY:1.1,skewX:39.8},0).wait(1).to({scaleY:1,skewX:45.1},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:44.9,skewX:0,skewY:0,y:157.4},0).wait(1).to({_off:true},1).wait(28));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(3).p("AhwBxIDhjh");
	this.shape.setTransform(259,157.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3399FF").ss(3).p("AhwhwIDhDh");
	this.shape_1.setTransform(259,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},21).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(518.6,344.5,30.6,25.7);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;