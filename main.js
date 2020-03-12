// $(document).ready(function() {
//     $("button").click(function() {
//         $(".spinning-box").css("animation-play-state", "paused");
//     });
//     $("button").click(function() {
//         $(".spinning-box").css("animation-play-state", "running");
//     });
// });

// $(document).ready(function() {
//     $("button").click(function() {
//         $(".spinning-box").toggle(".paused");
//     });
// });

$(document).ready(function() {
    $("button").click(function() {
        $(".spinning-box").toggleClass("paused");
    });
});