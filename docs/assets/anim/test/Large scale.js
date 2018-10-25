(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
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


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE0D1").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy3, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol3copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5BEAA").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy2, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEAB9E").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3copy, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41484A").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol2copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE0D1").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy3, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5BEAA").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy2, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEAB9E").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2copy, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41484A").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol1copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FDE0D1").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy3, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D5BEAA").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy2, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CEAB9E").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1copy, new cjs.Rectangle(-24,-3,48,6), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#41484A").s().p("AjvAeIAAg7IHfAAIAAA7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-24,-3,48,6), null);


(lib.BIgcopy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3copy();
	this.instance.parent = this;
	this.instance.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.09,rotation:1.9,y:15.3},0).wait(1).to({scaleY:1.19,rotation:3.7,y:14.7},0).wait(1).to({scaleX:1,scaleY:1.28,rotation:5.6,y:14},0).wait(1).to({scaleY:1.37,rotation:7.5,y:13.3},0).wait(1).to({scaleY:1.47,rotation:9.4,y:12.7},0).wait(1).to({scaleY:1.56,rotation:11.2,y:12},0).wait(1).to({scaleY:1.66,rotation:13.1,y:11.3},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:15,y:10.7},0).wait(1).to({scaleY:1.84,rotation:16.9,y:10},0).wait(1).to({scaleY:1.79,rotation:18.7,y:9.3},0).wait(1).to({scaleY:1.73,rotation:20.6,y:8.7},0).wait(1).to({scaleX:1,scaleY:1.67,rotation:22.5,y:8},0).wait(1).to({scaleY:1.62,rotation:24.4,y:7.3},0).wait(1).to({scaleY:1.56,rotation:26.2,y:6.7},0).wait(1).to({scaleY:1.51,rotation:28.1,y:6},0).wait(1).to({scaleY:1.45,rotation:30,y:5.3},0).wait(1).to({scaleY:1.39,rotation:31.9,y:4.7},0).wait(1).to({scaleY:1.34,rotation:33.7,y:4},0).wait(1).to({scaleY:1.28,rotation:35.6,y:3.3},0).wait(1).to({scaleX:1,scaleY:1.22,rotation:37.5,y:2.7},0).wait(1).to({scaleY:1.17,rotation:39.4,y:2},0).wait(1).to({scaleY:1.11,rotation:41.2,y:1.3},0).wait(1).to({scaleY:1.06,rotation:43.1,y:0.7},0).wait(1).to({scaleY:1,rotation:45,y:0},0).wait(1).to({rotation:44.8,y:0.1},0).wait(1).to({rotation:44.6},0).wait(1).to({rotation:44.5,y:0.2},0).wait(1).to({rotation:44.3},0).wait(1).to({rotation:44.1,y:0.3},0).wait(1).to({scaleY:1.06,rotation:42.4,y:0.9},0).wait(1).to({scaleY:1.11,rotation:40.6,y:1.6},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:38.8,y:2.2},0).wait(1).to({scaleY:1.22,rotation:37.1,y:2.8},0).wait(1).to({scaleY:1.28,rotation:35.3,y:3.4},0).wait(1).to({scaleY:1.33,rotation:33.5,y:4.1},0).wait(1).to({scaleY:1.39,rotation:31.8,y:4.7},0).wait(1).to({scaleX:1,scaleY:1.44,rotation:30,y:5.3},0).wait(1).to({scaleY:1.5,rotation:28.2,y:6},0).wait(1).to({scaleY:1.55,rotation:26.5,y:6.6},0).wait(1).to({scaleY:1.61,rotation:24.7,y:7.2},0).wait(1).to({scaleY:1.66,rotation:22.9,y:7.8},0).wait(1).to({scaleY:1.61,rotation:21.2,y:8.5},0).wait(1).to({scaleY:1.56,rotation:19.4,y:9.1},0).wait(1).to({scaleY:1.51,rotation:17.6,y:9.7},0).wait(1).to({scaleY:1.46,rotation:15.9,y:10.3},0).wait(1).to({scaleX:1,scaleY:1.41,rotation:14.1,y:11},0).wait(1).to({scaleY:1.36,rotation:12.4,y:11.6},0).wait(1).to({scaleY:1.31,rotation:10.6,y:12.2},0).wait(1).to({scaleY:1.26,rotation:8.8,y:12.9},0).wait(1).to({scaleY:1.2,rotation:7.1,y:13.5},0).wait(1).to({scaleY:1.15,rotation:5.3,y:14.1},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:3.5,y:14.7},0).wait(1).to({scaleY:1.05,rotation:1.8,y:15.4},0).wait(1).to({scaleY:1,rotation:0,y:16},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 2
	this.instance_1 = new lib.Symbol2copy();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.06,scaleY:1.17},0).wait(1).to({scaleX:1.12,scaleY:1.34},0).wait(1).to({scaleX:1.18,scaleY:1.51},0).wait(1).to({scaleX:1.24,scaleY:1.68},0).wait(1).to({scaleX:1.3,scaleY:1.85},0).wait(1).to({scaleX:1.36,scaleY:2.02},0).wait(1).to({scaleX:1.42,scaleY:2.19},0).wait(1).to({scaleX:1.34,scaleY:2.1},0).wait(1).to({scaleX:1.26,scaleY:2},0).wait(1).to({scaleX:1.19,scaleY:1.9},0).wait(1).to({scaleX:1.11,scaleY:1.8},0).wait(1).to({scaleX:1.04,scaleY:1.7},0).wait(1).to({scaleX:0.96,scaleY:1.6},0).wait(1).to({scaleX:0.89,scaleY:1.5},0).wait(1).to({scaleX:0.81,scaleY:1.4},0).wait(1).to({scaleX:0.74,scaleY:1.3},0).wait(1).to({scaleX:0.66,scaleY:1.2},0).wait(1).to({scaleX:0.58,scaleY:1.1},0).wait(1).to({scaleX:0.51,scaleY:1},0).wait(1).to({scaleX:0.43,scaleY:0.9},0).wait(1).to({scaleX:0.36,scaleY:0.8},0).wait(1).to({scaleX:0.28,scaleY:0.7},0).wait(1).to({scaleX:0.21,scaleY:0.6},0).wait(1).to({scaleX:0.13,scaleY:0.5},0).wait(1).to({scaleX:0.14,scaleY:0.53},0).wait(1).to({scaleX:0.14,scaleY:0.55},0).wait(1).to({scaleX:0.15,scaleY:0.58},0).wait(1).to({scaleX:0.16,scaleY:0.61},0).wait(1).to({scaleX:0.17,scaleY:0.63},0).wait(1).to({scaleX:0.25,scaleY:0.72},0).wait(1).to({scaleX:0.33,scaleY:0.81},0).wait(1).to({scaleX:0.42,scaleY:0.9},0).wait(1).to({scaleX:0.5,scaleY:0.99},0).wait(1).to({scaleX:0.59,scaleY:1.08},0).wait(1).to({scaleX:0.67,scaleY:1.17},0).wait(1).to({scaleX:0.75,scaleY:1.26},0).wait(1).to({scaleX:0.84,scaleY:1.34},0).wait(1).to({scaleX:0.92,scaleY:1.43},0).wait(1).to({scaleX:1,scaleY:1.52},0).wait(1).to({scaleX:1.09,scaleY:1.61},0).wait(1).to({scaleX:1.17,scaleY:1.7},0).wait(1).to({scaleX:1.25,scaleY:1.79},0).wait(1).to({scaleX:1.34,scaleY:1.88},0).wait(1).to({scaleX:1.42,scaleY:1.97},0).wait(1).to({scaleX:1.38,scaleY:1.87},0).wait(1).to({scaleX:1.34,scaleY:1.77},0).wait(1).to({scaleX:1.3,scaleY:1.68},0).wait(1).to({scaleX:1.25,scaleY:1.58},0).wait(1).to({scaleX:1.21,scaleY:1.48},0).wait(1).to({scaleX:1.17,scaleY:1.39},0).wait(1).to({scaleX:1.13,scaleY:1.29},0).wait(1).to({scaleX:1.08,scaleY:1.19},0).wait(1).to({scaleX:1.04,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 1
	this.instance_2 = new lib.Symbol1copy();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1.08,rotation:-1.8,y:-15.3},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:-3.6,y:-14.7},0).wait(1).to({scaleY:1.25,rotation:-5.4,y:-14},0).wait(1).to({scaleY:1.33,rotation:-7.2,y:-13.3},0).wait(1).to({scaleY:1.42,rotation:-9.1,y:-12.7},0).wait(1).to({scaleX:1,scaleY:1.5,rotation:-10.9,y:-12},0).wait(1).to({scaleY:1.59,rotation:-12.7,y:-11.3},0).wait(1).to({scaleY:1.67,rotation:-14.5,y:-10.7},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:-16.3,y:-10},0).wait(1).to({scaleY:1.7,rotation:-18.1,y:-9.3},0).wait(1).to({scaleX:1,scaleY:1.65,rotation:-19.9,y:-8.7},0).wait(1).to({scaleY:1.6,rotation:-21.7,y:-8},0).wait(1).to({scaleY:1.55,rotation:-23.5,y:-7.3},0).wait(1).to({scaleY:1.5,rotation:-25.3,y:-6.7},0).wait(1).to({scaleY:1.45,rotation:-27.2,y:-6},0).wait(1).to({scaleX:1,scaleY:1.4,rotation:-29,y:-5.3},0).wait(1).to({scaleY:1.35,rotation:-30.8,y:-4.7},0).wait(1).to({scaleY:1.3,rotation:-32.6,y:-4},0).wait(1).to({scaleY:1.25,rotation:-34.4,y:-3.3},0).wait(1).to({scaleY:1.2,rotation:-36.2,y:-2.7},0).wait(1).to({scaleY:1.15,rotation:-38,y:-2},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:-39.8,y:-1.3},0).wait(1).to({scaleY:1.05,rotation:-41.6,y:-0.7},0).wait(1).to({scaleY:1,rotation:-43.5,y:0},0).wait(1).to({rotation:-43.2,y:0.1},0).wait(1).to({rotation:-42.9},0).wait(1).to({rotation:-42.6,y:0.2},0).wait(1).to({rotation:-42.4},0).wait(1).to({rotation:-42.1,y:0.3},0).wait(1).to({scaleY:1.11,rotation:-40.4,y:-0.4},0).wait(1).to({scaleY:1.22,rotation:-38.7,y:-1},0).wait(1).to({scaleX:1,scaleY:1.33,rotation:-37,y:-1.7},0).wait(1).to({scaleY:1.45,rotation:-35.3,y:-2.3},0).wait(1).to({scaleY:1.56,rotation:-33.7,y:-3},0).wait(1).to({scaleY:1.67,rotation:-32,y:-3.6},0).wait(1).to({scaleY:1.78,rotation:-30.3,y:-4.3},0).wait(1).to({scaleY:1.89,rotation:-28.6,y:-4.9},0).wait(1).to({scaleX:1,scaleY:2,rotation:-26.9,y:-5.6},0).wait(1).to({scaleY:2.11,rotation:-25.2,y:-6.2},0).wait(1).to({scaleY:2.23,rotation:-23.6,y:-6.9},0).wait(1).to({scaleY:2.34,rotation:-21.9,y:-7.5},0).wait(1).to({scaleY:2.23,rotation:-20.2,y:-8.2},0).wait(1).to({scaleY:2.13,rotation:-18.5,y:-8.8},0).wait(1).to({scaleY:2.03,rotation:-16.8,y:-9.5},0).wait(1).to({scaleY:1.93,rotation:-15.1,y:-10.1},0).wait(1).to({scaleX:1,scaleY:1.82,rotation:-13.5,y:-10.8},0).wait(1).to({scaleY:1.72,rotation:-11.8,y:-11.4},0).wait(1).to({scaleY:1.62,rotation:-10.1,y:-12.1},0).wait(1).to({scaleY:1.51,rotation:-8.4,y:-12.7},0).wait(1).to({scaleY:1.41,rotation:-6.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1.31,rotation:-5,y:-14},0).wait(1).to({scaleY:1.21,rotation:-3.4,y:-14.7},0).wait(1).to({scaleY:1.1,rotation:-1.7,y:-15.3},0).wait(1).to({scaleY:1,rotation:0,y:-16},0).wait(5).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-19,48,38);


(lib.BIgcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3copy3();
	this.instance.parent = this;
	this.instance.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.09,rotation:1.9,y:15.3},0).wait(1).to({scaleY:1.19,rotation:3.7,y:14.7},0).wait(1).to({scaleX:1,scaleY:1.28,rotation:5.6,y:14},0).wait(1).to({scaleY:1.37,rotation:7.5,y:13.3},0).wait(1).to({scaleY:1.47,rotation:9.4,y:12.7},0).wait(1).to({scaleY:1.56,rotation:11.2,y:12},0).wait(1).to({scaleY:1.66,rotation:13.1,y:11.3},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:15,y:10.7},0).wait(1).to({scaleY:1.84,rotation:16.9,y:10},0).wait(1).to({scaleY:1.79,rotation:18.7,y:9.3},0).wait(1).to({scaleY:1.73,rotation:20.6,y:8.7},0).wait(1).to({scaleX:1,scaleY:1.67,rotation:22.5,y:8},0).wait(1).to({scaleY:1.62,rotation:24.4,y:7.3},0).wait(1).to({scaleY:1.56,rotation:26.2,y:6.7},0).wait(1).to({scaleY:1.51,rotation:28.1,y:6},0).wait(1).to({scaleY:1.45,rotation:30,y:5.3},0).wait(1).to({scaleY:1.39,rotation:31.9,y:4.7},0).wait(1).to({scaleY:1.34,rotation:33.7,y:4},0).wait(1).to({scaleY:1.28,rotation:35.6,y:3.3},0).wait(1).to({scaleX:1,scaleY:1.22,rotation:37.5,y:2.7},0).wait(1).to({scaleY:1.17,rotation:39.4,y:2},0).wait(1).to({scaleY:1.11,rotation:41.2,y:1.3},0).wait(1).to({scaleY:1.06,rotation:43.1,y:0.7},0).wait(1).to({scaleY:1,rotation:45,y:0},0).wait(1).to({rotation:44.8,y:0.1},0).wait(1).to({rotation:44.6},0).wait(1).to({rotation:44.5,y:0.2},0).wait(1).to({rotation:44.3},0).wait(1).to({rotation:44.1,y:0.3},0).wait(1).to({scaleY:1.06,rotation:42.4,y:0.9},0).wait(1).to({scaleY:1.11,rotation:40.6,y:1.6},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:38.8,y:2.2},0).wait(1).to({scaleY:1.22,rotation:37.1,y:2.8},0).wait(1).to({scaleY:1.28,rotation:35.3,y:3.4},0).wait(1).to({scaleY:1.33,rotation:33.5,y:4.1},0).wait(1).to({scaleY:1.39,rotation:31.8,y:4.7},0).wait(1).to({scaleX:1,scaleY:1.44,rotation:30,y:5.3},0).wait(1).to({scaleY:1.5,rotation:28.2,y:6},0).wait(1).to({scaleY:1.55,rotation:26.5,y:6.6},0).wait(1).to({scaleY:1.61,rotation:24.7,y:7.2},0).wait(1).to({scaleY:1.66,rotation:22.9,y:7.8},0).wait(1).to({scaleY:1.61,rotation:21.2,y:8.5},0).wait(1).to({scaleY:1.56,rotation:19.4,y:9.1},0).wait(1).to({scaleY:1.51,rotation:17.6,y:9.7},0).wait(1).to({scaleY:1.46,rotation:15.9,y:10.3},0).wait(1).to({scaleX:1,scaleY:1.41,rotation:14.1,y:11},0).wait(1).to({scaleY:1.36,rotation:12.4,y:11.6},0).wait(1).to({scaleY:1.31,rotation:10.6,y:12.2},0).wait(1).to({scaleY:1.26,rotation:8.8,y:12.9},0).wait(1).to({scaleY:1.2,rotation:7.1,y:13.5},0).wait(1).to({scaleY:1.15,rotation:5.3,y:14.1},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:3.5,y:14.7},0).wait(1).to({scaleY:1.05,rotation:1.8,y:15.4},0).wait(1).to({scaleY:1,rotation:0,y:16},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 2
	this.instance_1 = new lib.Symbol2copy3();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.06,scaleY:1.17},0).wait(1).to({scaleX:1.12,scaleY:1.34},0).wait(1).to({scaleX:1.18,scaleY:1.51},0).wait(1).to({scaleX:1.24,scaleY:1.68},0).wait(1).to({scaleX:1.3,scaleY:1.85},0).wait(1).to({scaleX:1.36,scaleY:2.02},0).wait(1).to({scaleX:1.42,scaleY:2.19},0).wait(1).to({scaleX:1.34,scaleY:2.1},0).wait(1).to({scaleX:1.26,scaleY:2},0).wait(1).to({scaleX:1.19,scaleY:1.9},0).wait(1).to({scaleX:1.11,scaleY:1.8},0).wait(1).to({scaleX:1.04,scaleY:1.7},0).wait(1).to({scaleX:0.96,scaleY:1.6},0).wait(1).to({scaleX:0.89,scaleY:1.5},0).wait(1).to({scaleX:0.81,scaleY:1.4},0).wait(1).to({scaleX:0.74,scaleY:1.3},0).wait(1).to({scaleX:0.66,scaleY:1.2},0).wait(1).to({scaleX:0.58,scaleY:1.1},0).wait(1).to({scaleX:0.51,scaleY:1},0).wait(1).to({scaleX:0.43,scaleY:0.9},0).wait(1).to({scaleX:0.36,scaleY:0.8},0).wait(1).to({scaleX:0.28,scaleY:0.7},0).wait(1).to({scaleX:0.21,scaleY:0.6},0).wait(1).to({scaleX:0.13,scaleY:0.5},0).wait(1).to({scaleX:0.14,scaleY:0.53},0).wait(1).to({scaleX:0.14,scaleY:0.55},0).wait(1).to({scaleX:0.15,scaleY:0.58},0).wait(1).to({scaleX:0.16,scaleY:0.61},0).wait(1).to({scaleX:0.17,scaleY:0.63},0).wait(1).to({scaleX:0.25,scaleY:0.72},0).wait(1).to({scaleX:0.33,scaleY:0.81},0).wait(1).to({scaleX:0.42,scaleY:0.9},0).wait(1).to({scaleX:0.5,scaleY:0.99},0).wait(1).to({scaleX:0.59,scaleY:1.08},0).wait(1).to({scaleX:0.67,scaleY:1.17},0).wait(1).to({scaleX:0.75,scaleY:1.26},0).wait(1).to({scaleX:0.84,scaleY:1.34},0).wait(1).to({scaleX:0.92,scaleY:1.43},0).wait(1).to({scaleX:1,scaleY:1.52},0).wait(1).to({scaleX:1.09,scaleY:1.61},0).wait(1).to({scaleX:1.17,scaleY:1.7},0).wait(1).to({scaleX:1.25,scaleY:1.79},0).wait(1).to({scaleX:1.34,scaleY:1.88},0).wait(1).to({scaleX:1.42,scaleY:1.97},0).wait(1).to({scaleX:1.38,scaleY:1.87},0).wait(1).to({scaleX:1.34,scaleY:1.77},0).wait(1).to({scaleX:1.3,scaleY:1.68},0).wait(1).to({scaleX:1.25,scaleY:1.58},0).wait(1).to({scaleX:1.21,scaleY:1.48},0).wait(1).to({scaleX:1.17,scaleY:1.39},0).wait(1).to({scaleX:1.13,scaleY:1.29},0).wait(1).to({scaleX:1.08,scaleY:1.19},0).wait(1).to({scaleX:1.04,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 1
	this.instance_2 = new lib.Symbol1copy3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1.08,rotation:-1.8,y:-15.3},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:-3.6,y:-14.7},0).wait(1).to({scaleY:1.25,rotation:-5.4,y:-14},0).wait(1).to({scaleY:1.33,rotation:-7.2,y:-13.3},0).wait(1).to({scaleY:1.42,rotation:-9.1,y:-12.7},0).wait(1).to({scaleX:1,scaleY:1.5,rotation:-10.9,y:-12},0).wait(1).to({scaleY:1.59,rotation:-12.7,y:-11.3},0).wait(1).to({scaleY:1.67,rotation:-14.5,y:-10.7},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:-16.3,y:-10},0).wait(1).to({scaleY:1.7,rotation:-18.1,y:-9.3},0).wait(1).to({scaleX:1,scaleY:1.65,rotation:-19.9,y:-8.7},0).wait(1).to({scaleY:1.6,rotation:-21.7,y:-8},0).wait(1).to({scaleY:1.55,rotation:-23.5,y:-7.3},0).wait(1).to({scaleY:1.5,rotation:-25.3,y:-6.7},0).wait(1).to({scaleY:1.45,rotation:-27.2,y:-6},0).wait(1).to({scaleX:1,scaleY:1.4,rotation:-29,y:-5.3},0).wait(1).to({scaleY:1.35,rotation:-30.8,y:-4.7},0).wait(1).to({scaleY:1.3,rotation:-32.6,y:-4},0).wait(1).to({scaleY:1.25,rotation:-34.4,y:-3.3},0).wait(1).to({scaleY:1.2,rotation:-36.2,y:-2.7},0).wait(1).to({scaleY:1.15,rotation:-38,y:-2},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:-39.8,y:-1.3},0).wait(1).to({scaleY:1.05,rotation:-41.6,y:-0.7},0).wait(1).to({scaleY:1,rotation:-43.5,y:0},0).wait(1).to({rotation:-43.2,y:0.1},0).wait(1).to({rotation:-42.9},0).wait(1).to({rotation:-42.6,y:0.2},0).wait(1).to({rotation:-42.4},0).wait(1).to({rotation:-42.1,y:0.3},0).wait(1).to({scaleY:1.11,rotation:-40.4,y:-0.4},0).wait(1).to({scaleY:1.22,rotation:-38.7,y:-1},0).wait(1).to({scaleX:1,scaleY:1.33,rotation:-37,y:-1.7},0).wait(1).to({scaleY:1.45,rotation:-35.3,y:-2.3},0).wait(1).to({scaleY:1.56,rotation:-33.7,y:-3},0).wait(1).to({scaleY:1.67,rotation:-32,y:-3.6},0).wait(1).to({scaleY:1.78,rotation:-30.3,y:-4.3},0).wait(1).to({scaleY:1.89,rotation:-28.6,y:-4.9},0).wait(1).to({scaleX:1,scaleY:2,rotation:-26.9,y:-5.6},0).wait(1).to({scaleY:2.11,rotation:-25.2,y:-6.2},0).wait(1).to({scaleY:2.23,rotation:-23.6,y:-6.9},0).wait(1).to({scaleY:2.34,rotation:-21.9,y:-7.5},0).wait(1).to({scaleY:2.23,rotation:-20.2,y:-8.2},0).wait(1).to({scaleY:2.13,rotation:-18.5,y:-8.8},0).wait(1).to({scaleY:2.03,rotation:-16.8,y:-9.5},0).wait(1).to({scaleY:1.93,rotation:-15.1,y:-10.1},0).wait(1).to({scaleX:1,scaleY:1.82,rotation:-13.5,y:-10.8},0).wait(1).to({scaleY:1.72,rotation:-11.8,y:-11.4},0).wait(1).to({scaleY:1.62,rotation:-10.1,y:-12.1},0).wait(1).to({scaleY:1.51,rotation:-8.4,y:-12.7},0).wait(1).to({scaleY:1.41,rotation:-6.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1.31,rotation:-5,y:-14},0).wait(1).to({scaleY:1.21,rotation:-3.4,y:-14.7},0).wait(1).to({scaleY:1.1,rotation:-1.7,y:-15.3},0).wait(1).to({scaleY:1,rotation:0,y:-16},0).wait(5).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-19,48,38);


(lib.BIgcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3copy2();
	this.instance.parent = this;
	this.instance.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.09,rotation:1.9,y:15.3},0).wait(1).to({scaleY:1.19,rotation:3.7,y:14.7},0).wait(1).to({scaleX:1,scaleY:1.28,rotation:5.6,y:14},0).wait(1).to({scaleY:1.37,rotation:7.5,y:13.3},0).wait(1).to({scaleY:1.47,rotation:9.4,y:12.7},0).wait(1).to({scaleY:1.56,rotation:11.2,y:12},0).wait(1).to({scaleY:1.66,rotation:13.1,y:11.3},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:15,y:10.7},0).wait(1).to({scaleY:1.84,rotation:16.9,y:10},0).wait(1).to({scaleY:1.79,rotation:18.7,y:9.3},0).wait(1).to({scaleY:1.73,rotation:20.6,y:8.7},0).wait(1).to({scaleX:1,scaleY:1.67,rotation:22.5,y:8},0).wait(1).to({scaleY:1.62,rotation:24.4,y:7.3},0).wait(1).to({scaleY:1.56,rotation:26.2,y:6.7},0).wait(1).to({scaleY:1.51,rotation:28.1,y:6},0).wait(1).to({scaleY:1.45,rotation:30,y:5.3},0).wait(1).to({scaleY:1.39,rotation:31.9,y:4.7},0).wait(1).to({scaleY:1.34,rotation:33.7,y:4},0).wait(1).to({scaleY:1.28,rotation:35.6,y:3.3},0).wait(1).to({scaleX:1,scaleY:1.22,rotation:37.5,y:2.7},0).wait(1).to({scaleY:1.17,rotation:39.4,y:2},0).wait(1).to({scaleY:1.11,rotation:41.2,y:1.3},0).wait(1).to({scaleY:1.06,rotation:43.1,y:0.7},0).wait(1).to({scaleY:1,rotation:45,y:0},0).wait(1).to({rotation:44.8,y:0.1},0).wait(1).to({rotation:44.6},0).wait(1).to({rotation:44.5,y:0.2},0).wait(1).to({rotation:44.3},0).wait(1).to({rotation:44.1,y:0.3},0).wait(1).to({scaleY:1.06,rotation:42.4,y:0.9},0).wait(1).to({scaleY:1.11,rotation:40.6,y:1.6},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:38.8,y:2.2},0).wait(1).to({scaleY:1.22,rotation:37.1,y:2.8},0).wait(1).to({scaleY:1.28,rotation:35.3,y:3.4},0).wait(1).to({scaleY:1.33,rotation:33.5,y:4.1},0).wait(1).to({scaleY:1.39,rotation:31.8,y:4.7},0).wait(1).to({scaleX:1,scaleY:1.44,rotation:30,y:5.3},0).wait(1).to({scaleY:1.5,rotation:28.2,y:6},0).wait(1).to({scaleY:1.55,rotation:26.5,y:6.6},0).wait(1).to({scaleY:1.61,rotation:24.7,y:7.2},0).wait(1).to({scaleY:1.66,rotation:22.9,y:7.8},0).wait(1).to({scaleY:1.61,rotation:21.2,y:8.5},0).wait(1).to({scaleY:1.56,rotation:19.4,y:9.1},0).wait(1).to({scaleY:1.51,rotation:17.6,y:9.7},0).wait(1).to({scaleY:1.46,rotation:15.9,y:10.3},0).wait(1).to({scaleX:1,scaleY:1.41,rotation:14.1,y:11},0).wait(1).to({scaleY:1.36,rotation:12.4,y:11.6},0).wait(1).to({scaleY:1.31,rotation:10.6,y:12.2},0).wait(1).to({scaleY:1.26,rotation:8.8,y:12.9},0).wait(1).to({scaleY:1.2,rotation:7.1,y:13.5},0).wait(1).to({scaleY:1.15,rotation:5.3,y:14.1},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:3.5,y:14.7},0).wait(1).to({scaleY:1.05,rotation:1.8,y:15.4},0).wait(1).to({scaleY:1,rotation:0,y:16},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 2
	this.instance_1 = new lib.Symbol2copy2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.06,scaleY:1.17},0).wait(1).to({scaleX:1.12,scaleY:1.34},0).wait(1).to({scaleX:1.18,scaleY:1.51},0).wait(1).to({scaleX:1.24,scaleY:1.68},0).wait(1).to({scaleX:1.3,scaleY:1.85},0).wait(1).to({scaleX:1.36,scaleY:2.02},0).wait(1).to({scaleX:1.42,scaleY:2.19},0).wait(1).to({scaleX:1.34,scaleY:2.1},0).wait(1).to({scaleX:1.26,scaleY:2},0).wait(1).to({scaleX:1.19,scaleY:1.9},0).wait(1).to({scaleX:1.11,scaleY:1.8},0).wait(1).to({scaleX:1.04,scaleY:1.7},0).wait(1).to({scaleX:0.96,scaleY:1.6},0).wait(1).to({scaleX:0.89,scaleY:1.5},0).wait(1).to({scaleX:0.81,scaleY:1.4},0).wait(1).to({scaleX:0.74,scaleY:1.3},0).wait(1).to({scaleX:0.66,scaleY:1.2},0).wait(1).to({scaleX:0.58,scaleY:1.1},0).wait(1).to({scaleX:0.51,scaleY:1},0).wait(1).to({scaleX:0.43,scaleY:0.9},0).wait(1).to({scaleX:0.36,scaleY:0.8},0).wait(1).to({scaleX:0.28,scaleY:0.7},0).wait(1).to({scaleX:0.21,scaleY:0.6},0).wait(1).to({scaleX:0.13,scaleY:0.5},0).wait(1).to({scaleX:0.14,scaleY:0.53},0).wait(1).to({scaleX:0.14,scaleY:0.55},0).wait(1).to({scaleX:0.15,scaleY:0.58},0).wait(1).to({scaleX:0.16,scaleY:0.61},0).wait(1).to({scaleX:0.17,scaleY:0.63},0).wait(1).to({scaleX:0.25,scaleY:0.72},0).wait(1).to({scaleX:0.33,scaleY:0.81},0).wait(1).to({scaleX:0.42,scaleY:0.9},0).wait(1).to({scaleX:0.5,scaleY:0.99},0).wait(1).to({scaleX:0.59,scaleY:1.08},0).wait(1).to({scaleX:0.67,scaleY:1.17},0).wait(1).to({scaleX:0.75,scaleY:1.26},0).wait(1).to({scaleX:0.84,scaleY:1.34},0).wait(1).to({scaleX:0.92,scaleY:1.43},0).wait(1).to({scaleX:1,scaleY:1.52},0).wait(1).to({scaleX:1.09,scaleY:1.61},0).wait(1).to({scaleX:1.17,scaleY:1.7},0).wait(1).to({scaleX:1.25,scaleY:1.79},0).wait(1).to({scaleX:1.34,scaleY:1.88},0).wait(1).to({scaleX:1.42,scaleY:1.97},0).wait(1).to({scaleX:1.38,scaleY:1.87},0).wait(1).to({scaleX:1.34,scaleY:1.77},0).wait(1).to({scaleX:1.3,scaleY:1.68},0).wait(1).to({scaleX:1.25,scaleY:1.58},0).wait(1).to({scaleX:1.21,scaleY:1.48},0).wait(1).to({scaleX:1.17,scaleY:1.39},0).wait(1).to({scaleX:1.13,scaleY:1.29},0).wait(1).to({scaleX:1.08,scaleY:1.19},0).wait(1).to({scaleX:1.04,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 1
	this.instance_2 = new lib.Symbol1copy2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1.08,rotation:-1.8,y:-15.3},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:-3.6,y:-14.7},0).wait(1).to({scaleY:1.25,rotation:-5.4,y:-14},0).wait(1).to({scaleY:1.33,rotation:-7.2,y:-13.3},0).wait(1).to({scaleY:1.42,rotation:-9.1,y:-12.7},0).wait(1).to({scaleX:1,scaleY:1.5,rotation:-10.9,y:-12},0).wait(1).to({scaleY:1.59,rotation:-12.7,y:-11.3},0).wait(1).to({scaleY:1.67,rotation:-14.5,y:-10.7},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:-16.3,y:-10},0).wait(1).to({scaleY:1.7,rotation:-18.1,y:-9.3},0).wait(1).to({scaleX:1,scaleY:1.65,rotation:-19.9,y:-8.7},0).wait(1).to({scaleY:1.6,rotation:-21.7,y:-8},0).wait(1).to({scaleY:1.55,rotation:-23.5,y:-7.3},0).wait(1).to({scaleY:1.5,rotation:-25.3,y:-6.7},0).wait(1).to({scaleY:1.45,rotation:-27.2,y:-6},0).wait(1).to({scaleX:1,scaleY:1.4,rotation:-29,y:-5.3},0).wait(1).to({scaleY:1.35,rotation:-30.8,y:-4.7},0).wait(1).to({scaleY:1.3,rotation:-32.6,y:-4},0).wait(1).to({scaleY:1.25,rotation:-34.4,y:-3.3},0).wait(1).to({scaleY:1.2,rotation:-36.2,y:-2.7},0).wait(1).to({scaleY:1.15,rotation:-38,y:-2},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:-39.8,y:-1.3},0).wait(1).to({scaleY:1.05,rotation:-41.6,y:-0.7},0).wait(1).to({scaleY:1,rotation:-43.5,y:0},0).wait(1).to({rotation:-43.2,y:0.1},0).wait(1).to({rotation:-42.9},0).wait(1).to({rotation:-42.6,y:0.2},0).wait(1).to({rotation:-42.4},0).wait(1).to({rotation:-42.1,y:0.3},0).wait(1).to({scaleY:1.11,rotation:-40.4,y:-0.4},0).wait(1).to({scaleY:1.22,rotation:-38.7,y:-1},0).wait(1).to({scaleX:1,scaleY:1.33,rotation:-37,y:-1.7},0).wait(1).to({scaleY:1.45,rotation:-35.3,y:-2.3},0).wait(1).to({scaleY:1.56,rotation:-33.7,y:-3},0).wait(1).to({scaleY:1.67,rotation:-32,y:-3.6},0).wait(1).to({scaleY:1.78,rotation:-30.3,y:-4.3},0).wait(1).to({scaleY:1.89,rotation:-28.6,y:-4.9},0).wait(1).to({scaleX:1,scaleY:2,rotation:-26.9,y:-5.6},0).wait(1).to({scaleY:2.11,rotation:-25.2,y:-6.2},0).wait(1).to({scaleY:2.23,rotation:-23.6,y:-6.9},0).wait(1).to({scaleY:2.34,rotation:-21.9,y:-7.5},0).wait(1).to({scaleY:2.23,rotation:-20.2,y:-8.2},0).wait(1).to({scaleY:2.13,rotation:-18.5,y:-8.8},0).wait(1).to({scaleY:2.03,rotation:-16.8,y:-9.5},0).wait(1).to({scaleY:1.93,rotation:-15.1,y:-10.1},0).wait(1).to({scaleX:1,scaleY:1.82,rotation:-13.5,y:-10.8},0).wait(1).to({scaleY:1.72,rotation:-11.8,y:-11.4},0).wait(1).to({scaleY:1.62,rotation:-10.1,y:-12.1},0).wait(1).to({scaleY:1.51,rotation:-8.4,y:-12.7},0).wait(1).to({scaleY:1.41,rotation:-6.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1.31,rotation:-5,y:-14},0).wait(1).to({scaleY:1.21,rotation:-3.4,y:-14.7},0).wait(1).to({scaleY:1.1,rotation:-1.7,y:-15.3},0).wait(1).to({scaleY:1,rotation:0,y:-16},0).wait(5).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-19,48,38);


(lib.BIg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 3
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(0,16);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:1.09,rotation:1.9,y:15.3},0).wait(1).to({scaleY:1.19,rotation:3.7,y:14.7},0).wait(1).to({scaleX:1,scaleY:1.28,rotation:5.6,y:14},0).wait(1).to({scaleY:1.37,rotation:7.5,y:13.3},0).wait(1).to({scaleY:1.47,rotation:9.4,y:12.7},0).wait(1).to({scaleY:1.56,rotation:11.2,y:12},0).wait(1).to({scaleY:1.66,rotation:13.1,y:11.3},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:15,y:10.7},0).wait(1).to({scaleY:1.84,rotation:16.9,y:10},0).wait(1).to({scaleY:1.79,rotation:18.7,y:9.3},0).wait(1).to({scaleY:1.73,rotation:20.6,y:8.7},0).wait(1).to({scaleX:1,scaleY:1.67,rotation:22.5,y:8},0).wait(1).to({scaleY:1.62,rotation:24.4,y:7.3},0).wait(1).to({scaleY:1.56,rotation:26.2,y:6.7},0).wait(1).to({scaleY:1.51,rotation:28.1,y:6},0).wait(1).to({scaleY:1.45,rotation:30,y:5.3},0).wait(1).to({scaleY:1.39,rotation:31.9,y:4.7},0).wait(1).to({scaleY:1.34,rotation:33.7,y:4},0).wait(1).to({scaleY:1.28,rotation:35.6,y:3.3},0).wait(1).to({scaleX:1,scaleY:1.22,rotation:37.5,y:2.7},0).wait(1).to({scaleY:1.17,rotation:39.4,y:2},0).wait(1).to({scaleY:1.11,rotation:41.2,y:1.3},0).wait(1).to({scaleY:1.06,rotation:43.1,y:0.7},0).wait(1).to({scaleY:1,rotation:45,y:0},0).wait(1).to({rotation:44.8,y:0.1},0).wait(1).to({rotation:44.6},0).wait(1).to({rotation:44.5,y:0.2},0).wait(1).to({rotation:44.3},0).wait(1).to({rotation:44.1,y:0.3},0).wait(1).to({scaleY:1.06,rotation:42.4,y:0.9},0).wait(1).to({scaleY:1.11,rotation:40.6,y:1.6},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:38.8,y:2.2},0).wait(1).to({scaleY:1.22,rotation:37.1,y:2.8},0).wait(1).to({scaleY:1.28,rotation:35.3,y:3.4},0).wait(1).to({scaleY:1.33,rotation:33.5,y:4.1},0).wait(1).to({scaleY:1.39,rotation:31.8,y:4.7},0).wait(1).to({scaleX:1,scaleY:1.44,rotation:30,y:5.3},0).wait(1).to({scaleY:1.5,rotation:28.2,y:6},0).wait(1).to({scaleY:1.55,rotation:26.5,y:6.6},0).wait(1).to({scaleY:1.61,rotation:24.7,y:7.2},0).wait(1).to({scaleY:1.66,rotation:22.9,y:7.8},0).wait(1).to({scaleY:1.61,rotation:21.2,y:8.5},0).wait(1).to({scaleY:1.56,rotation:19.4,y:9.1},0).wait(1).to({scaleY:1.51,rotation:17.6,y:9.7},0).wait(1).to({scaleY:1.46,rotation:15.9,y:10.3},0).wait(1).to({scaleX:1,scaleY:1.41,rotation:14.1,y:11},0).wait(1).to({scaleY:1.36,rotation:12.4,y:11.6},0).wait(1).to({scaleY:1.31,rotation:10.6,y:12.2},0).wait(1).to({scaleY:1.26,rotation:8.8,y:12.9},0).wait(1).to({scaleY:1.2,rotation:7.1,y:13.5},0).wait(1).to({scaleY:1.15,rotation:5.3,y:14.1},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:3.5,y:14.7},0).wait(1).to({scaleY:1.05,rotation:1.8,y:15.4},0).wait(1).to({scaleY:1,rotation:0,y:16},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.06,scaleY:1.17},0).wait(1).to({scaleX:1.12,scaleY:1.34},0).wait(1).to({scaleX:1.18,scaleY:1.51},0).wait(1).to({scaleX:1.24,scaleY:1.68},0).wait(1).to({scaleX:1.3,scaleY:1.85},0).wait(1).to({scaleX:1.36,scaleY:2.02},0).wait(1).to({scaleX:1.42,scaleY:2.19},0).wait(1).to({scaleX:1.34,scaleY:2.1},0).wait(1).to({scaleX:1.26,scaleY:2},0).wait(1).to({scaleX:1.19,scaleY:1.9},0).wait(1).to({scaleX:1.11,scaleY:1.8},0).wait(1).to({scaleX:1.04,scaleY:1.7},0).wait(1).to({scaleX:0.96,scaleY:1.6},0).wait(1).to({scaleX:0.89,scaleY:1.5},0).wait(1).to({scaleX:0.81,scaleY:1.4},0).wait(1).to({scaleX:0.74,scaleY:1.3},0).wait(1).to({scaleX:0.66,scaleY:1.2},0).wait(1).to({scaleX:0.58,scaleY:1.1},0).wait(1).to({scaleX:0.51,scaleY:1},0).wait(1).to({scaleX:0.43,scaleY:0.9},0).wait(1).to({scaleX:0.36,scaleY:0.8},0).wait(1).to({scaleX:0.28,scaleY:0.7},0).wait(1).to({scaleX:0.21,scaleY:0.6},0).wait(1).to({scaleX:0.13,scaleY:0.5},0).wait(1).to({scaleX:0.14,scaleY:0.53},0).wait(1).to({scaleX:0.14,scaleY:0.55},0).wait(1).to({scaleX:0.15,scaleY:0.58},0).wait(1).to({scaleX:0.16,scaleY:0.61},0).wait(1).to({scaleX:0.17,scaleY:0.63},0).wait(1).to({scaleX:0.25,scaleY:0.72},0).wait(1).to({scaleX:0.33,scaleY:0.81},0).wait(1).to({scaleX:0.42,scaleY:0.9},0).wait(1).to({scaleX:0.5,scaleY:0.99},0).wait(1).to({scaleX:0.59,scaleY:1.08},0).wait(1).to({scaleX:0.67,scaleY:1.17},0).wait(1).to({scaleX:0.75,scaleY:1.26},0).wait(1).to({scaleX:0.84,scaleY:1.34},0).wait(1).to({scaleX:0.92,scaleY:1.43},0).wait(1).to({scaleX:1,scaleY:1.52},0).wait(1).to({scaleX:1.09,scaleY:1.61},0).wait(1).to({scaleX:1.17,scaleY:1.7},0).wait(1).to({scaleX:1.25,scaleY:1.79},0).wait(1).to({scaleX:1.34,scaleY:1.88},0).wait(1).to({scaleX:1.42,scaleY:1.97},0).wait(1).to({scaleX:1.38,scaleY:1.87},0).wait(1).to({scaleX:1.34,scaleY:1.77},0).wait(1).to({scaleX:1.3,scaleY:1.68},0).wait(1).to({scaleX:1.25,scaleY:1.58},0).wait(1).to({scaleX:1.21,scaleY:1.48},0).wait(1).to({scaleX:1.17,scaleY:1.39},0).wait(1).to({scaleX:1.13,scaleY:1.29},0).wait(1).to({scaleX:1.08,scaleY:1.19},0).wait(1).to({scaleX:1.04,scaleY:1.1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(5).to({_off:true},1).wait(60));

	// Symbol 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-16);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleY:1.08,rotation:-1.8,y:-15.3},0).wait(1).to({scaleX:1,scaleY:1.17,rotation:-3.6,y:-14.7},0).wait(1).to({scaleY:1.25,rotation:-5.4,y:-14},0).wait(1).to({scaleY:1.33,rotation:-7.2,y:-13.3},0).wait(1).to({scaleY:1.42,rotation:-9.1,y:-12.7},0).wait(1).to({scaleX:1,scaleY:1.5,rotation:-10.9,y:-12},0).wait(1).to({scaleY:1.59,rotation:-12.7,y:-11.3},0).wait(1).to({scaleY:1.67,rotation:-14.5,y:-10.7},0).wait(1).to({scaleX:1,scaleY:1.75,rotation:-16.3,y:-10},0).wait(1).to({scaleY:1.7,rotation:-18.1,y:-9.3},0).wait(1).to({scaleX:1,scaleY:1.65,rotation:-19.9,y:-8.7},0).wait(1).to({scaleY:1.6,rotation:-21.7,y:-8},0).wait(1).to({scaleY:1.55,rotation:-23.5,y:-7.3},0).wait(1).to({scaleY:1.5,rotation:-25.3,y:-6.7},0).wait(1).to({scaleY:1.45,rotation:-27.2,y:-6},0).wait(1).to({scaleX:1,scaleY:1.4,rotation:-29,y:-5.3},0).wait(1).to({scaleY:1.35,rotation:-30.8,y:-4.7},0).wait(1).to({scaleY:1.3,rotation:-32.6,y:-4},0).wait(1).to({scaleY:1.25,rotation:-34.4,y:-3.3},0).wait(1).to({scaleY:1.2,rotation:-36.2,y:-2.7},0).wait(1).to({scaleY:1.15,rotation:-38,y:-2},0).wait(1).to({scaleX:1,scaleY:1.1,rotation:-39.8,y:-1.3},0).wait(1).to({scaleY:1.05,rotation:-41.6,y:-0.7},0).wait(1).to({scaleY:1,rotation:-43.5,y:0},0).wait(1).to({rotation:-43.2,y:0.1},0).wait(1).to({rotation:-42.9},0).wait(1).to({rotation:-42.6,y:0.2},0).wait(1).to({rotation:-42.4},0).wait(1).to({rotation:-42.1,y:0.3},0).wait(1).to({scaleY:1.11,rotation:-40.4,y:-0.4},0).wait(1).to({scaleY:1.22,rotation:-38.7,y:-1},0).wait(1).to({scaleX:1,scaleY:1.33,rotation:-37,y:-1.7},0).wait(1).to({scaleY:1.45,rotation:-35.3,y:-2.3},0).wait(1).to({scaleY:1.56,rotation:-33.7,y:-3},0).wait(1).to({scaleY:1.67,rotation:-32,y:-3.6},0).wait(1).to({scaleY:1.78,rotation:-30.3,y:-4.3},0).wait(1).to({scaleY:1.89,rotation:-28.6,y:-4.9},0).wait(1).to({scaleX:1,scaleY:2,rotation:-26.9,y:-5.6},0).wait(1).to({scaleY:2.11,rotation:-25.2,y:-6.2},0).wait(1).to({scaleY:2.23,rotation:-23.6,y:-6.9},0).wait(1).to({scaleY:2.34,rotation:-21.9,y:-7.5},0).wait(1).to({scaleY:2.23,rotation:-20.2,y:-8.2},0).wait(1).to({scaleY:2.13,rotation:-18.5,y:-8.8},0).wait(1).to({scaleY:2.03,rotation:-16.8,y:-9.5},0).wait(1).to({scaleY:1.93,rotation:-15.1,y:-10.1},0).wait(1).to({scaleX:1,scaleY:1.82,rotation:-13.5,y:-10.8},0).wait(1).to({scaleY:1.72,rotation:-11.8,y:-11.4},0).wait(1).to({scaleY:1.62,rotation:-10.1,y:-12.1},0).wait(1).to({scaleY:1.51,rotation:-8.4,y:-12.7},0).wait(1).to({scaleY:1.41,rotation:-6.7,y:-13.4},0).wait(1).to({scaleX:1,scaleY:1.31,rotation:-5,y:-14},0).wait(1).to({scaleY:1.21,rotation:-3.4,y:-14.7},0).wait(1).to({scaleY:1.1,rotation:-1.7,y:-15.3},0).wait(1).to({scaleY:1,rotation:0,y:-16},0).wait(5).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-19,48,38);


// stage content:
(lib.Largescale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BIg copy1
	this.instance = new lib.BIgcopy1();
	this.instance.parent = this;
	this.instance.setTransform(534,200);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// BIg copy1
	this.instance_1 = new lib.BIgcopy1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(534,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// BIg copy1
	this.instance_2 = new lib.BIgcopy1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(534,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24));

	// BIg copy
	this.instance_3 = new lib.BIgcopy();
	this.instance_3.parent = this;
	this.instance_3.setTransform(417,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(24));

	// BIg copy
	this.instance_4 = new lib.BIgcopy();
	this.instance_4.parent = this;
	this.instance_4.setTransform(417,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(24));

	// BIg copy
	this.instance_5 = new lib.BIgcopy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(417,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24));

	// BIg copy 2
	this.instance_6 = new lib.BIgcopy2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(300,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(24));

	// BIg copy 2
	this.instance_7 = new lib.BIgcopy2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(300,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24));

	// BIg copy
	this.instance_8 = new lib.BIgcopy();
	this.instance_8.parent = this;
	this.instance_8.setTransform(182,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(24));

	// BIg copy
	this.instance_9 = new lib.BIgcopy();
	this.instance_9.parent = this;
	this.instance_9.setTransform(182,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(24));

	// BIg copy
	this.instance_10 = new lib.BIgcopy();
	this.instance_10.parent = this;
	this.instance_10.setTransform(182,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(24));

	// BIg copy1
	this.instance_11 = new lib.BIgcopy1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(64,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24));

	// BIg copy1
	this.instance_12 = new lib.BIgcopy1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(64,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(24));

	// BIg copy1
	this.instance_13 = new lib.BIgcopy1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(64,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(24));

	// BIg
	this.instance_14 = new lib.BIg();
	this.instance_14.parent = this;
	this.instance_14.setTransform(300,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(340,221,518,358);
// library properties:
lib.properties = {
	width: 600,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;