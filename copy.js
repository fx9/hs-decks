
$('#button_copy').click(function(){
  var $input = $('#to_be_copied');
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var el = $input.get(0);
    var editable = el.contentEditable;
    var readOnly = el.readOnly;
    el.contentEditable = true;
    el.readOnly = false;
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    el.setSelectionRange(0, 999999);
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    $input.select();
  }
  document.execCommand('copy');
  $input.blur();
})