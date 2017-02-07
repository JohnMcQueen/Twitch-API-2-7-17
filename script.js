//RUN JQUERY
var following=[];
$(document).ready(function(){

  //FREE CODE CAMP STREAM INFO AND STATUS API CALL
  var url= "https://wind-bow.gomix.me/twitch-api/streams/freecodecamp";
  $.getJSON(url,function(data1){
    if(data1.stream===null){
      $("#fccStatus").html("Free Code Camp is Currently OFFLINE!");
    }
    else{
      $("#fccStatus").html("Free Code Camp is Currently ONLINE!");
    }
  });
  var followerURL= "https://wind-bow.gomix.me/twitch-api/users/freecodecamp/follows/channels";
  $.getJSON(followerURL, function(data2){
  for (var i=0;i<data2.follows.length;i++){
    var displayName= data2.follows[i].channel.display_name;
    following.push(displayName);

  }
    following.push('iNcontroLTV');
    following.push('Yogscast');
    following.push('flosd');
    following.push('Doublelift');
    following.push('summit1g');
    following.push('LiquidSnute');
    following.push('LowkoTV');
    following.push('B0aty');
    following.push('sodapoppin');
    following.push('lirik');
    following.push('ESL_SC2');

    for(var i=0;i<following.length;i++){
      var url2= 'https://wind-bow.gomix.me/twitch-api/streams/' + following[i] + '/?callback=?';

      $.getJSON(url2).done(function(data3){
        var logo;
        var status;
        var name;

        if(data3.error){
          logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeF9yiuuOJBNO8VpXsVp2VQIpBSTPdLKW6uB3AI-jmSX9G74bX1g";
          name = data3.message;
          status= data3.error;
             $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<img src='" + logo + "'>"
              +
              "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" +status + "</div></div>");
        }
        if(data3.stream===null){
          $.getJSON(data3._links.channel,function(data5){
           status = "OFFLINE";
            logo= data5.logo;
            name= data5.display_name;
            if(logo===null){
              logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
            }
                          $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<img src='" + logo + "'>"
              +
              "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" + status + "</div></div>");

          });

        }

      });
      }
        for(var i=0;i<following.length;i++){
          var onlineURL="https://wind-bow.gomix.me/twitch-api/streams/" + following[i] ;
          $.getJSON(onlineURL, function(data4){
      var logo= data4.stream.channel.logo;
   if(logo===null){
              logo = 'http://web.vmc3.com/projects/bufs/branch/marines/logos/NoLogo.jpg';
            }
        var status= data4.stream.channel.status;

        var name = data4.stream.channel.display_name;
               $("#followerInfo").prepend("<div class ='row'>" + "<div class='col-md-4'>" +
              "<img src='" + logo + "'>"
              +
              "</div>" + "<div class='col-md-4'>" + name + "</div>" + "<div class='col-md-4'>" +status + "</div></div>");

          });
        }

  });

});
