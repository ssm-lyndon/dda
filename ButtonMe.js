/* If Advertisers page */
if (window.location.pathname === '/advertisers.html') {
  alert("Sorry, ButtonMe won't work on the Advertisers page.");
}
else {

  /* If Media Center */
  if (window.location.pathname === '/products/dynamicwebads/mediacenter/home.html') {

    function newButton(e, t) {
      let n = document.createElement('a');
      n.innerHTML = e;
      n.href = t;
      n.target = '_blank';
      n.style.background = '#fff';
      n.style.border = '1px solid #f0f';
      n.style.font = 'bold 10px Lucida Grande';
      n.style.margin = '2px';
      n.style.padding = '2px';
      return n;
    };

    let buttons = document.getElementsByClassName('step_save_small');
    for (let i = 0; i < buttons.length; i++) {
      let button = buttons[i],
        parent = button.parentNode;
      if (button.getAttribute('value') == 'Edit') {
        let link = buttons[i].getAttribute('onclick');
        link = link.replace(/document.location.href='/gi, '');
        link = link.replace(/';/gi, '');
        parent.innerHTML = '';
        parent.appendChild(new newButton('Edit', link.replace(/Action=details/gi, 'Action=details')));
        parent.appendChild(new newButton('Appearance', link.replace(/Action=details/gi, 'Action=appearance')));
        parent.appendChild(new newButton('Copy', link.replace(/Action=details/gi, 'Action=copyprefs')));
        parent.appendChild(new newButton('Data', link.replace(/Action=details/gi, 'Action=dataprefs')));
        parent.appendChild(new newButton('Conversions', link.replace(/Action=details/gi, 'Action=conversions')));
        parent.appendChild(new newButton('Preview', link.replace(/Action=details/gi, 'Action=preview')));
      };
    }
  }

  /* all other pages */
  else {
    $('.step_save_small[value="Edit"]').each(function(key, node) {
      var action = $(node).attr('onclick');
      action = action.replace("document.location.href='", '');
      action = action.replace("';", '');
      $(node).parent().html('<a href="'+action+'" target="_blank" style="background-color:#fff;border:1px solid #f0f;font-size:10px;font-weight:bold;padding:2px;4px">Edit</a>');
    });
  }
}
