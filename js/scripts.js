console.log("Hello, World!");

console.log("Hello");


$("#num-19").on("click", function() {
    console.log("You clicked on the 19th day");
    $(this).append("<h2>World Toilet Day</h2>")
    $(this).css("background-image", "url(imgs/wtd.webp)")
    $(this).css("background-size", "cover")
    $(this).css("color", "white")
    $(this).unbind("click");
});

$("#num-20").on("dblclick", function()  {
    console.log("You double clicked on World Children's Day");
    $(this).addClass("wcd")
    $(this).append("<h2>World Children's Day</h2>")
    $(this).unbind("dblclick");

});


$("#num-21").addClass("tvd")
$("#num-21").append("<h2>World Television Day</h2>")
$("#num-21").css("background-image", "url(imgs/tv.jpeg)")
$("#num-21").css("background-size", "cover")

$("#num-25").append("<h2>International Day for the Elimination of Violence against Women</h2>")
$("#num-25").css("background-image","url(imgs/no-excuse.png)")
$("#num-25").append("<a href='https://www.un.org/en/observances/ending-violence-against-women-day'> Learn More </a>")

$(".hide-days").on ("click", function()  {
    console.log("you clicked on the title");
    $("#num-22, #num-23, #num-24").fadeToggle()
})

$(document).on("keypress", function(e)  {
    console.log("you pressed" + e.key);
    if (e.key == "a")  {
        $("#num-21").append("<h2>World Television Day</h2>")
    }
   

})