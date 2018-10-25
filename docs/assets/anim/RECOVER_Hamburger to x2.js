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


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Top
	this.instance = new lib.Line1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-11.2,1,1,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:0,scaleY:1.05,skewX:-4.7,skewY:-2,x:0,y:-10.8},0).wait(1).to({scaleY:1.11,skewX:-9.4,skewY:-3.9,y:-10.3},0).wait(1).to({scaleY:1.16,skewX:-14.1,skewY:-5.9,y:-9.8},0).wait(1).to({scaleY:1.21,skewX:-18.9,skewY:-7.8,y:-9.3},0).wait(1).to({scaleY:1.27,skewX:-23.6,skewY:-9.8,y:-8.9},0).wait(1).to({scaleY:1.32,skewX:-28.3,skewY:-11.7,y:-8.4},0).wait(1).to({scaleY:1.38,skewX:-33,skewY:-13.7,y:-7.9},0).wait(1).to({scaleX:1,scaleY:1.43,skewX:-37.7,skewY:-15.7,y:-7.4},0).wait(1).to({scaleY:1.48,skewX:-42.4,skewY:-17.6,y:-6.9},0).wait(1).to({scaleY:1.54,skewX:-47.1,skewY:-19.6,x:-0.1,y:-6.4},0).wait(1).to({scaleY:1.59,skewX:-51.9,skewY:-21.5,y:-5.9},0).wait(1).to({scaleY:1.64,skewX:-56.6,skewY:-23.5,y:-5.4},0).wait(1).to({scaleY:1.7,skewX:-61.3,skewY:-25.4,y:-4.9},0).wait(1).to({scaleY:1.75,skewX:-66,skewY:-27.4,y:-4.4},0).wait(1).to({scaleY:1.8,skewX:-70.7,skewY:-29.3,y:-3.9},0).wait(1).to({scaleY:1.86,skewX:-75.4,skewY:-31.3,y:-3.4},0).wait(1).to({scaleY:1.91,skewX:-80.1,skewY:-33.3,y:-2.9},0).wait(1).to({scaleY:1.97,skewX:-84.9,skewY:-35.2,y:-2.4},0).wait(1).to({scaleY:2.02,skewX:-89.6,skewY:-37.2,y:-1.9},0).wait(1).to({scaleY:2.07,skewX:-94.3,skewY:-39.1,y:-1.4},0).wait(1).to({scaleY:2.13,skewX:-99,skewY:-41.1,y:-0.9},0).wait(1).to({scaleX:1,scaleY:2.18,skewX:-103.7,skewY:-43,y:-0.4},0).wait(1).to({scaleY:2.23,skewX:-108.4,skewY:-45,y:0.1},0).wait(1).to({y:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:2.18,skewX:-104.1,skewY:-43.2,y:-0.5},0).wait(1).to({scaleX:1,scaleY:2.13,skewX:-99.8,skewY:-41.4,y:-0.9},0).wait(1).to({scaleY:2.09,skewX:-95.4,skewY:-39.6,y:-1.4},0).wait(1).to({scaleY:2.04,skewX:-91.1,skewY:-37.8,y:-1.8},0).wait(1).to({scaleY:1.99,skewX:-86.7,skewY:-36,y:-2.3},0).wait(1).to({scaleY:1.94,skewX:-82.4,skewY:-34.2,y:-2.7},0).wait(1).to({scaleY:1.89,skewX:-78.1,skewY:-32.4,y:-3.2},0).wait(1).to({scaleY:1.84,skewX:-73.7,skewY:-30.6,y:-3.6},0).wait(1).to({scaleY:1.79,skewX:-69.4,skewY:-28.8,y:-4.1},0).wait(1).to({scaleY:1.74,skewX:-65.1,skewY:-27,y:-4.6},0).wait(1).to({scaleY:1.69,skewX:-60.7,skewY:-25.2,y:-5},0).wait(1).to({scaleY:1.64,skewX:-56.4,skewY:-23.4,y:-5.5},0).wait(1).to({scaleY:1.59,skewX:-52,skewY:-21.6,y:-5.9},0).wait(1).to({scaleY:1.54,skewX:-47.7,skewY:-19.8,y:-6.4},0).wait(1).to({scaleY:1.49,skewX:-43.4,skewY:-18,x:0,y:-6.8},0).wait(1).to({scaleY:1.44,skewX:-39,skewY:-16.2,y:-7.3},0).wait(1).to({scaleY:1.39,skewX:-34.7,skewY:-14.4,y:-7.7},0).wait(1).to({scaleX:1,scaleY:1.35,skewX:-30.4,skewY:-12.6,y:-8.2},0).wait(1).to({scaleY:1.3,skewX:-26,skewY:-10.8,y:-8.6},0).wait(1).to({scaleY:1.25,skewX:-21.7,skewY:-9,y:-9.1},0).wait(1).to({scaleY:1.2,skewX:-17.3,skewY:-7.2,y:-9.5},0).wait(1).to({scaleY:1.15,skewX:-13,skewY:-5.4,y:-10},0).wait(1).to({scaleY:1.1,skewX:-8.7,skewY:-3.6,y:-10.4},0).wait(1).to({scaleY:1.05,skewX:-4.3,skewY:-1.8,y:-10.9},0).wait(1).to({scaleY:1,skewX:0,skewY:0,y:-11.3},0).wait(1).to({regX:0.1,regY:0.1,x:0.1,y:-11.2},0).wait(1).to({regX:0,regY:0,scaleY:1.05,skewX:-4.3,skewY:-1.8,x:0,y:-10.9},0).wait(1).to({scaleY:1.1,skewX:-8.7,skewY:-3.6,y:-10.4},0).wait(1).to({scaleY:1.15,skewX:-13,skewY:-5.4,y:-10},0).wait(1).to({scaleY:1.2,skewX:-17.3,skewY:-7.2,y:-9.5},0).wait(1).to({scaleY:1.25,skewX:-21.7,skewY:-9,y:-9.1},0).wait(1).to({scaleY:1.3,skewX:-26,skewY:-10.8,y:-8.6},0).wait(1).to({scaleY:1.35,skewX:-30.4,skewY:-12.6,y:-8.2},0).wait(1).to({scaleX:1,scaleY:1.39,skewX:-34.7,skewY:-14.4,y:-7.7},0).wait(1).to({scaleY:1.44,skewX:-39,skewY:-16.2,y:-7.3},0).wait(1).to({scaleY:1.49,skewX:-43.4,skewY:-18,y:-6.8},0).wait(1).to({scaleY:1.54,skewX:-47.7,skewY:-19.8,x:-0.1,y:-6.4},0).wait(1).to({scaleY:1.59,skewX:-52,skewY:-21.6,y:-5.9},0).wait(1).to({scaleY:1.64,skewX:-56.4,skewY:-23.4,y:-5.5},0).wait(1).to({scaleY:1.69,skewX:-60.7,skewY:-25.2,y:-5},0).wait(1).to({scaleY:1.74,skewX:-65.1,skewY:-27,y:-4.6},0).wait(1).to({scaleY:1.79,skewX:-69.4,skewY:-28.8,y:-4.1},0).wait(1).to({scaleY:1.84,skewX:-73.7,skewY:-30.6,y:-3.6},0).wait(1).to({scaleY:1.89,skewX:-78.1,skewY:-32.4,y:-3.2},0).wait(1).to({scaleY:1.94,skewX:-82.4,skewY:-34.2,y:-2.7},0).wait(1).to({scaleY:1.99,skewX:-86.7,skewY:-36,y:-2.3},0).wait(1).to({scaleY:2.04,skewX:-91.1,skewY:-37.8,y:-1.8},0).wait(1).to({scaleY:2.09,skewX:-95.4,skewY:-39.6,y:-1.4},0).wait(1).to({scaleY:2.13,skewX:-99.8,skewY:-41.4,y:-0.9},0).wait(1).to({scaleX:1,scaleY:2.18,skewX:-104.1,skewY:-43.2,y:-0.5},0).wait(1).to({scaleY:2.23,skewX:-108.4,skewY:-45,y:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({y:0.1},0).wait(1).to({scaleY:2.18,skewX:-103.7,skewY:-43,y:-0.4},0).wait(1).to({scaleX:1,scaleY:2.13,skewX:-99,skewY:-41.1,y:-0.9},0).wait(1).to({scaleY:2.07,skewX:-94.3,skewY:-39.1,y:-1.4},0).wait(1).to({scaleY:2.02,skewX:-89.6,skewY:-37.2,y:-1.9},0).wait(1).to({scaleY:1.97,skewX:-84.9,skewY:-35.2,y:-2.4},0).wait(1).to({scaleY:1.91,skewX:-80.1,skewY:-33.3,y:-2.9},0).wait(1).to({scaleY:1.86,skewX:-75.4,skewY:-31.3,y:-3.4},0).wait(1).to({scaleY:1.8,skewX:-70.7,skewY:-29.3,y:-3.9},0).wait(1).to({scaleY:1.75,skewX:-66,skewY:-27.4,y:-4.4},0).wait(1).to({scaleY:1.7,skewX:-61.3,skewY:-25.4,y:-4.9},0).wait(1).to({scaleY:1.64,skewX:-56.6,skewY:-23.5,y:-5.4},0).wait(1).to({scaleY:1.59,skewX:-51.9,skewY:-21.5,y:-5.9},0).wait(1).to({scaleY:1.54,skewX:-47.1,skewY:-19.6,y:-6.4},0).wait(1).to({scaleY:1.48,skewX:-42.4,skewY:-17.6,x:0,y:-6.9},0).wait(1).to({scaleY:1.43,skewX:-37.7,skewY:-15.7,y:-7.4},0).wait(1).to({scaleX:1,scaleY:1.38,skewX:-33,skewY:-13.7,y:-7.9},0).wait(1).to({scaleY:1.32,skewX:-28.3,skewY:-11.7,y:-8.4},0).wait(1).to({scaleY:1.27,skewX:-23.6,skewY:-9.8,y:-8.9},0).wait(1).to({scaleY:1.21,skewX:-18.9,skewY:-7.8,y:-9.3},0).wait(1).to({scaleY:1.16,skewX:-14.1,skewY:-5.9,y:-9.8},0).wait(1).to({scaleY:1.11,skewX:-9.4,skewY:-3.9,y:-10.3},0).wait(1).to({scaleY:1.05,skewX:-4.7,skewY:-2,y:-10.8},0).wait(1).to({scaleY:1,skewX:0,skewY:0,y:-11.3},0).wait(1));

	// Middle
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-6.3,0.1,0.994,1,0,0,0,7.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:14,regY:0,scaleX:1.14,scaleY:1.26,skewX:-12.8,x:1.1,y:0},0).wait(1).to({scaleX:1.26,scaleY:1.52,skewX:-25.7,x:2},0).wait(1).to({scaleX:1.34,scaleY:1.77,skewX:-38.5},0).wait(1).to({scaleX:1.38,scaleY:2.03,skewX:-51.4,x:2.6},0).wait(1).to({scaleX:1.37,scaleY:2.29,skewX:-64.2,x:3.9},0).wait(1).to({scaleX:1.34,scaleY:2.34,skewX:-60.6,x:3.8},0).wait(1).to({scaleX:1.31,scaleY:2.38,skewX:-57.1,x:3.7},0).wait(1).to({scaleX:1.28,scaleY:2.41,skewX:-53.5,x:3.6},0).wait(1).to({scaleX:1.24,scaleY:2.42,skewX:-49.9,x:3.4},0).wait(1).to({scaleX:1.19,scaleY:2.41,skewX:-46.4,x:3.1},0).wait(1).to({scaleX:1.14,scaleY:2.39,skewX:-42.8,x:2.9},0).wait(1).to({scaleX:1.08,scaleY:2.35,skewX:-39.2,x:2.6},0).wait(1).to({scaleX:1.01,scaleY:2.29,skewX:-35.7,x:2.2},0).wait(1).to({scaleX:0.94,scaleY:2.21,skewX:-32.1,x:2.1},0).wait(1).to({scaleX:0.85,scaleY:2.11,skewX:-28.5,x:2},0).wait(1).to({scaleX:0.77,scaleY:2.01,skewX:-25,x:1.8},0).wait(1).to({scaleX:0.68,scaleY:1.89,skewX:-21.4,x:1.6},0).wait(1).to({scaleX:0.58,scaleY:1.76,skewX:-17.8,x:1.3},0).wait(1).to({scaleX:0.48,scaleY:1.63,skewX:-14.3,x:1.1},0).wait(1).to({scaleX:0.38,scaleY:1.48,skewX:-10.7,x:0.8},0).wait(1).to({scaleX:0.27,scaleY:1.33,skewX:-7.1,x:0.5},0).wait(1).to({scaleX:0.16,scaleY:1.16,skewX:-3.6,x:0.2},0).wait(1).to({scaleX:0.04,scaleY:0.99,skewX:0,x:-0.2},0).wait(1).to({scaleX:0.04,scaleY:0.65,skewY:180,x:-0.7},0).wait(1).to({scaleX:0.05,scaleY:0.54},0).wait(1).to({scaleX:0.02,scaleY:0.61,x:-0.3},0).wait(1).to({scaleX:0.04,scaleY:0.77,skewY:0,x:0.2},0).wait(1).to({scaleX:0.11,scaleY:1,x:0.8},0).wait(1).to({scaleX:0.2,scaleY:1.14,skewX:-3.8,x:0.9},0).wait(1).to({scaleX:0.3,scaleY:1.29,skewX:-7.5,x:1},0).wait(1).to({scaleX:0.38,scaleY:1.43,skewX:-11.3},0).wait(1).to({scaleX:0.47,scaleY:1.58,skewX:-15},0).wait(1).to({scaleX:0.54,scaleY:1.72,skewX:-18.8},0).wait(1).to({scaleX:0.61,scaleY:1.86,skewX:-22.5,x:0.9},0).wait(1).to({scaleX:0.68,scaleY:2.01,skewX:-26.3,x:0.8},0).wait(1).to({scaleX:0.74,scaleY:2.15,skewX:-30,x:0.6},0).wait(1).to({scaleX:0.8,scaleY:2.3,skewX:-33.8,x:0.9},0).wait(1).to({scaleX:0.85,scaleY:2.44,skewX:-37.5,x:1.2},0).wait(1).to({scaleX:0.9,scaleY:2.58,skewX:-41.3,x:1.4},0).wait(1).to({scaleX:0.95,scaleY:2.73,skewX:-45.1,x:1.7},0).wait(1).to({scaleX:0.99,scaleY:2.87,skewX:-48.8,x:1.9},0).wait(1).to({scaleX:1.03,scaleY:3.02,skewX:-52.6,x:2.1},0).wait(1).to({scaleX:1.07,scaleY:3.16,skewX:-56.3,x:2.3},0).wait(1).to({scaleX:1.11,scaleY:3.3,skewX:-60.1,x:2.5},0).wait(1).to({scaleX:1.15,scaleY:3.45,skewX:-63.8,x:2.7},0).wait(1).to({scaleX:1.19,scaleY:3.59,skewX:-67.6,x:2.8},0).wait(1).to({scaleX:1.22,scaleY:3.74,skewX:-71.3,x:3},0).wait(1).to({scaleX:1.25,scaleY:3.88,skewX:-75.1,x:3.1},0).wait(1).to({scaleX:1.25,scaleY:3.3,skewX:-60.1,x:2.9},0).wait(1).to({scaleX:1.24,scaleY:2.73,skewX:-45.1,x:2.7},0).wait(1).to({scaleX:1.22,scaleY:2.15,skewX:-30,x:2.4},0).wait(1).to({scaleX:1.18,scaleY:1.58,skewX:-15},0).wait(1).to({scaleX:1,scaleY:1,skewX:0,x:0.2},0).wait(1).to({regX:7.3,regY:0.1,x:-4.6,y:0.1},0).wait(1).to({regX:14,regY:0,scaleX:1.18,scaleY:1.58,skewX:-15,x:2.3,y:0},0).wait(1).to({scaleX:1.22,scaleY:2.15,skewX:-30},0).wait(1).to({scaleX:1.24,scaleY:2.73,skewX:-45.1,x:2.6},0).wait(1).to({scaleX:1.25,scaleY:3.3,skewX:-60.1,x:2.9},0).wait(1).to({scaleX:1.25,scaleY:3.88,skewX:-75.1,x:3},0).wait(1).to({scaleX:1.22,scaleY:3.74,skewX:-71.3,x:2.9},0).wait(1).to({scaleX:1.19,scaleY:3.59,skewX:-67.6,x:2.8},0).wait(1).to({scaleX:1.15,scaleY:3.45,skewX:-63.8,x:2.6},0).wait(1).to({scaleX:1.11,scaleY:3.3,skewX:-60.1,x:2.4},0).wait(1).to({scaleX:1.07,scaleY:3.16,skewX:-56.3,x:2.2},0).wait(1).to({scaleX:1.03,scaleY:3.02,skewX:-52.6,x:2},0).wait(1).to({scaleX:0.99,scaleY:2.87,skewX:-48.8,x:1.8},0).wait(1).to({scaleX:0.95,scaleY:2.73,skewX:-45.1,x:1.6},0).wait(1).to({scaleX:0.9,scaleY:2.58,skewX:-41.3,x:1.4},0).wait(1).to({scaleX:0.85,scaleY:2.44,skewX:-37.5,x:1.1},0).wait(1).to({scaleX:0.8,scaleY:2.3,skewX:-33.8,x:0.9},0).wait(1).to({scaleX:0.74,scaleY:2.15,skewX:-30,x:0.5},0).wait(1).to({scaleX:0.68,scaleY:2.01,skewX:-26.3,x:0.7},0).wait(1).to({scaleX:0.61,scaleY:1.86,skewX:-22.5,x:0.8},0).wait(1).to({scaleX:0.54,scaleY:1.72,skewX:-18.8,x:0.9},0).wait(1).to({scaleX:0.47,scaleY:1.58,skewX:-15},0).wait(1).to({scaleX:0.38,scaleY:1.43,skewX:-11.3},0).wait(1).to({scaleX:0.3,scaleY:1.29,skewX:-7.5},0).wait(1).to({scaleX:0.2,scaleY:1.14,skewX:-3.8},0).wait(1).to({scaleX:0.11,scaleY:1,skewX:0,x:0.8},0).wait(1).to({scaleX:0.04,scaleY:0.77,x:0.2},0).wait(1).to({scaleX:0.02,scaleY:0.61,skewY:180,x:-0.3},0).wait(1).to({scaleX:0.05,scaleY:0.54,x:-0.7},0).wait(1).to({scaleX:0.04,scaleY:0.65},0).wait(1).to({scaleX:0.04,scaleY:0.99,skewY:0,x:-0.2},0).wait(1).to({scaleX:0.16,scaleY:1.16,skewX:-3.6,x:0.1},0).wait(1).to({scaleX:0.27,scaleY:1.33,skewX:-7.1,x:0.5},0).wait(1).to({scaleX:0.38,scaleY:1.48,skewX:-10.7,x:0.8},0).wait(1).to({scaleX:0.48,scaleY:1.63,skewX:-14.3,x:1.1},0).wait(1).to({scaleX:0.58,scaleY:1.76,skewX:-17.8,x:1.3},0).wait(1).to({scaleX:0.68,scaleY:1.89,skewX:-21.4,x:1.5},0).wait(1).to({scaleX:0.77,scaleY:2.01,skewX:-25,x:1.8},0).wait(1).to({scaleX:0.85,scaleY:2.11,skewX:-28.5,x:1.9},0).wait(1).to({scaleX:0.94,scaleY:2.21,skewX:-32.1,x:2},0).wait(1).to({scaleX:1.01,scaleY:2.29,skewX:-35.7,x:2.2},0).wait(1).to({scaleX:1.08,scaleY:2.35,skewX:-39.2,x:2.5},0).wait(1).to({scaleX:1.14,scaleY:2.39,skewX:-42.8,x:2.8},0).wait(1).to({scaleX:1.19,scaleY:2.41,skewX:-46.4,x:3.1},0).wait(1).to({scaleX:1.24,scaleY:2.42,skewX:-49.9,x:3.3},0).wait(1).to({scaleX:1.28,scaleY:2.41,skewX:-53.5,x:3.5},0).wait(1).to({scaleX:1.31,scaleY:2.38,skewX:-57.1,x:3.6},0).wait(1).to({scaleX:1.34,scaleY:2.34,skewX:-60.6,x:3.7},0).wait(1).to({scaleX:1.37,scaleY:2.29,skewX:-64.2,x:3.8},0).wait(1).to({scaleX:1.38,scaleY:2.03,skewX:-51.4,x:2.5},0).wait(1).to({scaleX:1.34,scaleY:1.77,skewX:-38.5,x:2},0).wait(1).to({scaleX:1.26,scaleY:1.52,skewX:-25.7,x:1.9},0).wait(1).to({scaleX:1.14,scaleY:1.26,skewX:-12.8,x:1.1},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:0,x:0.4},0).wait(1));

	// Bottom
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,11.4,1,1,0,0,0,14,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1.05,skewX:-0.8,skewY:2,x:0.1,y:10.9},0).wait(1).to({scaleY:1.11,skewX:-1.6,skewY:3.9,x:0,y:10.4},0).wait(1).to({scaleY:1.16,skewX:-2.4,skewY:5.9,y:9.9},0).wait(1).to({scaleY:1.21,skewX:-3.2,skewY:7.8,y:9.4},0).wait(1).to({scaleY:1.27,skewX:-4,skewY:9.8,x:0.1,y:8.9},0).wait(1).to({scaleY:1.32,skewX:-4.8,skewY:11.7,x:0,y:8.4},0).wait(1).to({scaleY:1.38,skewX:-5.6,skewY:13.7,x:0.1,y:7.9},0).wait(1).to({scaleX:1,scaleY:1.43,skewX:-6.4,skewY:15.7,x:0,y:7.4},0).wait(1).to({scaleY:1.48,skewX:-7.2,skewY:17.6,x:0.1,y:6.9},0).wait(1).to({scaleY:1.54,skewX:-8,skewY:19.6,y:6.4},0).wait(1).to({scaleY:1.59,skewX:-8.8,skewY:21.5,x:0,y:5.9},0).wait(1).to({scaleY:1.64,skewX:-9.6,skewY:23.5,x:0.1,y:5.4},0).wait(1).to({scaleY:1.7,skewX:-10.4,skewY:25.4,y:4.9},0).wait(1).to({scaleY:1.75,skewX:-11.2,skewY:27.4,x:0,y:4.5},0).wait(1).to({scaleY:1.8,skewX:-12,skewY:29.3,x:0.1,y:4},0).wait(1).to({scaleY:1.86,skewX:-12.8,skewY:31.3,y:3.5},0).wait(1).to({scaleY:1.91,skewX:-13.6,skewY:33.3,y:3},0).wait(1).to({scaleY:1.97,skewX:-14.4,skewY:35.2,x:0,y:2.5},0).wait(1).to({scaleY:2.02,skewX:-15.2,skewY:37.2,x:0.1,y:2},0).wait(1).to({scaleY:2.07,skewX:-16,skewY:39.1,y:1.5},0).wait(1).to({scaleY:2.13,skewX:-16.8,skewY:41.1,y:1},0).wait(1).to({scaleX:1,scaleY:2.18,skewX:-17.6,skewY:43,x:0,y:0.5},0).wait(1).to({scaleY:2.23,skewX:-18.4,skewY:45,x:0.1,y:0},0).wait(6).to({scaleY:2.18,skewX:-17.7,skewY:43.2,y:0.4},0).wait(1).to({scaleX:1,scaleY:2.13,skewX:-17,skewY:41.4,y:0.9},0).wait(1).to({scaleY:2.09,skewX:-16.2,skewY:39.6,x:0,y:1.4},0).wait(1).to({scaleY:2.04,skewX:-15.5,skewY:37.8,x:0.1,y:1.8},0).wait(1).to({scaleY:1.99,skewX:-14.7,skewY:36,x:0,y:2.3},0).wait(1).to({scaleY:1.94,skewX:-14,skewY:34.2,y:2.7},0).wait(1).to({scaleY:1.89,skewX:-13.3,skewY:32.4,y:3.2},0).wait(1).to({scaleY:1.84,skewX:-12.5,skewY:30.6,x:0.1,y:3.6},0).wait(1).to({scaleY:1.79,skewX:-11.8,skewY:28.8,x:0,y:4.1},0).wait(1).to({scaleY:1.74,skewX:-11.1,skewY:27,y:4.6},0).wait(1).to({scaleY:1.69,skewX:-10.3,skewY:25.2,y:5},0).wait(1).to({scaleY:1.64,skewX:-9.6,skewY:23.4,x:0.1,y:5.5},0).wait(1).to({scaleY:1.59,skewX:-8.8,skewY:21.6,x:0,y:5.9},0).wait(1).to({scaleY:1.54,skewX:-8.1,skewY:19.8,y:6.3},0).wait(1).to({scaleY:1.49,skewX:-7.4,skewY:18,y:6.8},0).wait(1).to({scaleY:1.44,skewX:-6.6,skewY:16.2,x:0.1,y:7.2},0).wait(1).to({scaleY:1.39,skewX:-5.9,skewY:14.4,x:0,y:7.7},0).wait(1).to({scaleX:1,scaleY:1.35,skewX:-5.2,skewY:12.6,y:8.2},0).wait(1).to({scaleY:1.3,skewX:-4.4,skewY:10.8,x:0.1,y:8.6},0).wait(1).to({scaleY:1.25,skewX:-3.7,skewY:9,x:0,y:9.1},0).wait(1).to({scaleY:1.2,skewX:-2.9,skewY:7.2,x:0.1,y:9.5},0).wait(1).to({scaleY:1.15,skewX:-2.2,skewY:5.4,y:10},0).wait(1).to({scaleY:1.1,skewX:-1.5,skewY:3.6,x:0,y:10.5},0).wait(1).to({scaleY:1.05,skewX:-0.7,skewY:1.8,x:0.1,y:10.9},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:0,y:11.4},0).wait(2).to({scaleY:1.05,skewX:-0.7,skewY:1.8,x:0.1,y:10.9},0).wait(1).to({scaleY:1.1,skewX:-1.5,skewY:3.6,x:0,y:10.5},0).wait(1).to({scaleY:1.15,skewX:-2.2,skewY:5.4,x:0.1,y:10},0).wait(1).to({scaleY:1.2,skewX:-2.9,skewY:7.2,y:9.5},0).wait(1).to({scaleY:1.25,skewX:-3.7,skewY:9,x:0,y:9.1},0).wait(1).to({scaleY:1.3,skewX:-4.4,skewY:10.8,x:0.1,y:8.6},0).wait(1).to({scaleY:1.35,skewX:-5.2,skewY:12.6,x:0,y:8.2},0).wait(1).to({scaleX:1,scaleY:1.39,skewX:-5.9,skewY:14.4,y:7.7},0).wait(1).to({scaleY:1.44,skewX:-6.6,skewY:16.2,x:0.1,y:7.2},0).wait(1).to({scaleY:1.49,skewX:-7.4,skewY:18,x:0,y:6.8},0).wait(1).to({scaleY:1.54,skewX:-8.1,skewY:19.8,y:6.3},0).wait(1).to({scaleY:1.59,skewX:-8.8,skewY:21.6,y:5.9},0).wait(1).to({scaleY:1.64,skewX:-9.6,skewY:23.4,x:0.1,y:5.5},0).wait(1).to({scaleY:1.69,skewX:-10.3,skewY:25.2,x:0,y:5},0).wait(1).to({scaleY:1.74,skewX:-11.1,skewY:27,y:4.6},0).wait(1).to({scaleY:1.79,skewX:-11.8,skewY:28.8,y:4.1},0).wait(1).to({scaleY:1.84,skewX:-12.5,skewY:30.6,x:0.1,y:3.6},0).wait(1).to({scaleY:1.89,skewX:-13.3,skewY:32.4,x:0,y:3.2},0).wait(1).to({scaleY:1.94,skewX:-14,skewY:34.2,y:2.7},0).wait(1).to({scaleY:1.99,skewX:-14.7,skewY:36,y:2.3},0).wait(1).to({scaleY:2.04,skewX:-15.5,skewY:37.8,x:0.1,y:1.8},0).wait(1).to({scaleY:2.09,skewX:-16.2,skewY:39.6,x:0,y:1.4},0).wait(1).to({scaleY:2.13,skewX:-17,skewY:41.4,x:0.1,y:0.9},0).wait(1).to({scaleX:1,scaleY:2.18,skewX:-17.7,skewY:43.2,y:0.4},0).wait(1).to({scaleY:2.23,skewX:-18.4,skewY:45,y:0},0).wait(6).to({scaleY:2.18,skewX:-17.6,skewY:43,x:0,y:0.5},0).wait(1).to({scaleX:1,scaleY:2.13,skewX:-16.8,skewY:41.1,x:0.1,y:1},0).wait(1).to({scaleY:2.07,skewX:-16,skewY:39.1,y:1.5},0).wait(1).to({scaleY:2.02,skewX:-15.2,skewY:37.2,y:2},0).wait(1).to({scaleY:1.97,skewX:-14.4,skewY:35.2,x:0,y:2.5},0).wait(1).to({scaleY:1.91,skewX:-13.6,skewY:33.3,x:0.1,y:3},0).wait(1).to({scaleY:1.86,skewX:-12.8,skewY:31.3,y:3.5},0).wait(1).to({scaleY:1.8,skewX:-12,skewY:29.3,y:4},0).wait(1).to({scaleY:1.75,skewX:-11.2,skewY:27.4,x:0,y:4.5},0).wait(1).to({scaleY:1.7,skewX:-10.4,skewY:25.4,x:0.1,y:4.9},0).wait(1).to({scaleY:1.64,skewX:-9.6,skewY:23.5,y:5.4},0).wait(1).to({scaleY:1.59,skewX:-8.8,skewY:21.5,x:0,y:5.9},0).wait(1).to({scaleY:1.54,skewX:-8,skewY:19.6,x:0.1,y:6.4},0).wait(1).to({scaleY:1.48,skewX:-7.2,skewY:17.6,y:6.9},0).wait(1).to({scaleY:1.43,skewX:-6.4,skewY:15.7,x:0,y:7.4},0).wait(1).to({scaleX:1,scaleY:1.38,skewX:-5.6,skewY:13.7,x:0.1,y:7.9},0).wait(1).to({scaleY:1.32,skewX:-4.8,skewY:11.7,x:0,y:8.4},0).wait(1).to({scaleY:1.27,skewX:-4,skewY:9.8,x:0.1,y:8.9},0).wait(1).to({scaleY:1.21,skewX:-3.2,skewY:7.8,x:0,y:9.4},0).wait(1).to({scaleY:1.16,skewX:-2.4,skewY:5.9,y:9.9},0).wait(1).to({scaleY:1.11,skewX:-1.6,skewY:3.9,y:10.4},0).wait(1).to({scaleY:1.05,skewX:-0.8,skewY:2,x:0.1,y:10.9},0).wait(1).to({scaleY:1,skewX:0,skewY:0,x:0,y:11.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-12.6,31,25.3);


// stage content:
(lib.RECOVER_Hamburgertox2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(43.7,51.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(3).p("AhwBxIDhjh");
	this.shape.setTransform(259,157.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3399FF").ss(3).p("AhwhwIDhDh");
	this.shape_1.setTransform(259,157.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(303.4,239.1,243.5,131.1);
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