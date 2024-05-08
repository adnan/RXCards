var cardContainer = document.getElementById('card-container');
var cardImage = document.getElementById('card-image');
var cardTitle = document.getElementById('card-title');
var cardFrom = document.getElementById('card-from');

var formTitle = document.getElementById('title');
var formFrom = document.getElementById('from');

var saveButton = document.getElementById('save-button');
var updateButton = document.getElementById('update-button');


function loadURLParams() {
  const params = new URLSearchParams(document.location.search);
const en = params.get("en");
const ar = params.get("ar");
console.info(en);
console.info(ar);

formTitle.value = en;
formFrom.value = ar;

cardFrom.innerText = ar;
cardTitle.innerText = en;

}

formTitle.addEventListener('keyup', function(event) {
  cardTitle.innerText = event.target.value;

  formFrom.value = event.target.value;

  

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


updateButton.addEventListener('click', function(event) {
  event.preventDefault();

  cardFrom.innerText = formFrom.value
});

saveButton.addEventListener('click', function(event) {
  event.preventDefault();

  let scale = 2;
  let style = {
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      width: 869  + 'px', // use original width of DOM element to avoid part of the image being cropped out
      height: cardContainer.clientHeight + 'px' // use original height of DOM element
  };

  domtoimage.toBlob(cardContainer,{
    width: cardContainer.clientWidth * scale,
 height: cardContainer.clientHeight * scale,
 style: style})
  .then(function (blob) {
    window.saveAs(blob, 'EidCard.png');
});

});
