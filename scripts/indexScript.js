
$(document).ready(function () { 
    
    function status(){
       let url = 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp';
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
                    $('#followers').prepend("<div class = 'row'>" + "<div class = 'col-md-4'>"
                    + "<img src=" + data.stream.channel.logo + ">"
                    + "</div>" + "<div class='col-md-4'>" + data.stream.channel.display_name + "</div>" + "<div class='col-md-4'>" 
                    + data.stream.channel.status + "</div>");
                    //$div.append('<h4 class="name"><a href="https://www.twitch.tv/' +el.name+ ' " target="_blank">'
                    //+el.name+'</a></h4><p class="online"><i class="' 
                    //+ online+'"></i></p>');
                    console.log(data.stream.channel.display_name);
                    console.log(data.stream.channel.status);
                    console.log(data.stream.channel.logo);
                }else {
                    $.getJSON('https://wind-bow.glitch.me/twitch-api/'+type[1]+'/'+channels[index]+'/?callback=?', function(data){
                        $('#followers').prepend("<div class = 'row'>" + "<div class = 'col-md-4'>"
                        + "<img src='" + data.logo + "'>" + "</div>" + "<div class='col-md-4'>" 
                        + data.display_name + "</div>" 
                        + "<div class='col-md-4'>" + "status: OFFLINE" + "</div>");       
                        console.log(data.display_name)
                        console.log('status: offline');
                        console.log(data.logo);
                    }); //end getjson
                }
            }); //end getjson
        });
    }
    //call methods to process data and render page
    status();
    handleError();
}); //end document



    /*
    function temp (){ 
    var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
    "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"]
    var type = ["streams", "channels"];
    console.log('https://wind-bow.glitch.me/twitch-api/'+type[0]+'/'+channels[0]+'/?callback=?');
    console.log('https://wind-bow.glitch.me/twitch-api/streams/'+channels[0]+'/?callback=?')

    $.getJSON('https://wind-bow.glitch.me/twitch-api/'+type[0]+'/'+channels[0]+'/?callback=?', function(data) {
        //console.log(data);
        if(data.stream !== null) {
            console.log(data.stream.channel.display_name);
            console.log(data.stream.channel.status);
            console.log(data.stream.channel.logo);
        }else {
            $.getJSON('https://wind-bow.glitch.me/twitch-api/'+type[1]+'/'+channels[0]+'/?callback=?', function(data){        
                
                console.log(data.display_name)
                console.log('status: offline');
                console.log(data.logo);
            });
        }
    }); //end getjson
    } 
     //var url = 'https://wind-bow.glitch/twitch-api/'+type[0]+'/freecodecamp/?callback=?';
    //var url = 'https://wind-bow.glitch/twitch-api/'+type[0]+'/freecodecamp/?callback=?';

    //var streamUrlOne ='https://wind-bow.glitch.me/twitch-api/streams/'+channels[0]+'/?callback=?';
    //var streamUrlTwo ='https://wind-bow.glitch.me/twitch-api/streams/'+channels[1]+'/?callback=?';
    //var channelUrlOne = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[0]+'/?callback=?';
    //var channelUrlTwo = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[1]+'/?callback=?';
    //console.log(streamUrlOne);
    //console.log(streamUrlTwo);
    //https://wind-bow.glitch.me/twitch-api/users/freecodecamp/?callback=?%27
    $.getJSON(streamUrlTwo, function(data) {        
        if(data.stream !== null) {
            console.log(data.stream.channel.display_name);
            console.log(data.stream.channel.status);
            console.log(data.stream.channel.logo);
        }else {
            $.getJSON(channelUrlTwo, function(data){                
                console.log(data.display_name)
                console.log('status: offline');
                console.log(data.logo);
            });
        }
    });


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

    function checkIfOnline (){
    
    var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
    "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"] 

    for (var i=0; i < channels.length; i++) {
        streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/'+channels[i]+'/?callback=?';
        channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]+'/?callback=?';
        
        $.getJSON(streamUrl, function(data){
            
            if (data.stream !== null) {
                
                //var name = data.stream.channel.display_name; 
                //console.log('stream:', data.stream.channel.display_name);           
                //var status = data.stream.channel.status;
                //console.log(data.stream.channel.status);
                //var logo = data.stream.channel.logo;
                //console.log(data.stream.channel.logo);
            } else {
                var promise = $.getJSON(channelUrl);
                    promise.done(function(data) {
                        console.log(data.display_name);
                      });
            }
        });        
    };
    } //end Online

    function checkIfOffline() {
        var channels = ["freecodecamp","ESL_SC2", "OgamingSC2", "cretetion", "storbeck", "habathcx", "RobotCaleb", 
        "noobs2ninjas", "sodapoppin", "moonducktv","forTest","imaqtpie","etozhemad","amazhs"] 

    for (var i=0; i < channels.length; i++) {
        channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/'+channels[i]+'/?callback=?';
        streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/'+channels[i]+'/?callback=?';        
            var promise = $.getJSON(channelUrl, function(data){
                promise.done(function(data) {
                    var name = data.display_name;
                    console.log('channel:', name);
                  });
                //console.log(data);
                //var logo = data.logo;
                //var status = 'Offline';
                //var name = data.display_name;
                //console.log('channel:', name);
            });                           
    };
    } //end Offline()

    //call to find online
    //check();
    //checkTwo();
    //checkIfOffline();
    //checkIfOnline();

    

});//end of document ready

/*
function successOnline() {        
    var name = data.stream.channel.display_name; 
    console.log(name);           
    var status = data.stream.channel.status;
    var logo = data.stream.channel.logo;
};

    //get button click event
    //var searchWiki = document.getElementById('search');
    //use event listeners to call searching()
    //searchWiki.addEventListener("click", searching);
    //let url = 'https://wind-bow.glitch.me/twitch-api/streams/freecodecamp';
    //var list = {}

    //var name;
    //var logo;
    //var status;
    //var channelUrl 

    
    //var channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/'+channel[i]+'/?callback=?';

     
   


/*
else {
    $.getJSON(channelUrl, function(data2) {
        console.log(data2);
    });
            
} 
    /*
    if (logo === null) {
                            logo = "img/noLogo.jpg";
                        }else {
                            logo = data.stream.channel.logo;
                        }
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/freecodecamp/?callback=?', function(data) {

        if(data.error) {
            logo = 'img/noLogo.jpg';
            name = data.message;
            status = data.error;

        } else if (data.stream === null) {
            //console.log(data);
            status = 'Offline';
            $.getJSON('https://wind-bow.glitch.me/twitch-api/channels/freecodecamp/?callback=?', function(data2){
                console.log(data2);
                logo = data2.logo;
                name = data2.display_name;

            });
        } else {
            console.log(data);
            if (logo === null) {
                logo = "img/noLogo.jpg";
            }else {
                logo = data.stream.channel.logo;
            }
            name = data.stream.channel.display_name;            
            status = data.stream.channel.status;
        }        
      });*/

    /*
    $.getJSON('https://wind-bow.glitch.me/twitch-api/streams/OgamingSC2/?callback=?', function(data) {
        console.log(data);
        var name = data.stream.channel.display_name;
      });
    */

    
    // AJAX request to  find out if each channel is online or offline and get data
    //for (var i=0; i < channels.length; i++) {
        //var streamUrl = 'https://wind-bow.glitch.me/twitch-api/streams/'+ channels[i];
        //var channelUrl = 'https://wind-bow.glitch.me/twitch-api/channels/' + channels[i];
        //$.getJSON(channelUrl,function(data){
            //var logo = data.logo;
            //console.log(logo);
           // if(data.stream === null) {
                //document.getElementById("fcc-status").innerHTML = '';
            //}
           // else {
                //document.getElementById("fcc-status").innerHTML = '';
            //}

       // }); //end getJSON()
   // } //end for loop
  

            //console.log('stream info:', streamUrl);
            //var name =;
            //var status =;
            
            //console.log('channel info:', channelUrl);


