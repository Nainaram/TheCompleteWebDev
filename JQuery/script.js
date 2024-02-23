// $("h1").addClass("big-heading");
// $("button").html("<em>hello</em>");
// $("h1").click(function(){
// $("h1").css("color","red");
// });
// for(var i=0; i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function (){
//         document.querySelector("h1").style.color ="purple"
    
//     });
// }
// $("button").click(function(){
//     $("h1").css("color","purple");
// });
// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })
// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// });
// $("button").prepend("<button>hibro</button>");
 $("button").on("click",function(){
    $("h1").animate({opacity:0.5});
});