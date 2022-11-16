(function() {
    function checkNav() {
        console.log("nav debug");
        console.log(window.location.href);
        for (let i of document.querySelectorAll("nav ul li a")) {
            if (i.href == window.location.href) {
                i.parentElement.setAttribute('class', 'currentPage')
            }
        }
    }
    checkNav();
}) ();