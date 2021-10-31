var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "300px";

function togglenav() {
    if (menuList.style.maxHeight == "300px") {
        menuList.style.maxHeight = "0px"
    } else {
        menuList.style.maxHeight = "300px";
    }
}