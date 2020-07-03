---
title: Erstellen einer T-SQL Funktion und erteilen der Berechtigung
meta: 
- name: description
  content: Erstellen einer T-SQL Funktion und erteilen der Berechtigung
- name: keywords 
  content: Html2Pdf PHP
---

# Erstellen einer T-SQL Funktion und erteilen der Berechtigung

Beispiel Script zum erstellen einer T-SQL funktion.

```sql
USE [databasename]
GO
IF OBJECT_ID (N'dbo.myFunction', N'FN') IS NOT NULL
    DROP FUNCTION CoolFunction;
GO
CREATE FUNCTION dbo.myFunction(@arg1 int)
    RETURNS int
	AS
	BEGIN
	    RETURN @arg1;
	END;
GO
SELECT name AS function_name, SCHEMA_NAME(schema_id) AS schema_name, type_desc 
FROM sys.objects WHERE type_desc LIKE '%FUNCTION%';
GO
```
Anschließend können wir die Funktion testen.

```sql
USE [databasename]
GO
Select dbo.myFunction(2);
```
Das Ergebnis sollte 2 ergeben.

Damit auch andere Benutzer der Datenbank die Funktion nutzen können müssen die Berechtigungen explizit erteilt werden.
				
Dieses wird über das SQL Management Studio konfiguriert.

::: tip Einstellung In
Datenbank > Programmierbarkeit > Funktionen > Skalarwertfunktionen
:::

In den Eigenschaften der Funktion können die Berechtigungen für einen oder mehere Benutzer eingestellt werden.

<img :src="$withBase('/BerechtigungEinerSqlFunktion.jpg')" alt="BerechtigungEinerSqlFunktion">
		
Wichtig ist auch das die Schemaberechtigungen eingestellt werden müßen.

<img :src="$withBase('/BerechtigungEinerSqlFunktion_Zweiter_Schritt.jpg')" alt="BerechtigungEinerSqlFunktion_Zweiter_Schritt">