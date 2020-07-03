---
title: Native File System API
meta:
- name: description
  content: File System API
- name: keywords 
  content: File System API
---

# Native File System API: Dateisystemzugriff für Websites und PWA's

Die Native File System API erweitert die Schnittstellen des globalen Window-Objekts. Durch den Aufruf der Methode chooseFileSystemEntries() öffnet sich der bekannte Dateiauswahldialog. Der Methode lässt sich ein Konfigurationsobjekt übergeben. Darüber kann die Mehrfachauswahl aktiviert, die erlaubten Dateiendungen eingeschränkt und der Dialogtyp (Datei öffnen, Verzeichnis öffnen, Datei speichern) angegeben werden. Standardmäßig wird ein Datei-öffnen-Dialog mit Einfachauswahl angezeigt. Das nachstehende Listing zeigt, wie eine Auswahl für TXT-Dateien angezeigt und der Inhalt der gewählten Datei ausgelesen werden kann.

```js
/* add event listner */
btnOpenFile.addEventListener('click', async () => {
  /* filter list by .txt */
  const handle = await window.chooseFileSystemEntries({
    accepts: [{ extensions: ['txt'] }]
  });
  const file = await handle.getFile();
  console.log(await file.text());
});
```

[Quelle GOOGLE Developers](https://developers.google.com/web/updates/2019/08/native-file-system)