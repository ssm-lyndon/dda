const scriptVersion = '2.0';
let updateMessage = ''

updateMessage += 'Media Center List View Helper version 2.0 installed.\n\n';
updateMessage += 'Changes:\n';
updateMessage += '===========\n';
updateMessage += '+ Removed Tear Sheets button (which has been defunct for awhile)\n';
updateMessage += '+ Added button to go directly to the Conversions step\n';
updateMessage += '+ Added auto-updates functionality';

/* check script version; alert the user if there have been updates since they last used this */
$.getScript('https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.1.3/js.cookie.min.js')
  .done(function(script, textStatus) {
    if (Cookies.get('media_center_list_view_scriptVersion') !== scriptVersion) {
      alert(updateMessage);

      Cookies.set('media_center_list_view_scriptVersion', scriptVersion, 365);
    }
  })
;

function newButton(e, t) {
  let n = document.createElement('a');
  n.innerHTML = e;
  n.href = t;
  n.target = '_blank';
  n.style.background = '#fff';
  n.style.border = '1px solid #777';
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
