// The color kits. One is picked before the page paints (this file loads in
// <head>, not deferred), and trady.js picks again with every new ending, the
// way the 2009 Drupal site loaded a new kit each time.
// Each name matches a [data-kit] block in trady.css, where the colors and
// their contrast ratios live.
(function () {
  var light = ['cream', 'blush', 'sage', 'mustard', 'sky', 'goldenrod', 'lilac', 'pink', 'brick'];
  var dark = ['navy', 'night', 'oxblood', 'umber'];

  // Someone who has asked their system for dark mode only gets dark grounds.
  var prefersDark = window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
  var kits = prefersDark ? dark : light.concat(dark);

  var root = document.documentElement;

  function pickKit() {
    var next;
    do {
      next = kits[Math.floor(Math.random() * kits.length)];
    } while (next === root.dataset.kit && kits.length > 1);
    root.dataset.kit = next;
  }

  pickKit();
  window.pickKit = pickKit;
})();
