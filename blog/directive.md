---
title: AngularJS Dynamische Directive
meta:
- name: description
  content: AngularJS Dynamische Directive
- name: keywords 
  content: AngularJS Directive
---

# AngularJS Dynamische Directive

Im Parameter [html] wird die zu zeigene Seite übergeben. Diese wird dann dynamisch in der templateUrl zusammengestellt.

```js
app.directive('blog', ['$routeParams', function($routeParams) {
    return {
        templateUrl: function(scope, element, attrs) {
            return 'blog/' + $routeParams.html + '.html';
        }
    };
}]);
```