var header = document.getElementById('header');

header.style = "background:#777; border:1px solid black; text-align: center; margin: 0px auto;";

var title = document.createElement("h1");
title.textContent = "Random Tip Generator";

header.appendChild(title);

var description = document.createElement("p");
description.innerHTML = "This is a description.";

header.appendChild(description);

var quoteArea = document.createElement("div");
quoteArea.setAttribute("id","quoteArea");

var dataTips = []

dataTips = [
    {tip: "Everyone dies eventually."},
    {tip: "Live for you."},
    {tip: "Make moves."},
    {tip: "Find out whats important to you and work for it."},
    {tip: "Who are you"},
];

console.log(dataTips.length);

