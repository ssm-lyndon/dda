var search = prompt('Enter a search term').toLowerCase();
if (search) {
  $('input.radio_enable[value="1"]').click();
  $('.conversions_checkbox').attr('checked', false);
  var checkedCount = 0,
    checkedLabels = '';
  $('.conversions_checkbox').each(function(i, node) {
    var tag = node.parentNode.parentNode.children[1].children[0].innerHTML;

    if (tag.toLowerCase().indexOf(search) > -1) {
      node.checked = true;
      checkedLabels += tag + '\n';
      checkedCount++;
    }
  });

  if (checkedCount) {
    if (checkedCount > 1) {
      alert(checkedCount + ' conversions were checked:\n\n' + checkedLabels);
    }
    else {
      alert(checkedCount + ' conversion was checked:\n\n' + checkedLabels);
    }
  }
  else {
    alert('=================================\n     No matching conversions were found.\n=================================');
  }
}
else {
  alert('🤔');
}
