var lastCheckedId = "";

function changeLabelColor(id) {
  var label = document.querySelector('label[for="' + id + '"]');
  if (lastCheckedId == id) {
    return;
  }
  label.style.color = "#3A3E4B";
  if (lastCheckedId !== "") {
    var lastLabel = document.querySelector('label[for="' + lastCheckedId + '"]');
    lastLabel.style.color = "rgba(58, 62, 75, 0.45)";
  }
  lastCheckedId = id;
}

document.querySelectorAll('input[type="radio"]').forEach(function(radioBtn) {
  radioBtn.addEventListener("click", function() {
    changeLabelColor(radioBtn.id);
  });
});