
(function($) {

    var settings = {};
    var liquidBottom;
    var liquidTop;

    $.fn.liquid = function(options) {
        settings = $.extend( {}, $.fn.liquid.defaults, options );
        return this.each(function() {
            liquid($(this));
        });
    };

    $.fn.liquid.defaults = {
        foregroundColor:"#E55041",
        backgroundColor:"#1D172D"
    };

    $.fn.liquid.setForegroundColor = function(color){
        settings.foregroundColor = color;
        /*return this.each(function(){
            $(this).find('.liquid-top').children('div').css('color', color);
            $(this).find('.liquid-bottom').css('background-gcolor', color);
        })*/
    };

    $.fn.liquid.setBackgroundColor = function(color){
        settings.backgroundColor = color;
    };


    function liquid(obj){

        // TODO: Implement user settings

        var liquid = $('<div class = "liquid"></div>');
        var hour = '<div class = "hour">00</div>';
        var minute = '<div class = "minute">00</div>';
        var second = '<div class = "second">00</div>';

        var liquidBottom = $('<div class = "liquid-bottom"></div>');
        liquidBottom.append(hour + minute + second);

        var liquidTop = $('<div class = "liquid-top"></div>');
        liquidTop.append(hour + minute + second);


        liquid.append(liquidBottom);
        liquid.append(liquidTop);

        obj.html(liquid);


        liquidBottom = obj.find('.liquid-bottom');
        liquidTop = obj.find('.liquid-top');
        hour = liquid.find('.hour');
        minute = liquid.find('.minute');
        second = liquid.find('.second');
        var topHour = liquidTop.find('.hour');
        var topMinute = liquidTop.find('.minute');
        var topSecond = liquidTop.find('.second');

        var height = hour.height();
        console.log(height);


        var start = new Date;
        setInterval(function(){

            var time = new Date();
            var hourText = (time.getHours() < 10) ? '0' + (time.getHours()) : (time.getHours());
            var minuteText = (time.getMinutes() < 10) ? '0' + (time.getMinutes()) : (time.getMinutes());
            var secondText = (time.getSeconds() < 10) ? '0' + (time.getSeconds()) : (time.getSeconds());

            hour.each(function(){
                $(this).text(hourText)
            });
            minute.each(function(){
                $(this).text(minuteText)
            });
            second.each(function(){
                $(this).text(secondText)
            });

            // TODO: animate height, add ms?

            topHour.css('height', height / 24 * hourText + 'px');
            topMinute.css('height', height / 60 * minuteText + 'px');
            topSecond.css('height', height / 60 * secondText + 'px');


        }, 1000);


    }



})(jQuery);


