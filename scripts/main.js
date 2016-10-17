var header = document.getElementById('header');

header.style = "background:#777; border:1px solid #yellow;";

var title = document.createElement("h1");
title.textContent = "Random Tip Generator";

header.appendChild(title);

var description = document.createElement("p");
description.innerHTML = "This is a description";

header.appendChild(description);





