/*
Download Tampermonkey (Chrome) or Greasemonkey (Firefox)
Click on right top icon (Tampermonkey icon) on the page and click "Add a new script..." 
Copy all lines above and paste
Save changes
*/


// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://www.turkanime.tv/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.getElementsByClassName("ui-icon ui-icon-closethick")[1].click();

})();
