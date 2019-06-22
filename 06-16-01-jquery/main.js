// $(document).ready(function(){
//      $(".block").css('background-color', 'blue');
$(".block").toggleClass("red");

$('.block').click(function () {
    let $this = $(this);
    $this.toggleClass("green");
});

$('body').on('click', '#block', function () {
    alert('рфшёл');
});

$("#block").on('click',  function () {
    alert('рфшёл2');
});

$('body').append('<div id="block"> block </div>');

$(".block2").text('<div>hello</div>');

$(".block3").wrap('<div class="d3"><span></span></div>');

$(".block").unbind('click');

console.log($("img.pretty").attr("src"));

$("img.pretty").attr("src", "details1.png");

// $(".sqr").fadeOut(3000);
// $(".sqr").fadeIn(1000);
// });

// let jq = jQuery.noConflict();
// $(document).ready(function(){
//
// };