let requireThemePresence = document.getElementsByClassName('requireThemePresence');
setInterval(()=>{
    requireThemePresence = document.getElementsByClassName('requireThemePresence');
    if (window.innerWidth<230){
        document.body.style.visibility="hidden"
    } else {
        document.body.style.visibility="visible"
    }
}, 100);

function updateColorScheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.setAttribute('data-color-scheme', 'dark');
        for (let i = 0; i < requireThemePresence.length; i++) {
            requireThemePresence[i].setAttribute('data-color-scheme', 'dark');
        }
        theme = 'dark';
    } else {
        document.body.setAttribute('data-color-scheme', 'light');
        for (let i = 0; i < requireThemePresence.length; i++) {
            requireThemePresence[i].setAttribute('data-color-scheme', 'light');
        }
        theme = 'light';
    }
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateColorScheme);
updateColorScheme();