---
sidebar: auto
---

# GIT command's

## Entfernen
Zuvor hinzugefügte verzeichnise wieder entfernen.

> git rm -r --cached "folder-name" 
oder
> git filter-branch --tree-filter "rm -rf folder-name" --prune-empty HEAD

## Entfernen Fehler / Remove Issue
Es kann kein neues Backup erstellt werden. <br>
Eine vorherige Sicherung ist bereits in refs / original / vorhanden <br>
Erzwingen Sie das Überschreiben der Sicherung mit -f

::: warning Fehler / Error
Cannot create a new backup. <br>
A previous backup already exists in refs/original/<br>
Force overwriting the backup with -f
:::

> git filter-branch --tree-filter "rm -rf folder-name" -f --prune-empty HEAD