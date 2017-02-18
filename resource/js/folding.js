// JavaScript Document
$(document).ready(function() {
  $('li.folder').addClass('plusimageapply');
  $('li.folder').children().addClass('selectedimage');
  $('li.folder').children('ul').hide();
  $('li.folder').each(
    function(column) {
      $(this).click(function(event) {
        if (this == event.target) {
          if($(this).is('.plusimageapply')) {
            $(this).children('ul').show();
            $(this).removeClass('plusimageapply');
            $(this).addClass('minusimageapply');
          } else {
            $(this).children('ul').hide();
            $(this).removeClass('minusimageapply');
            $(this).addClass('plusimageapply');
          }
        }
      });
    }
  );
});

// Execute this after the site is loaded.
//$(function() {
    // Find list items representing folders and
    // style them accordingly.  Also, turn them
    // into links that can expand/collapse the
    // tree leaf.
    //$('li > ul').each(function(i) {
        // Find this list's parent list item.
        //var parent_li = $(this).parent('li');

        // Style the list item as folder.
        //parent_li.addClass('folder');

        // Temporarily remove the list from the
        // parent list item, wrap the remaining
        // text in an anchor, then reattach it.
        //var sub_ul = $(this).remove();
        //parent_li.wrapInner('<a/>').find('a').click(function() {
            // Make the anchor toggle the leaf display.
            //sub_ul.toggle();
        //});
        //parent_li.append(sub_ul);
    //});

    // Hide all lists except the outermost.
    //$('ul ul').hide();
//});
