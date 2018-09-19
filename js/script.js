console.log('app is alive');


function switchChannel(channelName) {
    console.log('Tuning into channel' + channelName);
    document.getElementById('activechannel').innerHTML = channelName;
    document.getElementById('channelloc').innerHTML = 
    'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';
    document.getElementById('onload-star').src='http://ip.lfe.mw.tum.de/sections/star-o.png'
    $('ul li').removeClass('selected');
    $('ul li:contains('+channelName+')').addClass('selected');
    

}
function switchstar(){
 
  $('#onload-star').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');

}
function selectTab(tabId){
    console.log('Changing to tab'+tabId);
    $('#tab-bar button').removeClass('selected');
    $('#'+tabId).addClass('selected');

}
function emojitoggle(){

    $('#chat-bar #emojis').toggle();
}