const sidebar = document.getElementById("sidebar");
const btn = document.getElementById("sidebarToggle");

if ( localStorage.getItem("sidebar") === "collapsed" ) {
    sidebar.classList.add("collapsed");
}

btn.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
});