// COPY PERSONAL INFO
function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}
// SWTICH DARK MODE BUTTON
const switchButton = document.getElementById('switch');
const body = document.querySelector('body');

switchButton.addEventListener('click',()=>{
    body.classList.toggle('darkmode');
    switchButton.classList.toggle('active');
});

// // BACK TO TOP ON RELOAD PAGE
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});