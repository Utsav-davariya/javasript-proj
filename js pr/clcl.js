
$(document).ready(function() {
  $("#calculate").click(function() {
    var numA = parseFloat($("#numA").val());
    var numB = parseFloat($("#numB").val());
    var operation = $("#operation").val();
    var result;

    switch (operation) {
      case "+":
        result = numA + numB;
        break;
      case "-":
        result = numA - numB;
        break;
      case "*":
        result = numA * numB;
        break;
      case "/":
        result = numA / numB;
        break;
    }
    $("#result").text(result);
  });
});

