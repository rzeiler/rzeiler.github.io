---
title: ASP.NET MVC Eingabe Prüfung
meta: 
- name: description
  content: ASP.NET MVC Eingabe Prüfung
- name: keywords 
  content: ASP.NET MVC jquery validator unobtrusive
---

# ASP.NET MVC Eingabe Prüfung
# jquery.validator.unobtrusive

In manchen Fällen möchte man das Felde nicht geprüft werden bei einer bestimmten Aktion. Dieses kann man mit der Einstellung für "ignore" erreichen.

In den Standarteinstellungen kann man eine CSS Klasse angeben die dann bei der Prüfung ignoriert wird.

## Beispiel

::: warning Achtung
Dieses muss als erstes im Code definiert werden, danach kann man den Prüfer neu initialisieren.
:::

Wenn dann ein bestimmtes Ereignis auftritt, dann kann man die CSS Klasse den Objekten hinzufügen, wodurch die Objekte nicht geprüft werden.
      
Dieses kann dann so aussehen.

```js
/* 1 set ignore */
$.validator.setDefaults({ ignore: '.ignore' });
/* 2 parse document / init */
$.validator.unobtrusive.parse(document);
/* 3 desable elemenst when hideMe has change */
$(document).on('change', '.hideMe', function () {
    /* find validation attributes */
    $(document).find("[data-val=true]").each(function () {
        /* add css className */
        $(this).addClass("ignore");
    });
    $('input[type=submit].btn.nextStep').trigger('click');
});
```