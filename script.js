const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');

}
btnMobile.addEventListener('click', toggleMenu);

/* GetButton.io widget */
(function () {
    var options = {
        whatsapp: "+55(16) 99371-7607", // WhatsApp number
        call_to_action: "Faça seu pedido pelo WhatsApp", // Call to action
        position: "left", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
/*GetButton.io widget*/


