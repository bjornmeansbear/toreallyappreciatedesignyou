// One file for both pages: fetch the endings once, then fill whichever
// element the current page has.
(function () {
  fetch('trady.json')
    .then(function (response) { return response.json(); })
    .then(function (endings) {

      // index.html: the sentence is a button; each press shows a new ending.
      var button = document.getElementById('trady');
      if (button) {
        var entry = button.querySelector('#trady-entry');
        var heading = button.parentElement;
        var last = entry.textContent;

        var showRandom = function () {
          var next;
          // Never the same ending twice in a row, so a press always does something.
          do {
            next = endings[Math.floor(Math.random() * endings.length)];
          } while (next === last && endings.length > 1);
          last = next;
          entry.textContent = next;
          // Long endings drop a type size (see trady.css).
          heading.toggleAttribute('data-long', next.length > 70);
        };

        showRandom();
        button.addEventListener('click', function () {
          showRandom();
          // A new ending gets a new color kit, like a fresh page load did in 2009.
          if (window.pickKit) window.pickKit();
        });
      }

      // list.html: every ending, numbered.
      var list = document.getElementById('fulllist');
      if (list) {
        var fragment = document.createDocumentFragment();
        endings.forEach(function (ending) {
          var li = document.createElement('li');
          li.textContent = ending; // textContent, so nothing in an entry is parsed as markup
          fragment.appendChild(li);
        });
        list.appendChild(fragment);
      }
    })
    .catch(function () {
      // Usually means the page was opened as a file:// URL rather than
      // through a server. index.html keeps its fallback ending.
      var list = document.getElementById('fulllist');
      if (list) list.insertAdjacentHTML('beforebegin',
        '<p>Couldn’t load the endings. Refresh to try again.</p>');
    });
})();
