class Page {
    open (path) {
        return browser.url(path);
    }
}

module.exports = new Page();

// export default class Page {

//     open(path) {
//         return browser.url(path);
//     }
// }
