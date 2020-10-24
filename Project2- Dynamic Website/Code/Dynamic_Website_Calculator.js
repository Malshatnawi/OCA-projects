// CHANGE PROPERTIES

function changeFontSize() {
    var z = document.getElementById("font_size").value;
    document.body.style.fontSize=z;
};


function changeColor (){
  var x =document.getElementById("pickcolor").value;
  document.body.style.backgroundColor= x;
}

function changeFontFamily(){
  var y = document.getElementById("font_family").value;
  document.body.style.fontFamily=y;
}


// CALCULATOR FUNCTIONS

add = () => {
  var x = Number(document.getElementById("firsttext").value);
  var y = Number(document.getElementById("secondtext").value);
  result.innerHTML = x + y;
};
subtract = () => {
  var x = document.getElementById("firsttext").value;
  var y = document.getElementById("secondtext").value;
  result.innerHTML = x - y;
};
multiply = () => {
  var x = document.getElementById("firsttext").value;
  var y = document.getElementById("secondtext").value;
  result.innerHTML = x * y;
};
division = () => {
  var x = document.getElementById("firsttext").value;
  var y = document.getElementById("secondtext").value;
  result.innerHTML = x / y;
};
power = () => {
  var x = document.getElementById("firsttext").value;
  var y = document.getElementById("secondtext").value;
  result.innerHTML = Math.pow(x, y);
};
absolute = () => {
  var x = document.getElementById("firsttext").value;
  var y = document.getElementById("secondtext").value;
  if (x != "") {
    result.innerHTML = Math.abs(x);
  } else {
    result.innerHTML = Math.abs(y);
  }
};
factorial = () => {
  var x = document.getElementById("firsttext").value;
  var y = document.getElementById("secondtext").value;
  if (x != "") {
    if (x == 0) {
      result.innerHTML = 1;
    } else if (x > 0) {
      var n = 1;
      for (i = x; i >= 1; i--) {
        n = n * i;
      }
      result.innerHTML = n;
    }
    else{
      result.innerHTML="Please Enter a Positive Number!";
    }

  } else {
    if (y == 0) {
      result.innerHTML = 1;
    } else if (y > 0) {
      var n = 1;
      for (i = y; i >= 1; i--) {
        n = n * i;
      }
      result.innerHTML = n;
    }
    else {
      result.innerHTML="Please Enter a Positive Number!";

    }
  }
};