$(document).ready(function(){
  $("#btn_1").on("click", function(){
    $("p").hide('slow', function(){
      alert("잘 사라짐")
      $("p").show('slow')
    })    
  })

  $("#btn_2").on("click", function(){
    $(".chain")
      .css("color", "red")
      .slideUp(1000)
      .slideDown(1000)
  })
})