$(document).ready(function(){
  $('#menu-editor-overview-form #menu-overview').each(function(){
    
    // delete all checkbox
    var th_delete = $('thead th.delete-checkbox', this);
    th_delete.html('<span><input type="checkbox" class="master-delete-checkbox" />&nbsp;'+th_delete.html()+'</span>');
    $('thead th.delete-checkbox', this).css('white-space', 'nowrap');
    var td_checkboxes = $('tbody td.delete-checkbox :checkbox', this);
    $('thead th.delete-checkbox :checkbox', this).change(function(){
      td_checkboxes.attr('checked', $(this).attr('checked'));
    });
    
    // freeze width of first column
    var w = $('td.drag', this).width();
    $('td.drag', this).each(function(){
      $(this).css('width', w+'px');
    });
    
    // replace description fields with textareas
    var h = $('td.description input', this).height();
    $('td.description input', this).each(function(){
      var textarea =
        $('<textarea rows="1"></textarea>')
        .css('height', h+'px')
        .css('padding-top', $(this).css('padding-top'))
        .css('padding-bottom', $(this).css('padding-bottom'))
        // .css('margin', '0')
        // .css('display', $(this).css('display'))
        .val($(this).val())
        .attr('name', $(this).attr('name'))
        .attr('tabindex', $(this).attr('tabindex'))
      ;
      $(this).replaceWith(textarea);
    });
    
    // description column resizing
    var description_cells = $('td.description', this);
    var description_textareas = $('td.description textarea', this);
    description_textareas.focus(function(){
      description_cells.css('width', '250px');
      description_textareas.css('height', h+'px');
      $(this).css('height', '');
    });
    $('td:not(.description) input', this).focus(function(){
      description_cells.css('width', '');
      description_textareas.css('height', h+'px');
    });
  });
});