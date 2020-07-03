---
title: Atom PHP Xdebug
meta: 
- name: description
  content: Atom PHP Xdebug
- name: keywords 
  content: Atom PHP Xdebug
---

# Atom PHP Xdebug

## Xdebug

Die aktuelle Xdebug.dll herunterladen, und anschließend im PHP extension Verzeichnis speichern.
				
::: tip Info 
Die Xdebug.dll muss in abhängig zur PHP Version installiert werden.
:::

### Beispiel XAMPP
**C:\xampp\php\ext\php_xdebug-2.5.0-5.6-vc11.dll**

## Atom
Mit **Install Packages** wird **php-debug** Installiert.

::: tip Info
Pakete werde im Atom mit File > Settings > Install Packages Instaliert.
:::

## Einstellungen
In der **php.ini** müssen fogende Zeilen hinzugefügt werden.

```ini
zend_extension=C:\xampp\php\ext\php_xdebug-2.5.0-5.6-vc11.dll
```
::: tip Info 
Zu finden ist die **php.ini** mit XAMPP unter **C:\xampp\php\php.ini**
:::

```ini
[xdebug]
xdebug.remote_enable=1
xdebug.remote_host=127.0.0.1
xdebug.remote_connect_back=1
xdebug.remote_port=9000
xdebug.remote_handler=dbgp
xdebug.remote_mode=req
xdebug.remote_autostart=true
```
Damit **Atom** auch informiert wird muss die **config.json** angepasst werden mit folgenden Einstellungen

```json
"php-debug": PathMaps: [
    "remotepath;localpath"
    "/base/path/on/remote/system;C:\\base\\path\\on\\local\\system"
]
ServerPort: 9000
```