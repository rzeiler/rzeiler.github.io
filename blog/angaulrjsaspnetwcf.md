---
title: Angaulrjs ASP.NET WCF SERVICE - EXAMPLE
meta:
- name: description
  content: Angaulrjs ASP.NET WCF SERVICE - EXAMPLE
- name: keywords 
  content: Angaulrjs ASP.NET Wcf Service
---


# Angaulrjs ASP.NET WCF SERVICE - EXAMPLE


appService.svc

``` c
using ...;
namespace appService{
  [ServiceContract(Namespace = 'appService')]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Allowed)]
	public class appService
	{
    [OperationContract]
		public int getId(int _UserId)
		{
			return _UserId;
		}
	}
}
```
appController.js

``` js
var myApp = angular.module('myApp', []);
myApp.controller('myController', function ($scope, $http) {
  $http.post('appService.svc/getId', { UserId: 21753 }).success(function (data){
    $scope.id = data.d;
	}).error(function (data, status, headers, config) {
		alert(data);
	});
});
```
myApp.html

``` html
 <div ng-controller='myController'>{{id}}</div> 
```