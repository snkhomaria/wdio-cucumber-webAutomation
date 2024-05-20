class Page {
    open(path){
        return browser.url(path);
    }
}

module.exports = new Page();

// export default class Page {
//     /**
//     * Opens a sub page of the page
//     * @param path path of the sub page (e.g. /path/to/page.html)
//     */
//     open () {
//         return browser.url(`https://kasirdemo.belajarqa.com/login`)
//     }
// }