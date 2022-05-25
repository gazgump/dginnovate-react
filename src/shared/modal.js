
  var modalBtns = document.querySelectorAll('.btn');

  if (modalBtns) {

    modalBtns.forEach(function(btn, key){

       btn.addEventListener('click', function () {

          var modal = btn.getAttribute('data-modal');
          document.getElementById(modal).style.display = "block";
       });
    });
  }


  var closeBtns = document.querySelectorAll(".close-modal");

  if (closeBtns) {

    closeBtns.forEach(function(btn, key){

      btn.addEventListener('click', function () {

        var modal = btn.closest('.modal');
        modal.style.display = "none";
      });
    });
  }

  window.onclick = function(event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  }
