
$('#button_copy').click(function(){
  var $input = $('#deck_code');
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
  document.execCommand('copy');
  $input.blur();
})


$('#select_deck').change(function(){
    var selected=$('#select_deck option:selected')
    if(selected.length>0){
        $('#deck_code').val(selected.eq(0).val());
    }else{
        $('#deck_code').val('');
    }
})

function load_decks(){
    var select_deck = $('#select_deck')
    for (var i = 0; i < decks.length; i++) {
        var el = document.createElement("option");
        el.text = decks[i].name;
        el.value = decks[i].code;
        select_deck.append(el);
    }
}

load_decks();
$('#select_deck').change();