// ==UserScript==
// @name Reddit redirect to old.reddit
// @version 0.1
// @description Redirect to old.reddit
// @author Spude Mies
// @match https://*.reddit.com/*
// @icon data&colon;image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at document-start
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    var loc = location.href;
    if (loc.indexOf("old.") >= 0 || loc.indexOf("preview.") >= 0 ) return;
    location.href = loc.replace(/www./ig, "old.");
})();