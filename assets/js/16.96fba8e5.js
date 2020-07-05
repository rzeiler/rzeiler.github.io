(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{296:function(e,t,s){"use strict";s.r(t);var n=s(28),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fix-entity-framework-error-new-transaction-is-not-allowed-because-there-are-other-threads"}},[e._v("FIX Entity Framework Error: New transaction is not allowed because there are other threads!")]),e._v(" "),s("p",[e._v("Bei verwendung des Entity Framework kommt es mal vor das man seine Daten in einer Schleife bearbeiten möchte.")]),e._v(" "),s("p",[e._v("Normalerweise macht man das so.")]),e._v(" "),s("div",{staticClass:"language-c# line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* get data */\nIQeryable<Item> items = context.Item.Where(i => i.Id == 2);\n/* loop */\nforeach(Item item in items){\n    item.title = 'new'\n    context.SaveChanges();\n}\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Jetzt kommts.")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",[e._v('Zeile 6: context.SaveChanges()\n"entity framework new transaction is not allowed because there are other threads"')])]),e._v(" "),s("p",[e._v("IQeryable verhält sich hier wie eine Transaktion, wodurch keine Änderungen gespeichert werden können.")]),e._v(" "),s("p",[e._v("Dieses Lässt sich ganz einfach lösen mit IList.")]),e._v(" "),s("div",{staticClass:"language-c# line-numbers-mode"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/* get data */\nIList<Item> items = context.Item.Where(i => i.Id == 2).ToList<Item>();\n/* loop */\nforeach(Item item in items){\n    item.title = 'new'\n    context.SaveChanges();\n}\n")])]),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Das wars schon.")])])}),[],!1,null,null,null);t.default=a.exports}}]);