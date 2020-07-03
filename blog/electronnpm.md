---
title: Atom und Electron Hello World
meta:
- name: description
  content: Atom und Electron Hello World
- name: keywords 
  content: Atom Electron HelloWorld
---

# atom &amp; electron

Um Electron zu nutzen benötigen wir npm, dieses wird bei nodejs mit installiert.

Als erstes erstellen wir ein neues Projekt mit npm init.
```js
npm init
```
Danach erzeugen wir 2 Dateien, main.js und index.html. Die main.js muss folgendes beinhalten:

Datei: main.js
```js 
const {app, BrowserWindow} = require('electron');
let win;
function createWindow () {
    win = new BrowserWindow({width: 800, height: 600})
	win.loadURL(
	    url.format({
		    pathname: path.join(__dirname, 'index.html'),
			protocol: 'file:',
			slashes: true
		})
	);
	win.on('closed', () => {
	    win = null
	});
}
app.on('ready', createWindow);
}]);
```

die index.html kann so aussehen.

Datei: index.html
```html
<html>
    <head>
        <meta charset="UTF-8">
		<title>Hello Electron!</title>
	</head>
	<body>
	    <h1>Hello Electron!</h1>
		<p>Ready</p>
	</body>
</html>
```
Jetzt instalieren wir [Electron](http://electron.atom.io/) mit npm install.
```js 
npm install electron --save-dev
```
Um die App zu starten benötigen wir noch folgende konfiguration. Dazu muss die package.json geändert werden.
```json 
"scripts":{
    "start": "electron main.js"
}
```
Jetzt können wir die App starten.
```js 
npm run start
```
