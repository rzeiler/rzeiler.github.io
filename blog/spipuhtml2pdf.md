---
title: Html2Pdf -> Datei kann nicht gespeichert werden!
meta:
- name: description
  content: Html2Pdf -> Datei kann nicht gespeichert werden!
- name: keywords 
  content: Html2Pdf PHP
---
 

# Html2Pdf / Datei kann nicht gespeichert werden!

::: danger
"Remote host file access not accepted" on a local file?
:::

Tritt auf da wenn der Parameter "F" und ein Lokaler Vollständiger Pfad "D:/Note.pdf" zum Lokalen Speichern verwendet wird. Durch diesen Parameter versucht "Spipu/Html2Pdf" den Lokalen Pfad der Scriptdatei "D:/live/script.php" an den Anfang zu stellen file://D:/live/D:/Note.pdf".

Dieses führt natürlich zum Fehler. Durch das auskommentieren des Skriptes in der Bibliothek ist der Fehler behoben.
 
::: tip
Pfad:.../vendor/spipu/html2pdf/src/Html2Pdf.php
:::

```php
// if save on server: it must be an absolute path
// if ($dest[0] == 'F' && $name[0] !== DIRECTORY_SEPARATOR) {
//     $name = getcwd() . DIRECTORY_SEPARATOR . $name;
// }
```