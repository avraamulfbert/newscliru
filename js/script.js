$(document).ready(function () {
  $('.accordion').accordion({
    heightStyle: 'content',
    header: '.accordion-header',
    active: true
  });

  $('.accordion-simple').accordion({
    heightStyle: 'content',
    header: '.accordion-header-simple',
    active: true
  });

  $(function () {
    // вызываем форму
    $(document).on("click", ".call_form", function (e) {
      e.preventDefault();// отменяем переход по ссылке

      var this_ = $(this);
      if (this_.hasClass("disabled"))
        return false;

      this_.addClass("disabled");

      $.ajax({
        url: "/contacts/form.php",
        type: "POST",
        data: {},
        success: function (data) {
          $("body").append(data);
          $(".modal_background").css({ "display": "flex" });
          $(".modal_form").fadeIn();
          this_.removeClass("disabled");
        }
      });
    });

    // а это для закрытия формы
    $(document).on("click", ".close_form", function (e) {
      e.preventDefault();
      $(".modal_background").hide().remove();
    });
  });

  $('#animation-for-year1973').hover(
    function () {
      $('#year-block-open1973').fadeIn();
    },
    function () {
      $('#year-block-open1973').fadeOut();
    });
  $('#animation-for-year1974').hover(
    function () {
      $('#year-block-open1974').fadeIn();
    },
    function () {
      $('#year-block-open1974').fadeOut();
    });
  $('#animation-for-year1975').hover(
    function () {
      $('#year-block-open1975').fadeIn();
    },
    function () {
      $('#year-block-open1975').fadeOut();
    });
  $('#animation-for-year1976').hover(
    function () {
      $('#year-block-open1976').fadeIn();
    },
    function () {
      $('#year-block-open1976').fadeOut();
    });
  $('#animation-for-year1977').hover(
    function () {
      $('#year-block-open1977').fadeIn();
    },
    function () {
      $('#year-block-open1977').fadeOut();
    });
  $('#animation-for-year1982').hover(
    function () {
      $('#year-block-open1982').fadeIn();
    },
    function () {
      $('#year-block-open1982').fadeOut();
    });
  $('#animation-for-year1991').hover(
    function () {
      $('#year-block-open1991').fadeIn();
    },
    function () {
      $('#year-block-open1991').fadeOut();
    });
  $('#animation-for-year1992').hover(
    function () {
      $('#year-block-open1992').fadeIn();
    },
    function () {
      $('#year-block-open1992').fadeOut();
    });
  $('#animation-for-year1993').hover(
    function () {
      $('#year-block-open1993').fadeIn();
    },
    function () {
      $('#year-block-open1993').fadeOut();
    });
  $('#animation-for-year2000-14').hover(
    function () {
      $('#year-block-open2000-14').fadeIn();
    },
    function () {
      $('#year-block-open2000-14').fadeOut();
    });
  $('#animation-for-year2011').hover(
    function () {
      $('#year-block-open2011').fadeIn();
    },
    function () {
      $('#year-block-open2011').fadeOut();
    });
  $('#animation-for-year2017').hover(
    function () {
      $('#year-block-open2017').fadeIn();
    },
    function () {
      $('#year-block-open2017').fadeOut();
    });
  $('#animation-for-year2020-21').hover(
    function () {
      $('#year-block-open2020-21').fadeIn();
    },
    function () {
      $('#year-block-open2011').fadeOut();
    });
});