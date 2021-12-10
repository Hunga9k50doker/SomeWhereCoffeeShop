const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const btn = $('.banner button');
const theme = $('.back__ground');
const app = $('.app');
const banner = $('.banner');
const content = $('.content');
const slidebar = $(".side__bar");
const menu = $('.menu__bar')
const sidebarMd = $(".side__bar__md");
// console.log(btn);


let isChange = true;
function handleChange() {
    
    btn.addEventListener('click', () => {
        theme.classList.toggle('active')
        app.classList.toggle("active");
        banner.classList.toggle("active");
        slidebar.classList.toggle("active");
        content.classList.toggle("active");

    })

    // on tablet
    menu.addEventListener('click', () => {
        slidebar.classList.toggle("active");

    })
        

}



handleChange();