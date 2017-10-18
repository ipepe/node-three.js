var fs = require('fs');
var Canvas = require('canvas')
var Image = Canvas.Image;
var { JSDOM } = require('jsdom');
global.document = new JSDOM('<!doctype html><html><head></head><body></body></html>');
global.window = document.window;


// Monkey patch for Image#addEventListener.
Image.prototype.addEventListener = function(type, listener, useCapture) {
  this['on' + type] = listener;
};
global.document.createElement  = function(tag) {
  if (tag === 'img') {
    return new Image();
  }else if (tag ==='canvas'){
    canvas = new Canvas()
    canvas.style = {};
    return canvas;
  }
};
global.document.createElementNS = function(namespace, element){
  return global.document.createElement(element);
};
window.THREE = require('./lib/three');
global.THREE = window.THREE;
global.THREE.Image = Image;
require('./lib/CanvasRenderer');
require('./lib/Projector');


module.exports = window.THREE;
