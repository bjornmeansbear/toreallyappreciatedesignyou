// The color kits. One is picked before the page paints (this file loads in
// <head>, not deferred), and trady.js picks again with every new ending, the
// way the 2009 Drupal site loaded a new kit each time.
// Each name matches a [data-kit] block in trady.css, where the colors and
// their contrast ratios live.
(function () {
  var light = ['cream', 'blush', 'sage', 'mustard', 'sky', 'goldenrod', 'lilac', 'pink', 'brick'];
  var dark = ['navy', 'night', 'oxblood', 'umber'];
  // Kits whose ink and ending both reach AAA (7:1), for "increase contrast".
  var aaa = ['sage', 'night', 'oxblood'];

  var wantsDark = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
  var wantsMore = window.matchMedia ? matchMedia('(prefers-contrast: more)') : null;
  var root = document.documentElement;

  // The visitor's settings decide which kits are in the draw:
  // dark mode gets dark grounds only, more contrast gets AAA kits only.
  function draw() {
    var kits = wantsDark && wantsDark.matches ? dark : light.concat(dark);
    if (wantsMore && wantsMore.matches) {
      kits = kits.filter(function (k) { return aaa.indexOf(k) !== -1; });
    }
    return kits;
  }

  function pickKit() {
    var kits = draw();
    var next;
    do {
      next = kits[Math.floor(Math.random() * kits.length)];
    } while (next === root.dataset.kit && kits.length > 1);
    root.dataset.kit = next;
  }

  // If a setting changes while the page is open (say "Auto" turns dark at
  // sunset), re-pick right away instead of waiting for the next press.
  [wantsDark, wantsMore].forEach(function (query) {
    if (query && query.addEventListener) query.addEventListener('change', pickKit);
  });

  pickKit();
  window.pickKit = pickKit;
})();
