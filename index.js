document.addEventListener('DOMContentLoaded', function () {
    var typingText = document.getElementById('typing-text');
    var fullText = "Lana 17 years-old, a Future Engineer and Web Developer!!";
    var i = 0; function typeWriter() {
        if (i < fullText.length) {
            typingText.innerHTML += fullText.charAt(i); i++;
            setTimeout(typeWriter, 30);
        }
    }
    if (typingText) {
        typeWriter();

    }
    var navToggleBtns = document.querySelectorAll('.nav-toggle');
    var navs = document.querySelectorAll('.main-nav');
    for (var t = 0; t < navToggleBtns.length; t++) {
        navToggleBtns[t].addEventListener('click', function () {
            for (var n = 0; n < navs.length; n++) {
                navs[n].classList.toggle('show');
            }
        });
    }
    var navLinks = document.querySelectorAll('.main-nav a');
    for (var k = 0; k < navLinks.length; k++) {
        navLinks[k].addEventListener('click', function () {
            for (var h = 0; h < navs.length; h++) {
                navs[h].classList.remove('show');
            }
        });
    }
    var sections = document.querySelectorAll('.section-animate');
    function revealSections() {
        for (var s = 0; s < sections.length; s++) {
            var top = sections[s].getBoundingClientRect().top;
            if (top < window.innerHeight - 100) { sections[s].style.opacity = "1"; sections[s].style.transform = "translateY(0)"; }
        }
    }
    
    window.addEventListener('load', function() {
     const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout( function(){preloader.style.display = 'none', 500} );
  });
    

    window.addEventListener('scroll', revealSections);
    revealSections();
    var topBtn = document.createElement('button');
    topBtn.id = "backToTop";
    topBtn.innerHTML = "↑";
    topBtn.style.position = "fixed";
    topBtn.style.right = "18px";
    topBtn.style.bottom = "18px";
    topBtn.style.padding = "10px 12px";
    topBtn.style.borderRadius = "8px";
    topBtn.style.border = "none";
    topBtn.style.display = "none";
    topBtn.style.cursor = "pointer";
    topBtn.style.background = "linear-gradient(90deg,#a78bfa,#7c3aed)";
    topBtn.style.color = "#fff";
    topBtn.style.zIndex = "1000";
    document.body.appendChild(topBtn);
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        }
        else { topBtn.style.display = "none"; }
    });
    topBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    var skillBars = document.querySelectorAll('.skill-bar div');
    function fillSkills() {
        for (var sb = 0; sb < skillBars.length; sb++) {
            var barPos = skillBars[sb].getBoundingClientRect().top;
            if (barPos < window.innerHeight - 50) {
                var val = skillBars[sb].getAttribute('data-progress');
                skillBars[sb].style.width = val + "%";
            }
        }
    }
    window.addEventListener('scroll', fillSkills);
    fillSkills();
    var filterBtns = document.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.project-card');
    for (var fb = 0; fb < filterBtns.length; fb++) {
        filterBtns[fb].addEventListener('click', function () {
            for (var x = 0; x < filterBtns.length; x++) {
                filterBtns[x].classList.remove('active');
            }
            this.classList.add('active');
            var filter = this.getAttribute('data-filter');
            for (var c = 0; c < cards.length; c++) {
                if (filter === "all" || cards[c].dataset.type === filter) {
                    cards[c].style.display = "";
                }

                else { cards[c].style.display = "none"; }
            }
        });
    }
    var prev = document.getElementById('certPrev');
    var next = document.getElementById('certNext');
    var track = document.querySelector('.cert-track');
    if (prev && next && track) {
        var pos = 0; var items = document.querySelectorAll('.cert-item');
        var itemWidth = items.length > 0 ? items[0].clientWidth + 12 : 320;
        prev.addEventListener('click', function () {
            if (pos > 0) pos--;
            track.style.transform = "translateX(" + (-pos * itemWidth) + "px)";
        });
        next.addEventListener('click', function () {
            if (pos < items.length - 1) pos++;
            track.style.transform = "translateX(" + (-pos * itemWidth) + "px)";
        });
    }
    var links = document.querySelectorAll('a[href^="#"]');
    for (var l = 0; l < links.length; l++) {
        links[l].addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});


