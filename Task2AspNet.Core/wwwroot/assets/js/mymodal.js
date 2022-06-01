$(document).ready(function(){
    $("#mdlBtn").click(function(){
        console.log("clicked")
    $("#overlay2").show();
    return false;
})
    $("#overlayClose2").click(function(){
    $("#overlay2").hide(500);
    })
})