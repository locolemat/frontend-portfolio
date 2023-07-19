$(".topicSwitch").click(function(){
    if ($(this).is(':checked')) {
       $(this).parent().addClass('topicSwitchOn');
     } else {
       $(this).parent().removeClass('topicSwitchOn');
     }
});

