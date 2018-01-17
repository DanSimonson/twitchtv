
$(document).ready(function () { 
    
    function status(){
       var url = 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp/?callback=?';
       $.getJSON(url, function(data){
           if(data.stream === null) {
            $('#fcc-status').html('Free Code Camp is OFFLINE');
           }else {
               $('#fcc-status').html('Free Code Camp is ONLINE');
           }
        });
        
    }

    function handleError(){
        var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
        "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"] 
    
        channels.forEach(function(value, index) {
            //streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/'+channels[i]+'/?callback=?';
            channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[index]+'/?callback=?';
            
            $.getJSON(channelUrl).done(function(data){                
                if (data.error) {
                    channels.splice(index, 1);
                }    
            });
        });
       
        //call function to process and render page with error free data
        check(channels);            
    };
        


    function check(channels){        
        
        //console.log seems to reset array to eliminate removed elements of "undefined". Not sure why or how :>)
        console.log(channels)
        var type = ["streams", "channels"];
        channels.forEach(function(value, index) {
            
            $.getJSON('https://wind-bow.glitch.me/twitch-api/'+type[0]+'/'+channels[index]+'/?callback=?', function(data) {
                
                if(data.stream !== null) {

                    $('#on-followers').prepend("<div class = 'row'>" + "<div class = 'col-md-4'>"
                    + "<img src=" + data.stream.channel.logo + ">"
                    + "</div>" + "<div class='col-md-4'>" +"<a href='https://www.twitch.tv/" + data.stream.channel.display_name + "'" +
                    "</a>" 
                    + data.stream.channel.display_name + "</div>" + "<div class='col-md-4'>" 
                    + data.stream.channel.status + "</div>");
                    //console.log(data.stream.channel.display_name);
                    //console.log(data.stream.channel.status);
                    //console.log(data.stream.channel.logo);
                }else {
                    $.getJSON('https://wind-bow.glitch.me/twitch-api/'+type[1]+'/'+channels[index]+'/?callback=?', function(data){
                        $('#off-followers').prepend("<div class = 'row'>" + "<div class = 'col-md-4'>"
                        + "<img src='" + data.logo + "'>" + "</div>"+"<div class='col-md-4'>"
                        + "<a href='https://www.twitch.tv/" + data.display_name + "'" +
                        "</a>" + data.display_name + "</div>"
                        + "<div class='col-md-4'>" + "LINK OPEN / STATUS OFFLINE" + "</div>");       
                        //console.log(data.display_name)
                        //console.log(data.logo);
                    }); //end getjson
                }
            }); //end getjson
        });
    }
    //call methods to process data and render page
    status();
    handleError();

    //button clicks
    $("#all-btn").click(function() {
        $("#on-followers").show()
        $("#off-followers").show();
        //$(".all > div").css("background-color", "#5C5457")
        //$(".offline-btn > div").css("background-color", "#B8CCA6");
        //$(".online-btn > div").css("background-color", "#B8CCA6");        

    });
    $("#online-btn").click(function(){
        $("#on-followers").show()
        $("#off-followers").hide();
        //$(".online-btn > div").css("background-color", "#5C5457");
        //$(".offline-btn > div").css("background-color", "#B8CCA6");
        //$(".all > div").css("background-color", "#B8CCA6");
    });
    $("#offline-btn").click(function(){
        $("#on-followers").hide()
        $("#off-followers").show();
        //$(".offline-btn > div").css("background-color", "#5C5457");
        //$(".online-btn > div").css("background-color", "#B8CCA6");        
        //$(".all > div").css("background-color", "#B8CCA6");
    });

}); //end document

/*
___________________________________________________________________________________________________________
___________________________________________________________________________________________________________
___________________________________________________________________________________________________________
___________________________________________________________________________________________________________
---------------------------------------   old code --------------------------------------------------------
function check (){
    var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
    "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"] 
    for (var i=0; i < channels.length; i++) {
        //streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/'+channels[i]+'/?callback=?';
        channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]+'/?callback=?';
        var promise = $.getJSON(channelUrl);
        promise.done(function(data) {
            console.log('channel:', data.display_name);
          });
    } 
}
function checkTwo (){
    var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
    "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"] 
    for (var i=0; i < channels.length; i++) {
        streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/'+channels[i]+'/?callback=?';
        //channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]+'/?callback=?';
        var promise = $.getJSON(streamUrl);
       
        promise.done(function(data2) {
            console.log('stream:', data2.stream.channel.display_name);                
        });
        
    } 
}
    var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
        "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"]
    var type = ["streams", "channels"];
    console.log('https://wind-bow.glitch.me/twitch-api/'+type[0]+'/'+channels[0]+'/?callback=?');
    console.log('https://wind-bow.glitch.me/twitch-api/streams/'+channels[0]+'/?callback=?')
    
    ___________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________
    ___________________________________________________________________________________________________________
    ---------------------------- end old code -----------------------------------------------------------------
    */
    





