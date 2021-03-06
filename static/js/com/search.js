var $ = require('jquery');

$(document).ready(function () {
  var $searchButton = $('.search-button'),
    $searchElement = $('.global-search'),
    $searchBox = $('search-box'),
    $searchFormInput,
    $extraNav = $('.extra-nav'),
    $searchFormSubmitButton;


  var onCSELoaded = function () {
    $searchFormInput = $('input.gsc-input');
    $searchFormSubmitButton = $('input.gsc-search-button');
  };

  window.__gcse = {
    callback: onCSELoaded
  };

  //load google cse
  var cx = '018084382115409233624:bfw4z1awiw0';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  gcse.async = false;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);


  $searchButton.on('click touch', function (e) {
    e.stopPropagation();
    //var $searchFormInput = $('input.gsc-input'),
    //    $searchFormSubmitButton = $('input.gsc-search-button');

    if ($searchElement.hasClass('_expanded') && $searchFormInput.val() != '') {
      $searchFormSubmitButton.click()
    } else {
      if (!$searchElement.hasClass('_expanded')) {
        setTimeout(function () {
          $searchFormInput.focus();
        }, 10);
      } else {
        $searchBox.blur()
      }
      $extraNav.toggleClass('hidden');
      $searchElement.toggleClass('_expanded');
    }
  });

  $(document).on('click touch', function (e) {
    //var $searchFormInput = $('input.gsc-input');
    if ($searchElement.hasClass('_expanded') && e.target != $searchFormInput[0] && $searchFormInput.val() == '') {
      $searchElement.removeClass('_expanded');
      $extraNav.removeClass('hidden')
    }
  });
});