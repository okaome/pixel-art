

// Select  inputHeight(number of rows)
var heightInput = $("#inputHeight");
// Select  inputHeight(number of columns)
var widthInput = $("#inputWidth");

// Select color input
var colorInput = $("#colorPicker");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  var heightValue = heightInput.val();
  var widthValue = widthInput.val();
  var pixelCanvas = $("#pixelCanvas");

  // clears previously built table if any exists
  pixelCanvas.children().remove(); 

  // grid is built
  for (var row = 0; row < heightValue; row++) {
    //add a new row
    pixelCanvas.append("<tr></tr>");

    //add all the columns in the row
    for (var column = 0; column < widthValue; column++) {
      $(pixelCanvas.children()[row]).append("<td></td>");
    }
  }
}

//Background color of the cell changes, with respective chosen color
$("table").on("click", "td", function() {
  $(this).css("backgroundColor", colorInput.val());
});

// When the size is submitted by the user, we call makeGrid()
var form = $("#sizePicker");

form.submit(function(event) {
  // This stops the page from refreshing upon submit
  event.preventDefault(); 
  makeGrid();
});
