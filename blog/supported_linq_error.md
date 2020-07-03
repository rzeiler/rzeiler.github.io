---
title: LINQ - Only primitive types or enumeration types are supported in this context
meta:
- name: description
  content: LINQ - Only primitive types or enumeration types are supported in this context
- name: keywords 
  content: LINQ Error
---

# LINQ - Only primitive types or enumeration types are supported in this context
 
Dieser Fehler tritt auf wenn ein Typ des Models mit einem anderen verglichen wird und diese unterschiedlich sind.


In diesem Fall wird ein Fehler erzeugt da der Typ status sich von notnullstatus unterscheidet durch den bedingten Operator der Null werte zulässt.

```c  {3,7,11}
public class GetStatusAnswer 
{
    private int? status;
    public string Status { get => status; set => status = value; }
}

int notnullstatus = 0;

var items = 
    context.BerlinDePayments
        .Where(b => b.BillId.Equals(notnullstatus))
        .FirstOrDefault(); /* create error */
```

Diesen Fehler kann man durch ***Ist gleich*** beheben.

```c {6}

int notnullstatus = 0;

var items = 
    context.BerlinDePayments
        .Where(b => b.BillId == notnullstatus)
        .FirstOrDefault(); /* create error */
```
