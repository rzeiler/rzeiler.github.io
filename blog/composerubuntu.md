---
title: So installierst du Composer auf Ubuntu 16.04
meta:
- name: description
  content: So installierst du Composer auf Ubuntu 16.04
- name: keywords 
  content: Composer Ubuntu 16.04
---

# So installierst du Composer auf Ubuntu 16.04

Die Installation von Composer erfordert die vorherige Installation von PHP. Verwenden Sie den folgenden Befehl um die Instalation zu Prüfen.

```php
php -v
```

Es sollte dann in etwa so aussehen.

```php
ralf@pc:~$ php -v
PHP 5.6.30 (cli) (built: May  3 2017 22:28:26)
Copyright (c) 1997-2016 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
with Xdebug v2.5.4, Copyright (c) 2002-2017, by Derick Rethans
```

Wenn nicht dann muss zuerst PHP installiert werden. Verwenden Sie dazu den folgenden Befehl um die Instalation auszuführen.

```php
apt-get install php
```

Wenn PHP instaliert ist, laden Sie sich die Datei composer.phar herunter. Verwenden Sie dafür folgenden Befehl.

```php
wget https://getcomposer.org/composer.phar
```

Nun benennen Sie die Datei composer.phar in den composer mit folgenden Befehl um.

```php
mv composer.phar composer
```

Verschieben Sie nun die composer -Datei als nächstes in "/usr/local/bin/" mit dem Befehl

```php
sudo mv composer /usr/local/bin/
```
,um den Befehl composer von einem beliebigen Ort auszuführen.
Überprüfen Sie als nächstes den Befehl composer mit

```php
composer
```

Das ergebnis sollte in etwa so aussehen.

```php
ralf@pc:~$ composer
     ______
    / ____/___  ____ ___  ____  ____  ________  _____
   / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
  / /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
  \____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                      /_/
  Composer version 1.6-dev (edece864e7e4c668dcad6601df70777882d22116) 2017-09-19 08:42:10
  Usage:...
```

Wenn das nicht der Fall sein sollte kann es sein das die Datei nicht ausführbar ist. Dieses läßt sich mit folgenden Befehl ändern.

```php
chmod a+rx composer
```