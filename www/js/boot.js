var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
        window.plugins.insomnia.keepAwake();
        
        $('.colourSelect').on('change',function(){
            var red = $('#red').val();
            var green = $('#green').val(); 
            var blue = $('#blue').val();

            $('body').css('background-color','rgb('+red+','+green+','+blue+')');

            window.localStorage['red'] = red;
            window.localStorage['green'] = green;
            window.localStorage['blue'] = blue;

        });

        if(window.localStorage['red']){
            $('#red').val(window.localStorage['red']);
        }
        if(window.localStorage['green']){
            $('#green').val(window.localStorage['green']);
        }
        if(window.localStorage['blue']){
            $('#blue').val(window.localStorage['blue']);
        }
        $('.colourSelect').trigger('change');
         
        $('#button').css({height: $(window).height() - $('#content').height()});
         
    }
}


