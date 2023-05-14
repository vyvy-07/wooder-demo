// 1 bài header đổi màu OK
function changeBgr() {
    let header = document.querySelector(".header");
    let heightSlider = document.querySelector(".slider");
    window.addEventListener("scroll", function() {

        if (window.pageYOffset >= heightSlider.offsetHeight) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        };
    })
}
changeBgr()
    // 2 btn langue OK
function nextLanguage() {
    let btnLang = document.querySelector(".language");
    let textSpan = document.querySelector(".language__text span");
    let textTemp = document.querySelectorAll(".language__dropdown-item");
    btnLang.addEventListener("click", function(e) {
        e.stopPropagation();
        e.preventDefault();
        btnLang.classList.toggle("active");
    })
    textTemp.forEach(function(item) {
        item.addEventListener("click", function(a) {
            let changeTemp = item.textContent;
            let changeSpan = textSpan.textContent;
            textSpan.innerHTML = changeTemp;
            item.innerHTML = changeSpan;
        });
    });

    document.addEventListener("click", function(e) {
        btnLang.classList.remove("active");
    })
}
nextLanguage();

// 3 bài thêm nút scroll to top OK
function scrollToTop() {
    let btnTop = document.querySelector(".ontop");
    let slider = document.querySelector(".slider");
    let footer = document.querySelector(".footer")

    window.addEventListener("scroll", function() {
        // let heightBody = this.document
        if (window.pageYOffset >= slider.offsetHeight) {
            btnTop.classList.add("backtotop");
            console.log("?")
        } else
            btnTop.classList.remove("backtotop");

    })
    btnTop.addEventListener("click", function() {
        window.scrollTo({
            'top': 100,
            'bottom': 0,
            'behavior': 'smooth'
        })

    })

}
scrollToTop()
    // 4 Scroll tới section
function scrollToSection() {
    let menuItem = document.querySelectorAll(".header .header__nav .header__nav-item a");
    let heightHeader = document.querySelector(".header").offsetHeight;
    let arraySection = [];

    menuItem.forEach(function(item, index) {
        let href = item.getAttribute("href").replace("#", '');
        let classSection = document.querySelector("." + href);
        arraySection.push(classSection);
        item.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                'top': classSection.offsetTop - heightHeader + 1,
                'behavior': 'smooth'
            })
            menuItem.forEach(function(itemActive) {
                itemActive.classList.remove("active");
            })
            item.classList.add("active");
        })
        window.addEventListener("scroll", function() {
            let windowScroll = window.scrollY;
            arraySection.forEach(function(itemSc, indexSc) {
                if (windowScroll > itemSc.offsetTop - heightHeader && windowScroll < itemSc.offsetTop + itemSc.offsetHeight) {
                    menuItem.forEach(function(itemActive) {
                        itemActive.classList.remove("active");
                    })
                    menuItem[indexSc].classList.add("active");
                } else {
                    menuItem[indexSc].classList.remove("active");
                }
            })
        })

    })
}
scrollToSection();

function accorShow() {
    let question = document.querySelectorAll(".accordion__list-item .title");
    let panel = document.querySelectorAll(".accordion__list-item .panel");
    question.forEach(function(item, index) {
        item.addEventListener("click", function() {
            panel.forEach(function(itemPanel, indexPanel) {
                if (panel[index].style.maxHeight) return
                itemPanel.style.maxHeight = null;
            })
            let panelNew = item.nextElementSibling;
            if (panelNew.style.maxHeight) {
                panelNew.style.maxHeight = null;
            } else {
                panelNew.style.maxHeight = panelNew.scrollHeight + "px";
            }
        })

    })
}
accorShow()

// 5 scquality 
function scQuality() {
    let thumb = document.querySelectorAll(".scquality__video-item .thumb");
    let popup = document.querySelector(".popupvideo");
    let iframePopUp = document.querySelector(".popupvideo__inner-iframe iframe");
    let closeBtn = document.querySelector(".popupvideo__inner-close img");

    thumb.forEach(function(item) {
        item.addEventListener("click", function(e) {
            e.stopPropagation()
            popup.classList.add("active");


            iframePopUp.setAttribute("src", `https://www.youtube.com/embed/${item.getAttribute("data-video-src")}?autoplay=0`);

        })
        closeBtn.addEventListener("click", function() {
            popup.classList.remove("active");
            iframePopUp.setAttribute("src", '');

        })
        window.addEventListener("click", function() {
            popup.classList.remove("active");
            iframePopUp.setAttribute("src", '');

        })
    })
}
scQuality()

// 6 Tabs news
function tabNews() {
    let btnNewsItem = document.querySelectorAll(".scnews__btn-item");
    let listNews = document.querySelectorAll(".scnews__list");
    btnNewsItem.forEach(function(item) {

        item.addEventListener("click", function() {
            btnNewsItem.forEach(function(itemm) {
                itemm.classList.remove("active");
            })
            item.classList.add("active");
            listNews.forEach(function(items) {
                items.classList.remove("active");

            })
            let dataIDNews = item.getAttribute("data-tab")
            document.querySelector(".list-" + dataIDNews).classList.add("active")
        })
    })
}
tabNews()

// click vào menu màn hình nhỏ
// bai 7

function menuSmall() {
    let menuBtn = document.querySelector(".header__right .btnmenu")
    let listMenu = document.querySelector(".header .menu")
    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("active")
        listMenu.classList.toggle("active")
    })

    window.addEventListener("resize", function(e) {
        e.stopPropagation()
        if (window.pageXOffset > 992) {
            menuBtn.classList.remove("active")
            listMenu.classList.remove("active")
        } else {
            menuBtn.classList.remove("active")
            listMenu.classList.remove("active")
        }
    })


}
menuSmall()


//scroll bar

function scrollBar() {
    let scrollBar = document.querySelector(".scrollBar");
    window.addEventListener("scroll", function() {
        let scrollW = window.scrollY;
        let percent = scrollW / (document.body.offsetHeight - window.innerHeight) * 100;
        scrollBar.style.width = `${percent}%`;
    })
}

scrollBar()

// album from Flickity

function albumFlickity() {
    let slider = document.querySelector('.album-img');
    let item = document.querySelector(".album_item");

    let flktySlider = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        // draggable:1,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: true,
        freeScroll: true,
        imgLoaded: true,
        lazyLoad: 3,
        // fade: true,
    });

    // slider = new Flickity('.album-img', {
    //     fade: true,
    // });
    let progressBar = document.querySelector('.progress-bar-album');
    flktySlider.on('scroll', function(progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + '%';
    });
    let paging = document.querySelector(".slider__bottom-paging")
        // let dots = document.querySelector(".")

}
// SLIDER WITH FLICKITY
function changeSlider() {
    let slider = document.querySelector('.slider__list');
    let btnPre = document.querySelector(".slider__bottom-control .pre");
    let btnNext = document.querySelector(".slider__bottom-control .next");

    let flktySlider = new Flickity(slider, {
        // options
        cellAlign: 'left',
        contain: true,
        // draggable:1,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: true,
        // fade: true,


        on: {

            ready: function() {
                console.log('Flickity is ready');
                handleDot();

            },
            change: function(index) {
                handlePagingNumber(index);
            }
        }
    });
    btnPre.addEventListener("click", function() {
        flktySlider.previous(true);
    });
    btnNext.addEventListener("click", function() {
        flktySlider.next(true);
    });

    function handleDot() {
        let dotList = document.querySelector(".flickity-page-dots");
        let dotItem = document.querySelectorAll(".dot");
        let parents = document.querySelector(".slider__bottom-paging");
        parents.appendChild(dotList);
    }

    function handlePagingNumber(index) {
        let changeNum = document.querySelector(".slider__bottom-paging .text");
        changeNum.innerHTML = (index + 1).toString().padStart(2, "0");
    }
    handlePagingNumber(0);
}

window.addEventListener("load", function() {

    console.log('loaded');
    scrollBar();
    changeSlider();
    albumFlickity();
    scgallery();


})

function loading() {
    let bgLoad = document.querySelector(".load")
    window.addEventListener("load", function(e) {
        e.stopPropagation()
        bgLoad.classList.remove("active");
    })
    bgLoad.classList.add("active");
    // document.querySelector(".language").style.display = "block";
    // document.querySelector(".popupvideo").style.display = "flex";


}
loading()
    //fancybox
function scgallery() {
    Fancybox.bind('[data-fancybox]', {

        Infinity: true,
        playOnStart: true,
        commonCaption: true,
        keyboard: {
            Escape: "close",
            Delete: "close",
            Backspace: "close",
            // PageUp: "next",
            // PageDown: "prev",
            ArrowUp: "next",
            ArrowDown: "prev",
            ArrowRight: "next",
            ArrowLeft: "prev",
        },
        on: {
            ready: function() {

            },
        },
    });
}