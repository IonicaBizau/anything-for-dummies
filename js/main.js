(function () {
    function loadText() {
        var urlForDummies = document.querySelector("#url-for-dummies")
          , titleConf = document.querySelector("#title-conf")
          , title = Url.queryString("title") || "Anything"
          , src = Url.queryString("link") || "#"
          ;

        titleConf.textContent = title;
        urlForDummies.href = src;
    }

    window.addEventListener("load", loadText);
    window.addEventListener("hashchange", loadText);
})();
