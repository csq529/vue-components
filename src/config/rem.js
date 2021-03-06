(function(doc, win) {
  let docEl = doc.documentElement;
  let resizeEvt =
    "orientationchange" in window ? "orientationchange" : "resize";
  let recalc = function() {
    let clientWidth = docEl.clientWidth;
    if (!clientWidth) return false;
    docEl.style.fontSize = 50 * (clientWidth / 375) + "px";
  };
  if (!doc.addEventListener) return false;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
