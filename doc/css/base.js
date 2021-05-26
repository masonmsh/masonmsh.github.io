function changebase() {
    burl = document.getElementById("burl");
    logo = document.getElementById("logo");
    if (burl.href.match("https")) {
        logo.src = "source/logo.jpg";
        burl.href = "file:///D:/code/git/masonmsh.github.io/";
    } else {
        logo.src = "favicon.ico";
        burl.href = "https://masonmsh.github.io/";
    }
}