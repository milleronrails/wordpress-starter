// LEARN MORE CLICKED
$( "#serviceOneButton" ).click(function(){
  $( "#serviceOne, #serviceTwo, #serviceThree" )
    .removeAttr("style")
    .removeClass("wow bounceInUp")
    .addClass("animated bounceOutLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceTwo, #serviceThree").addClass("hide").dequeue();
    });

  $('#serviceOneExpanded, #serviceOneBack')
    .removeAttr("style")
    .removeClass("animated bounceOutLeft")
    .addClass("animated bounceInLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceOneExpanded").removeClass("hide").dequeue();
    });
});

$( "#serviceTwoButton" ).click(function(){
  $( "#serviceOne, #serviceTwo, #serviceThree" )
    .removeAttr("style")
    .removeClass("wow bounceInUp")
    .addClass("animated bounceOutLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceOne, #serviceThree").addClass("hide").dequeue();
    });

  $('#serviceTwoExpanded, #serviceTwoBack')
    .removeAttr("style")
    .removeClass("animated bounceOutLeft")
    .addClass("animated bounceInLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceTwoExpanded").removeClass("hide").dequeue();
    });
});

$( "#serviceThreeButton" ).click(function(){
  $( "#serviceOne, #serviceTwo, #serviceThree" )
    .removeAttr("style")
    .removeClass("wow bounceInUp")
    .addClass("animated bounceOutLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceTwo, #serviceOne").addClass("hide").dequeue();
    });

  $('#serviceThreeExpanded, #serviceThreeBack')
    .removeAttr("style")
    .removeClass("animated bounceOutLeft")
    .addClass("animated bounceInLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceThreeExpanded").removeClass("hide").dequeue();
    });
});

// BACK ARROW CLICKED
$( "#serviceOneBack" ).click(function(){
  $( "#serviceOneExpanded, #serviceOneBack" )
    .removeAttr("style")
    .removeClass("animated bounceInLeft")
    .addClass("animated bounceOutLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceOneExpanded, #serviceOneBack").addClass("hide").dequeue();
    });

  $('#serviceOne, #serviceTwo, #serviceThree')
    .removeAttr("style")
    .removeClass("animated bounceOutLeft")
    .addClass("animated bounceInLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceOne, #serviceTwo, #serviceThree").removeClass("hide").dequeue();
    });
});

$( "#serviceTwoBack" ).click(function(){
  $( "#serviceTwoExpanded, #serviceTwoBack" )
    .removeAttr("style")
    .removeClass("animated bounceInLeft")
    .addClass("animated bounceOutLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceTwoExpanded, #serviceTwoBack").addClass("hide").dequeue();
    });

  $('#serviceOne, #serviceTwo, #serviceThree')
    .removeAttr("style")
    .removeClass("animated bounceOutLeft")
    .addClass("animated bounceInLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceOne, #serviceTwo, #serviceThree").removeClass("hide").dequeue();
    });
});

$( "#serviceThreeBack" ).click(function(){
  $( "#serviceThreeExpanded, #serviceThreeBack" )
    .removeAttr("style")
    .removeClass("animated bounceInLeft")
    .addClass("animated bounceOutLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceThreeExpanded, #serviceThreeBack").addClass("hide").dequeue();
    });

  $('#serviceOne, #serviceTwo, #serviceThree')
    .removeAttr("style")
    .removeClass("animated bounceOutLeft")
    .addClass("animated bounceInLeft")
    .delay(500).queue(function(){
      $(this).add("#serviceOne, #serviceTwo, #serviceThree").removeClass("hide").dequeue();
    });
});