---
title: T-Sql Update mit Inner Join
meta:
- name: description
  content: Update mit Inner Join
- name: keywords 
  content: Update Inner Join T-Sql
---

# T-Sql Update mit Inner Join

```sql
UPDATE dbo.Table2   
SET dbo.Table2.ColB = dbo.Table2.ColB + dbo.Table1.ColB  
FROM dbo.Table2   
    INNER JOIN dbo.Table1   
    ON (dbo.Table1.ColA = 'PARAM')
WHERE dbo.Table2.ColB < dbo.Table1.ColB
```