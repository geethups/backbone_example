require.config({

baseUrl: './',

paths: {

// Libraries
jquery: '../script/vendor/jquery-1.8.2.min',
backbone:	'../script/vendor/backbone-min'

},

shim: {

backbone: {
deps: [ 'jquery' ],
exports: 'Backbone'
}
}

});


define(['jquery'],function($){



});
var animate = (function(){
 var path_value = 100;
    // Put your private variables and functions here
     
    return { // Here are the public methods
        textAnimate:function(){
            $("#text").animate({
                left: '150px'
            });
        },
        animateRight:function(){
            $("#box").animate({
               left:'+='+path_value
            });
        },
        animateBottom:function(){
            $("#box").animate({
               top:'+='+path_value 
            });
        },
        animateBack:function(){
            $("#box").animate({
               top: '200',
               left: '100'
            });
        }
         
    };
})();
