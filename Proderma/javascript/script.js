$( document ).ready(function() {
  $('.responsive').slick({
  infinite: false,
  autoplay:false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  $('.slick').slick({
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true
  });
  
  $('.testimonial-slider').slick({
  infinite: false,
  autoplay:false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});

$( document ).ready(function() {
  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener("click", function(e) {
      e.preventDefault();
      if (this.classList.contains("is-active") === true) {
        this.classList.remove("is-active");
        $('.open').removeClass('oppenned');
      } else {
        this.classList.add("is-active");
        $(".open").addClass('oppenned');
      }
    });
  }
  });

  $(".sub-menu li a").click(function(event) {
  $(".open").removeClass('oppenned');
  $(".c-hamburger").removeClass('is-active');
});

$(document).ready(function(){
    $(".menu").hide();
    $(".fa-bars").click(function(){
      $(".menu").slideToggle();
    });
});

$(document).ready(function(){

  // Toggle the blurred class
  function bodyblur(){
    var trigger = $('#trigger, #close'),
    menu = $('.bodyblur');

    trigger.on('click',function(){
     $(this).toggleClass('active');
     menu.toggleClass('closed');
     $('#blurrMe').toggleClass('blurred'); // just here
    });
  }

  function deploy(){
    bodyblur();
  }

  deploy();
});

$(document).ready(function(){
  $('select').on('change', function (e) {
    var val = $(this).val();
    if(val == 'all'){
      $('.item').removeClass('hide');
    } else {
      $('.item').removeClass('hide').filter( ':not([data-category*="' + val + '"])' ).addClass( 'hide');
    }
  });
  // For button fields
  $('button').click(function(){
    // Get the category from the selection
    var category = $(this).attr('data-category');
    // Remove active class
    $('button').removeClass('active');
    // Add active class to clicked item
    $(this).addClass('active');
    
    // Filter the items
    $('.item').removeClass('hide').filter( '[data-category*="' + category + '"]' ).addClass( 'hide');
  });
});

$(document).ready(function(){
  (function($) {
  var pagify = {
    items: {},
    container: null,
    totalPages: 1,
    perPage: 3,
    currentPage: 0,
    createNavigation: function() {
      this.totalPages = Math.ceil(this.items.length / this.perPage);

      $('.pagination', this.container.parent()).remove();
      var pagination = $('<div class="pagination"></div>').append('<a class="nav prev disabled" data-next="false"><</a>');

      for (var i = 0; i < this.totalPages; i++) {
        var pageElClass = "page";
        if (!i)
          pageElClass = "page current";
        var pageEl = '<a class="' + pageElClass + '" data-page="' + (
        i + 1) + '">' + (
        i + 1) + "</a>";
        pagination.append(pageEl);
      }
      pagination.append('<a class="nav next" data-next="true">></a>');

      this.container.after(pagination);

      var that = this;
      $("body").off("click", ".nav");
      this.navigator = $("body").on("click", ".nav", function() {
        var el = $(this);
        that.navigate(el.data("next"));
      });

      $("body").off("click", ".page");
      this.pageNavigator = $("body").on("click", ".page", function() {
        var el = $(this);
        that.goToPage(el.data("page"));
      });
    },
    navigate: function(next) {
      // default perPage to 5
      if (isNaN(next) || next === undefined) {
        next = true;
      }
      $(".pagination .nav").removeClass("disabled");
      if (next) {
        this.currentPage++;
        if (this.currentPage > (this.totalPages - 1))
          this.currentPage = (this.totalPages - 1);
        if (this.currentPage == (this.totalPages - 1))
          $(".pagination .nav.next").addClass("disabled");
        }
      else {
        this.currentPage--;
        if (this.currentPage < 0)
          this.currentPage = 0;
        if (this.currentPage == 0)
          $(".pagination .nav.prev").addClass("disabled");
        }

      this.showItems();
    },
    updateNavigation: function() {

      var pages = $(".pagination .page");
      pages.removeClass("current");
      $('.pagination .page[data-page="' + (
      this.currentPage + 1) + '"]').addClass("current");
    },
    goToPage: function(page) {

      this.currentPage = page - 1;

      $(".pagination .nav").removeClass("disabled");
      if (this.currentPage == (this.totalPages - 1))
        $(".pagination .nav.next").addClass("disabled");

      if (this.currentPage == 0)
        $(".pagination .nav.prev").addClass("disabled");
      this.showItems();
    },
    showItems: function() {
      this.items.hide();
      var base = this.perPage * this.currentPage;
      this.items.slice(base, base + this.perPage).show();

      this.updateNavigation();
    },
    init: function(container, items, perPage) {
      this.container = container;
      this.currentPage = 0;
      this.totalPages = 1;
      this.perPage = perPage;
      this.items = items;
      this.createNavigation();
      this.showItems();
    }
  };

  // stuff it all into a jQuery method!
  $.fn.pagify = function(perPage, itemSelector) {
    var el = $(this);
    var items = $(itemSelector, el);

    // default perPage to 5
    if (isNaN(perPage) || perPage === undefined) {
      perPage = 3;
    }

    // don't fire if fewer items than perPage
    if (items.length <= perPage) {
      return true;
    }

    pagify.init(el, items, perPage);
  };
  })(jQuery);

  $(".containerr").pagify(12, ".single-item");
});

$(document).ready(function(){
   $(".mini img").click(function(){  

   $(".maxi").attr("src",$(this).attr("src").replace("100x100","400x400"));
  });

  var $filterCheckboxes = $('input[type="checkbox"]');
  var filterFunc = function() {
    
    var selectedFilters = {};

    $filterCheckboxes.filter(':checked').each(function() {

      if (!selectedFilters.hasOwnProperty(this.name)) {
        selectedFilters[this.name] = [];
      }

      selectedFilters[this.name].push(this.value);
    });

    // create a collection containing all of the filterable elements
    var $filteredResults = $('.product-item');

    // loop over the selected filter name -> (array) values pairs
    $.each(selectedFilters, function(name, filterValues) {

      // filter each .animal element
      $filteredResults = $filteredResults.filter(function() {

        var matched = false,
          currentFilterValues = $(this).data('category').split(' ');

        // loop over each category value in the current .animal's data-category
        $.each(currentFilterValues, function(_, currentFilterValue) {

          // if the current category exists in the selected filters array
          // set matched to true, and stop looping. as we're ORing in each
          // set of filters, we only need to match once

          if ($.inArray(currentFilterValue, filterValues) != -1) {
            matched = true;
            return false;
          }
        });

        // if matched is true the current .animal element is returned
        return matched;

      });
    });

    $('.product-item').hide().filter($filteredResults).show();
  }

  $filterCheckboxes.on('change', filterFunc);  
});

$(document).ready(function(){
  $('.sidebar-nav-right,.slide-fade,.sliding-panel-close').on('click touchstart',function (e) {
    $('.slide-content,.slide-fade').toggleClass('is-visible');
    $('#wrapper').toggleClass('is-obscured');
    e.preventDefault();
  });
});

$(document).ready(function(){
  // Increment value in quantity input
  $('.qty-plus').each(function(index) {
    $(this).click(function(e) {
      e.preventDefault();
      var current = $(this).siblings("input.quantity").val();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal)) {
        $(this).siblings("input.quantity").val(currentVal + 1);
      } else {
        $(this).siblings("input.quantity").val(1);
        console.log("Failed!")
      }
    });
  });
  // Decrement value in quantity input
  $(".qty-minus").each(function(index) {
    $(this).click(function(e) {
      e.preventDefault();
      var currentVal = parseInt($(this).siblings("input.quantity").val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $(this).siblings("input.quantity").val(currentVal - 1);
      } else {
        $(this).siblings("input.quantity").val(1);
      }
    });
  });
});
$(document).ready(function(){
 jQuery('input[name="main_category"]').change(function(){
 var counter = 0;
 jQuery('input[name="main_category"]').each(function(){
 if(jQuery(this).is(":checked")){
  jQuery('li[data-cat="'+jQuery(this).attr('data-group')+'"]').css({"display": "block"});
  counter = 0 ;
 }
 else{
  jQuery('li[data-cat="'+jQuery(this).attr('data-group')+'"]').css({"display": "none"});
  if(jQuery('input[name="main_category"]').is(":checked")){
    jQuery('li[data-cat="'+jQuery(this).attr('data-group')+'"]').children().prop('checked',false);
  }

  counter = counter + 1;
 }
 })
 if(counter  == jQuery('input[name="main_category"]').length){
 /*alert(counter);*/
 jQuery('li[data-cat="'+jQuery(this).attr('data-group')+'"]').children().prop('checked',false);
 jQuery('.groupselection').css('display','block');
 }
 else{
 jQuery('li[data-cat="'+jQuery(this).attr('data-group')+'"]').children().prop('checked',false);
 }
 
 })
});