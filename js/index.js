(function() {
    if (window.location.pathname == "/") {
        window.location.replace("/index.html"); 
    }
    document.getElementById("myHeading").innerHTML = "Isaac Sutherland";
    // Colour selection handler
    for(let item of document.getElementsByClassName('colPicker')) {
        console.log(item);
        if (item.tagName = 'span') {
            item.addEventListener('click', () => document.body.setAttribute('class', `${item.classList[0]}Back`));
        }
    }
    let count = 0;
    let imageArray = ['images/view1.jpg', 'images/view2.jpg', 'images/view3.jpg', 'images/view4.jpg', 'images/view5.jpg', 'images/view6.jpg'];
    document.getElementById('myImages').setAttribute('src', imageArray[count]); 

    setInterval(increaseImg, 4000);
    document.getElementById('myImages').addEventListener("click", increaseImg);

    function increaseImg() {
        console.log(count);
        document.getElementById('myImages').setAttribute('src', imageArray[count]);
        if (count < imageArray.length-1) {
            count++;
        } else {
            count = 0;
        }
    }   
}) ();