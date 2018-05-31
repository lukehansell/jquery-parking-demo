import $ from "jquery";
const DATA = [{}];

$(document).ready(() => {
  let insecureFiltered = false;

  const carparks = $(".carpark");

  const setVisibility = () => {
    $(carparks).show();

    if (insecureFiltered) {
      $.each(carparks, (i, carpark) => {
        if ($(carpark).hasClass("secure")) return;

        $(carpark).hide();
      });
    }
  };

  setVisibility();

  $("#filterInsecure").on("click", () => {
    insecureFiltered = !insecureFiltered;
    setVisibility();
  });
});
