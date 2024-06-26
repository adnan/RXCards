var cardContainer = document.getElementById('card-container');
var cardImage = document.getElementById('card-image');
var cardTitle = document.getElementById('card-title');
var cardFrom = document.getElementById('card-from');

var formTitle = document.getElementById('title');
var formFrom = document.getElementById('from');

var saveButton = document.getElementById('save-button');

formTitle.addEventListener('keyup', function(event) {
  cardTitle.innerText = event.target.value;
})

formFrom.addEventListener('keyup', function(event) {
  cardFrom.innerText = event.target.value;
})


function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  link.click();
}

saveButton.addEventListener('click', function(event) {
  event.preventDefault();
  html2canvas(cardContainer, {
    
    onrendered: function(canvas) {
      var myImage = canvas.toDataURL("image/jpg");
      downloadURI("data:" + myImage, "EidCard.jpg");
    }
  });
});