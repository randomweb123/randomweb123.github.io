var items = [
    ["Home", "/"], 
    ["Games", "/game.html"], 
    ["Projects", "/projects.html"]
];

var navbar = document.getElementById("navbar");
var pageFooter = document.getElementById("footer");
var ul = document.createElement("ul");

navbar.appendChild(ul);

for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");
    var a = document.createElement("a");

    if (window.location.pathname == items[i][1]) {
        li.setAttribute("id", "current")
    } else {
        li.setAttribute("id", "item");
    }

    if (items[i][0] == "Discord") {
        a.setAttribute("target", "_blank");
        li.setAttribute("id", "discord");
        a.setAttribute("id", "discord");
    } else if (items[i][0] == "Twitch") {
        a.setAttribute("target", "_blank");
        li.setAttribute("id", "twitch");
        a.setAttribute("id", "twitch");
    }

    a.setAttribute("href", items[i][1]);
    a.innerHTML = items[i][0];

    ul.appendChild(li);
    li.appendChild(a);
}

var footerItems = [
    ["Copyright © Logan Houston & Luke Whrit 2018", "", true]
];


for (var i = 0; i < footerItems.length; i++) {
    var span = document.createElement("span");

    if (!footerItems[i][2]) {
        var iTag = document.createElement("i");
        var a = document.createElement("a");
        
        a.setAttribute("target", "_blank");
        a.setAttribute("href", footerItems[i][1]);
        iTag.setAttribute("class", footerItems[i][0]);

        a.appendChild(iTag);
        span.appendChild(a);
    } else if (footerItems[i][2]) {
        span.setAttribute("id", "copy");
        span.appendChild(document.createTextNode(footerItems[i][0]));
    }

    pageFooter.appendChild(span);
}