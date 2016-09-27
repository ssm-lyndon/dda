/* last revised: 2016-07-15 */
javascript:
function newButton(e, t) {
  var n = document.createElement("a");
  n.innerHTML = e;
  n.href = t;
  n.target = "_blank";
  n.style.background = "#fff";
  n.style.border = "1px solid #777";
  n.style.font = "bold 10px Lucida Grande";
  n.style.margin = "2px";
  n.style.padding = "2px";
  return n;
};
function doIt() {
  var buttons = document.getElementsByClassName("step_save_small");
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i],
      parent = button.parentNode;
    if (button.getAttribute("value") == "Edit") {
      var link = buttons[i].getAttribute("onclick");
      link = link.replace(/document.location.href='/gi, "");
      link = link.replace(/';/gi, "");
      parent.innerHTML = "";
      parent.appendChild(new newButton("Edit", link.replace(/Action=details/gi, "Action=details")));
      parent.appendChild(new newButton("Appearance", link.replace(/Action=details/gi, "Action=appearance")));
      parent.appendChild(new newButton("Copy", link.replace(/Action=details/gi, "Action=copyprefs")));
      parent.appendChild(new newButton("Data", link.replace(/Action=details/gi, "Action=dataprefs")));
      parent.appendChild(new newButton("Tear sheets", link.replace(/Action=details/gi, "Action=tearsheetprefs")));
      parent.appendChild(new newButton("Preview", link.replace(/Action=details/gi, "Action=preview")));
    };
  }
};
doIt();
