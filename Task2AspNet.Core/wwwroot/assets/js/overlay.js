$(document).ready(function(){
    $("#search-btn").click(function(){
    $("#overlay").show();
    return false;
})
    $("#overlayClose").click(function(){
    $("#overlay").hide(500);
    })
})