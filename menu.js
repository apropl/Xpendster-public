/* Shared: hamburger menu toggle + footer year. Loaded on every page. */
(function () {
    var btn = document.querySelector('.menu-btn');
    var menu = document.getElementById('menu');
    if (btn && menu) {
        function setOpen(open) {
            menu.classList.toggle('open', open);
            btn.classList.toggle('open', open);
            btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            setOpen(!menu.classList.contains('open'));
        });
        document.addEventListener('click', function (e) {
            if (!menu.contains(e.target) && !btn.contains(e.target)) setOpen(false);
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') setOpen(false);
        });
        menu.addEventListener('click', function (e) {
            if (e.target.tagName === 'A') setOpen(false);
        });
    }
    var yr = document.getElementById('yr');
    if (yr) yr.textContent = new Date().getFullYear();
})();
