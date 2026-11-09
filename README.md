# to really appreciate design you…

this was created as a “poster” for a visiting artist workshop with andrew blauvelt in 2009. the prompt: make your own poster in response to bernard tschumi's *advertisements for architecture* (1976–77), the card that reads “to really appreciate architecture, you may even need to commit a murder.” a response to the idea, not a copy of the design. originally it was a hacked-together drupal site, and anyone who visited could add their own ending to the sentence. now it's a static remnant: a list of those endings, one pulled out of the hat at random. click the sentence (or tab to it and hit enter/space) for another.

live at www.toreallyappreciatedesignyou.com

rebuilt in 2026 the same way as [oblique](https://oblique.ookb.co): no build step, no framework.

## how it works

- `index.html`: the sentence, with a random ending
- `list.html`: every ending, numbered
- `trady.json`: the endings, a plain array of strings. the only copy of the list
- `trady.js`: fetches `trady.json`, swaps in a new ending on each press without reloading, and builds the list page
- `kits.js`: picks a color kit before the page paints, and again with every new ending, the way the drupal site loaded a new kit each time. the kits themselves (ground, ink, ending color, with contrast ratios) are at the top of `trady.css`
- `kit.css`: a copy of the shared design kit from `color-system-and-guidelines` (colors, type scale, dark mode, focus ring). re-copy it, don't edit it here
- `trady.css`: the color kits and the parts particular to this site. to try a typeface, add its `@font-face` there and set `--font-display`
- `favicon.svg` / `apple-touch-icon.png`: the icon

run it through a local server (`python3 -m http.server`), not by opening the file directly. browsers block the fetch from a `file://` page.

## adding an ending

add a string to `trady.json`. it finishes the sentence “to really appreciate design you …”, so start it lowercase:

```json
"should read the README.",
```

maybe visitor submissions come back someday.
