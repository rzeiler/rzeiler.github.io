---
title: Angular 5 und Materialize Select Problem
meta:
- name: description
  content: Angular 5 und Materialize Select Problem
- name: keywords 
  content: Angularjs Materializecss
---

# Angular 5 und Materializecss Select Problem
 
Bei Verwendung des Frameworks Materialize um das Tag Select schick aussehen zu lassen, kann Angular das Element nicht mehr verfolgen.

Mit fogenden Code lässt sich das Problem lösen.

```js
export class MyComponent implements OnInit {
    model: any;
    /* any of you code */
    ngOnInit() {
        let self = this;
        setTimeout(function() {
            $('select').material_select();
            $('select').change((e) => {
                self.model[e.currentTarget.name] = e.currentTarget.value;
            });
        }, 100);
    }
}
```

::: warning Achtung
Das Timeout "100" kann auch größer sein, wo das laden der Daten länger dauert!
:::