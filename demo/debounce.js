// debounce
function debounce(func, wait) {
    let timer = null;

    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(func, wait);
    }
}