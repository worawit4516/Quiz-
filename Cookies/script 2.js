function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        console.log(date.toUTCString());
    }
    document.cookie = name + "=" + (value || "") + expires + `; path=/`;
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return ca;
}

function eraseCookie(name) {
    document.cookie = name + '=; Path=/; expires=Thu, 01 Jan 2000 00:00:01 GMT;';
}

function deleteAllCookies(path) {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + `=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${path}`;
    }
}
let date = new Date('14 Jun 2021 00:00:00 GMT');
setCookie(`Test`, `Kuy`, 1);

let colorset = document.getElementsByClassName("grid-container");
let ColorArrey = Array.from(colorset);

for (let i = 0; i < ColorArrey.length; i++) {
    ColorArrey[i].addEventListener("click", addcolor)
}

function addcolor(event) {
    document.body.style.backgroundColor = event.target.innerHTML;
    setCookie(`color`, event.target.innerHTML, 5)
}

window.addEventListener("load", () => {
    document.body.style.backgroundColor = getCookie('color');
});

//eraseCookie("color");
//deleteAllCookies("15_Exercise")