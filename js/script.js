console.log('app is alive');


function switchChannel(channelName) {
    /* updated channel name is logged to console.*/ 
    console.log('Tuning into channel' ,channelName);
    /* channel name above the chat area will be changed when click on channel name list*/ 
    document.getElementById('activechannel').innerHTML = channelName;
    /* updated channel has a link */ 
    document.getElementById('channelloc').innerHTML = 
    'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';
    document.getElementById('onload-star').src='http://ip.lfe.mw.tum.de/sections/star-o.png'
    $('ul li').removeClass('selected');
    $('ul li:contains('+channelName+')').addClass('selected');
    

}
function switchstar(){
    /*click on star in app changes the star from empty to filled*/ 
  $('#onload-star').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');

}
function selectTab(tabId){
    /* clicked tab is logged to console*/ 
    console.log('Changing to tab'+tabId);
    /* #highlighting click on tab remove highlighting from all other tabs*/ 
    $('#tab-bar button').removeClass('selected');
    /* #highlighting click tab adds highlighting to that ta*/ 
    $('#'+tabId).addClass('selected');

}
function emojitoggle(){
    /* #emogji using jQuery to selector*/  
    $('#chat-bar #emojis').toggle();
}