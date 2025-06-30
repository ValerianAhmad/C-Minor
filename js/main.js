(function ($) {
  "use strict";

  // Date & Time picker
  $("#datePicker").datetimepicker({ format: "L", minDate: moment() });
  $("#timePicker").datetimepicker({ format: "LT" });

  // Smooth scrolling
  $("a.smooth-scroll").on("click", function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate(
      { scrollTop: $(target).offset().top - 70 },
      800,
      "easeInOutExpo"
    );
  });

  // Testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 30,
    dots: true,
    loop: true,
    center: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
    },
  });

  // Back‑to‑top
  $(window).on("scroll", function () {
    $(this).scrollTop() > 100
      ? $(".back-to-top").fadeIn("slow")
      : $(".back-to-top").fadeOut("slow");
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800, "easeInOutExpo");
    return false;
  });

  // === Reservation form validation & cancel ===
  $("#reserveForm").on("submit", function (e) {
    e.preventDefault();
    if (this.checkValidity()) {
      $("#reserve-alert").removeClass("d-none");
      this.reset();
      this.classList.remove("was-validated");
      setTimeout(() => $("#reserve-alert").addClass("d-none"), 4000);
    } else {
      this.classList.add("was-validated");
    }
  });

  $("#reserveCancel").on("click", function () {
    $("#reserveForm")[0].reset();
    $("#reserveForm")[0].classList.remove("was-validated");
  });

  // ==== PRELOADER === //
  $(window).on('load', function () {
    $('#preloader').fadeOut('slow');
  });
})(jQuery);
