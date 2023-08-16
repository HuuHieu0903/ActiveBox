const dropdownMenu = document.getElementsByClassName("dropdown-menu")[0]
const menu = document.getElementsByClassName("header-menu")[0]

dropdownMenu.onclick = ()=> {
    if(menu.classList.contains("menu-is-open")) {
        menu.classList.remove("menu-is-open")
    } else {
        menu.classList.add("menu-is-open")
    }
}