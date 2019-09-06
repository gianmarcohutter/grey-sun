let isGreyscale = true;

function toggle_greyscale() {
    if (!(isGreyscale)) {
        browser.tabs.executeScript({
          file: "grey_sun.js"
        });
        isGreyscale = true;
    }
    else {
        browser.tabs.executeScript({
            file: "un_grey_sun.js"
        })
        isGreyscale = false;
    }
}

browser.browserAction.onClicked.addListener(toggle_greyscale);
