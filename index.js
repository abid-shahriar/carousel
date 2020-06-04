const slideBox = document.querySelectorAll(".slide-box");
const btns = document.querySelectorAll(".btn");

let counter = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const direction = e.currentTarget.classList[1];

    if (direction === "prev") {
      counter--;
      if (counter < 0) {
        counter = slideBox.length - 1;
      }
      carousel(counter);
    } else {
      counter++;
      if (counter > slideBox.length - 1) {
        counter = 0;
      }
      carousel(counter);
    }
  });

  //   let targetClass = btn.classList;
  //   if (targetClass.contains("prev")) {
  //     btn.style.display = "none";
  //   }
});

function carousel(i) {
  slideBox.forEach((slide) => {
    slide.style.transform = `translateX(calc(-${i} * 100%))`;
  });
}
