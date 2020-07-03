---
title: T-SQL WHILE LOOP - Example
meta: 
- name: description
  content: T-SQL WHILE LOOP - Example
- name: keywords 
  content: T-SQL Microsoft
---
 

# T-SQL WHILE LOOP - Example

 
## Script Beispiel

Hier ein Beispiel einer einfachen Tabelle.

```sql
Declare @var_1 int;
Declare @var_2 int;
				
CREATE TABLE #temptbl (col_1 int, col_2 int)
				
DECLARE tbl_Cursor CURSOR FOR
SELECT col_1, col_2 FROM tbl WHERE col_2 > 0 Group by col_1;
OPEN tbl_Cursor;
FETCH NEXT FROM tbl_Cursor INTO @var_1, var_2;
WHILE @@FETCH_STATUS = 0
BEGIN
				
Set @var_1=0;
Set @var_2=0;
				
/* push */
INSERT INTO #temptbl VALUES(@var_1, @var_2);
FETCH NEXT FROM tbl_Cursor INTO @var_1, var_2;
END;
CLOSE tbl_Cursor;
DEALLOCATE tbl_Cursor;
				
Select *
FROM #temptbl
Order BY col_1;
				
drop table #temptbl
```
