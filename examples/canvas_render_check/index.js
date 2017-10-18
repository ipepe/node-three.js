
var THREE = require('../../');
var fs = require('fs');
var join = require('path').join;

var width = 320;
var height = 240;

var renderer = new THREE.CanvasRenderer();
renderer.setSize(width, height, false);