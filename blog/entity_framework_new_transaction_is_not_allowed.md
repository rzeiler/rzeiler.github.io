---
title: Entity Framework Transaction Error
meta:
- name: description
  content: Entity Framework
- name: keywords 
  content: Entity Framework
---

# FIX Entity Framework Error: New transaction is not allowed because there are other threads!

Bei verwendung des Entity Framework kommt es mal vor das man seine Daten in einer Schleife bearbeiten möchte.

Normalerweise macht man das so.
```c#{6}
/* get data */
IQeryable<Item> items = context.Item.Where(i => i.Id == 2);
/* loop */
foreach(Item item in items){
    item.title = 'new'
    context.SaveChanges();
}
```
Jetzt kommts.
::: danger
Zeile 6: context.SaveChanges()
"entity framework new transaction is not allowed because there are other threads"
:::
IQeryable verhält sich hier wie eine Transaktion, wodurch keine Änderungen gespeichert werden können.

Dieses Lässt sich ganz einfach lösen mit IList.

```c#{2}
/* get data */
IList<Item> items = context.Item.Where(i => i.Id == 2).ToList<Item>();
/* loop */
foreach(Item item in items){
    item.title = 'new'
    context.SaveChanges();
}
```
Das wars schon.