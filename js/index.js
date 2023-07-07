let buttons = document.querySelectorAll(".toggle-content-btn");
let btns = document.querySelectorAll(".toggle-content-btn__text");

const toggleContent = () => {
  let extra = document.querySelectorAll(".extra");
  let opens = document.querySelectorAll(".extra--open");

  if (opens.length === 0) {
    btns.forEach((btn) => {
      btn.innerHTML =
        'See less features <span><i class="fa fa-angle-up" aria-hidden="true"></i></span>';
    });
    extra.forEach((extra) => {
      extra.classList.add("extra--open");
    });
  } else {
    btns.forEach((btn) => {
      btn.innerHTML =
        'See all features <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>';
    });
    extra.forEach((extra) => {
      extra.classList.remove("extra--open");
    });
  }
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", toggleContent);
}