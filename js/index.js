function toggleContent() {
  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  let checked = document.querySelectorAll('input[type="checkbox"]:checked');
  let btns = document.querySelectorAll(".toggle-content-btn__text");

  if (checked.length === 0) {
    btns.forEach((btn) => {
      btn.innerHTML =
        'See less features <span><i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    });
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    btns.forEach((btn) => {
      btn.innerHTML =
        'See all features <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>';
    });
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
}
