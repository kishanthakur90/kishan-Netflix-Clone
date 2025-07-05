// 
// faq
$(document).ready(function(){
  $(".basic").click(function () {
    let target = $(this).data("target");

    // Close all answers
    $(".faq-answer").not(target).slideUp();

    // Toggle current answer
    $(target).slideToggle();
  });
});
