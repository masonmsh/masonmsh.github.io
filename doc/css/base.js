function changebase() {
    burl = document.getElementById("burl");
    logo = document.getElementById("logo");
    if (burl.href.match("https")) {
        burl.href = "file:///D:/code/git/masonmsh.github.io/";
        logo.src = "source/logo.jpg";
    } else {
        burl.href = "https://masonmsh.github.io/";
        logo.src = "favicon.ico";
    }
}