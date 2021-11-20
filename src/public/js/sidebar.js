/*===== SHOW NAVBAR  =====*/
const toggle = document.getElementById('header-toggle');
const nav = document.getElementById('nav-bar');
const container = document.getElementById('content-container');
const headerpd = document.getElementById('header');
toggle.addEventListener('click', () => {
    if (window.matchMedia("(max-width: 1024px)").matches
        && !window.matchMedia("(max-width: 744px)").matches) {
        nav.classList.toggle('sidebar-show');
        headerpd.classList.toggle('body-pd');
        
    }
    else if (window.matchMedia("(max-width: 744px)").matches) {
        nav.classList.toggle('sidebar-show');
        nav.classList.add('show_744');
        nav.classList.toggle('close_744');
        headerpd.classList.toggle('body-pd_744');
        headerpd.classList.toggle('body-pd');
        
        if (!container.classList.contains('content-active')) {
            container.classList.add('content-active');
        }
    }

    // Normal width
    else {
        
        nav.classList.toggle('sidebar-show');
        headerpd.classList.toggle('body-pd');
        container.classList.toggle('content-active');
    }
    var currSidebar = nav.classList.contains('sidebar-show') ? 'sidebar-show' : 'none';
    localStorage.setItem('collapseSidebar', currSidebar);
});

function responsive() {
    const width = $(window).width();
    const height = $(window).height();
    const lastSidebar = localStorage.getItem('collapseSidebar');
    /*****************************************************************
     * When width of window less than 1024px, change style of sidebar
     *****************************************************************/
    if (width >= 1024) {
        if (lastSidebar == 'sidebar-show') {
            nav.classList.add('sidebar-show');
            headerpd.classList.add('body-pd');
            container.classList.remove('content-active');
        }
        else if (lastSidebar == 'none') {
            nav.classList.remove('sidebar-show');
            headerpd.classList.remove('body-pd');
            container.classList.add('content-active');
        }
    }
    if (width < 1024) {
        nav.classList.remove('sidebar-show');
        headerpd.classList.remove('body-pd');

        if (!container.classList.contains('content-active')) {
            container.classList.add('content-active');
        }
    }

    if (width < 744) {
        nav.classList.add('close_744');
        if (nav.classList.contains('sidebar-show')) {
            nav.classList.remove('sidebar-show');
        }
        headerpd.classList.add('body-pd_744');
    }
    else if (width >= 744) {
        nav.classList.remove('close_744');
        headerpd.classList.remove('body-pd_744');
    }


    currSidebar = nav.classList.contains('sidebar-show') ? 'sidebar-show' : 'none';
    localStorage.setItem('collapseSidebar', currSidebar);
}
$(window).resize(function(){
    responsive();
});
$(document).ready(function() {
    responsive();

});
var sticky = $('.sticky');
var contentOffset;
var nav_height;

if (sticky.length) {

    if (sticky.data('offset')) {
        contentOffset = sticky.data('offset');
    }
    else {
        contentOffset = sticky.offset().top;
    }
    nav_height = sticky.height();
}

var scrollTop = $(window).scrollTop();
var window_height = $(window).height();
var doc_height = $(document).height();

$(window).bind('resize', function () {
    scrollTop = $(window).scrollTop();
    window_height = $(window).height();
    doc_height = $(document).height();
    navHeight();
});

$(window).bind('scroll', function () {
    stickyNav();
});

function navHeight() {
    sticky.css('max-height', window_height + 'px');
}

function stickyNav() {
    scrollTop = $(window).scrollTop();
    if (scrollTop > contentOffset) {
        sticky.addClass('fixed');
    }
    else {
        sticky.removeClass('fixed');
    }
};

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


