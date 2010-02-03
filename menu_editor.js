$(document).ready(function(){
  $('#menu-editor-overview-form #menu-overview').each(function(){
    var th_delete = $('thead th.delete-checkbox', this);
    th_delete.html('<span><input type="checkbox" class="master-delete-checkbox" />&nbsp;'+th_delete.html()+'</span>');
    // alert($('thead th.delete-checkbox', this).innerHTML());
    // the form-item class causes white-space:nowrap;
    $('thead th.delete-checkbox', this).css('white-space', 'nowrap');
    var td_checkboxes = $('tbody td.delete-checkbox :checkbox', this);
    $('thead th.delete-checkbox :checkbox', this).change(function(){
      td_checkboxes.attr('checked', $(this).attr('checked'));
      // alert($(this).attr('checked'));
    });
  });
});