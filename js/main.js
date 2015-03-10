(function () {
    function loadText() {
        var urlForDummies = document.querySelector("#url-for-dummies")
          , titleConf = document.querySelector("#title-conf")
          , title = Url.queryString("title") || "Anything"
          , src = Url.queryString("link") || "#"
          ;

        document.title = (titleConf.textContent = decodeURIComponent(title)) + " for Dummies"
        urlForDummies.href = decodeURIComponent(src);
    }

    function updateShareLinks() {
        var link = Url.getLocation();
        document.querySelector(".share.facebook").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(link);
        document.querySelector(".share.twitter").href = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(decodeURIComponent(Url.queryString("title")) + " for dummies #FORDUMMIES") + "&url=" + encodeURIComponent(link);
        document.querySelector(".share.gplus").href = "https://plus.google.com/share?url=" + encodeURIComponent(link);
    }

    function checkHash() {
        var hash = location.hash.substring(1)
          , title = null
          , link = null
          ;

        if (hash === "create") {
            Url.updateSearchParam("title", prompt("Title"));
            Url.updateSearchParam("link", prompt("link"));
        }

        location.hash = "";
        loadText();
        updateShareLinks();
    }

    window.addEventListener("load", function () {
       loadText();
       checkHash();
    });

    window.addEventListener("hashchange", checkHash);
})();
