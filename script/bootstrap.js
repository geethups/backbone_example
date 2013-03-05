require.config({

baseUrl: './',

paths: {

// Libraries
jquery: '../script/vendor/jquery-1.8.2.min.js,
backbone:	'../script/vendor/backbone.092'

},

shim: {

backbone: {
deps: [ 'jquery' ],
exports: 'Backbone'
}
}

});


define(['jquery'],function($){

// Center text vertically.
$('body').css('paddingTop', $(window).height()/2 - $('body').height() );

// Apply some funny effetcs.
$('body')
.animate({ fontSize: '40pt' },1000)
.animate({ fontSize: '10pt' },1000)
;

});
