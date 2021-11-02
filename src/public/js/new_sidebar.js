/*===== SHOW NAVBAR  =====*/
const toggle = document.getElementById('header-toggle');
const nav = document.getElementById('nav-bar');
const container = document.getElementById('content-container');
const headerpd = document.getElementById('header');
toggle.addEventListener('click', () => {

    nav.classList.toggle('show');
    headerpd.classList.toggle('body-pd');
    // console.log(container);
    container.classList.toggle('content-active');

    var currSidebar = nav.classList.contains('show') ? 'show' : 'none';
    localStorage.setItem('collapseSidebar', currSidebar);
});
$(document).ready(function () {
    const lastSidebar = localStorage.getItem('collapseSidebar');
    if (lastSidebar == 'none') {
        nav.classList.toggle('show');
        headerpd.classList.toggle('body-pd');
        // console.log(container);
        container.classList.toggle('content-active');
    }
});
/**************************
* GET SIDE-BAR LINK ACTIVE 
****************************/
$(document).ready(function () {
    $("#nav-bar .nav .nav__list .nav__link").on("click", function (e) {
        e.preventDefault();
        var currTab = $(this).data("tab");
        localStorage.setItem("currentTab", currTab);
        location.href = $(this).attr('href');

    });

    var lastSelectedTab = localStorage.getItem("currentTab");
    if (lastSelectedTab) {
        const linkColor = document.querySelectorAll('.nav__link');
        const index = parseInt(lastSelectedTab.split('tab')[1]);

        linkColor[index].classList.add('sidebar-link-active');
    }
})

/*===== LINK ACTIVE  =====*/
// $('.nav__list .nav__link').click(function(e) {
//     e.preventDefault();
//     console.log(this);

//     const linkColor = document.querySelectorAll('.nav__link');
//     linkColor.forEach(l => l.classList.remove('sidebar-link-active'));

//     this.classList.add('sidebar-link-active');
//     // localStorage.setItem('activeLink', 'Hello');
// });
    // const linkColor = document.querySelectorAll('.nav__link');
    // function colorLink() {
    //     if (linkColor) {
    //         linkColor.forEach(l => l.classList.remove('sidebar-link-active'));
    //         this.classList.add('sidebar-link-active');
    //         localStorage.activeLink = "Hello";
    //     }
    // }
    // linkColor.forEach(l => l.addEventListener('click', colorLink));



// const linkColor = document.querySelectorAll('.nav__link');
// function colorLink() {
//     if (linkColor) {
//         linkColor.forEach(l => l.classList.remove('sidebar-link-active'));
//         this.classList.add('sidebar-link-active');
//     }
// }
// linkColor.forEach(l => l.addEventListener('click', colorLink));

