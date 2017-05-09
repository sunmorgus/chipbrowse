const webview = document.querySelector('webview')

webview.addEventListener('dom-ready', () => {
    // webview.openDevTools();

    document.getElementById("url").value = webview.getURL();

    document.getElementById("go").onclick = function (event, args) {
        var url = document.getElementById("url").value;

        webview.loadURL(url);
    };
});