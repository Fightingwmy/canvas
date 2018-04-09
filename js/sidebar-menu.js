
$.sidebarMenu = function(menu) {
  var animationSpeed = 300;

  $(menu).on('click', 'li a i', function(e) {
    var $this = $(this).parent("a");
    var checkElement = $this.next();

    if (checkElement.is('.treeview-menu') && checkElement.is(':visible')) {
        checkElement.slideUp(animationSpeed);
    }

    //If the menu is not visible
    else if ((checkElement.is('.treeview-menu')) && (!checkElement.is(':visible'))) {
      checkElement.slideDown(animationSpeed);
    }
    //if this isn't a link, prevent the page from being redirected
    if (checkElement.is('.treeview-menu')) {
      e.preventDefault();
    }
  });
}

$(document).ready(function(){
  /*当屏幕小于768时，执行下面的函数*/
  /*if($(window).width()<768)*/
    $(".header").click(function(){

    $("ul>li:not(:first-child)").slideToggle();

  });

});

