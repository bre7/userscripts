// ==UserScript==
// @name       Raywenderlinch Lightbox
// @version    0.2
// @description  Enables Fealtherlight lightbox on RWL's images
// @match      http://www.raywenderlich.com/*
// @require  https://code.jquery.com/jquery-latest.js
// @require  https://cdn.rawgit.com/noelboss/featherlight/1.3.3/release/featherlight.min.js
// ==/UserScript==

$("head").append (
    '<link '
  + 'href="//cdn.rawgit.com/noelboss/featherlight/1.3.3/release/featherlight.min.css" '
  + 'rel="stylesheet" type="text/css">'
);

$(document).ready(function() {
    $('#content img').parent('a').attr("data-featherlight", "image");
});
