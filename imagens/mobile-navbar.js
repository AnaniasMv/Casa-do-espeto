class MobileNavbar{
    constructor (mobilemenu, navList, navLinks) {
        this.mobilemenu = document.querySelector (mobileMenu);
        this.navList  = document.querySelector (navList);
        this.navLinks  = document.querySelectorAll (navLinks);
        this.activeClass = "active";
    }

    addClickEvent () {
        this.mobilemenu.addEventListener ("click", () => console.log
         ("hey"));

    }

    init() {
        if (this.mobilemenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list a",
);
mobileNavbar.init ();