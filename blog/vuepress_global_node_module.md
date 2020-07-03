# vuepress und Globale Module

Um globale Module zu verwenden, müßen wir den ganzen pfad zum Modul angeben. Um diesen auf verschiedenen Entwicklungsumgebeungen ausführen zu können, kann man den Pfad zu Laufzeit ermitteln.

Hierzu wird das Modul **[child_process](https://nodejs.org/api/child_process.html)** benötigt. 
Mit **execSync** ermitteln wir den Globalen Pfad zu unseren Modulen.

> .vuepress > config.js

``` js
var childProcess = require('child_process');
var globalNodeModulesPath = childProcess.execSync('npm root -g').toString().trim();

module.exports = {
    title: "Woodhead (Sh)ort Bl(og) Live",
    description: "woodhead recording",
    ...
    config
    ...
    markdown: {
        // options for markdown-it-anchor
        anchor: {
            permalink: false
        },
        lineNumbers: true,
        config: md => {
            md.use(require( globalNodeModulesPath + "/markdown-it-katex"));
        }
    },
    ...
    config
    ...
};
```
