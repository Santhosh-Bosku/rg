function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}

function basicFun()
{
  document.getElementById("in5").checked=true;
  document.getElementById("in7").checked=true;
  document.getElementById("in9").checked=true;
  document.getElementById("in11").checked=true;
  
}

function readURL(input) {
  document.getElementById("blah").style.display="block";
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#blah')
              .attr('src', e.target.result)
              .width(150)
              .height(200);
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function readURLTWO(input) {
  document.getElementById("two").style.display="block";
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#two')
              .attr('src', e.target.result)
              .width(150)
              .backgroundColor(red)
              .height(200);
      };

      reader.readAsDataURL(input.files[0]);
  }
}

function readURLthree(input) {
  document.getElementById("three").style.display="block";
  if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#three')
              .attr('src', e.target.result)
              .width(150)
              .backgroundColor(red)
              .height(200);
      };

      reader.readAsDataURL(input.files[0]);
  }
}

