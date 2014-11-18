# Handsontable custom editor
Add more avaliable Editor type of handsontable.

How about [handsontable](https://github.com/handsontable/jquery-handsontable).


### Version

`0.2.0`

## Change log

### 0.2.0
- Add editor `advance-autocomplete`.
- Change dependency lib for editor `datepicker`.
- Change distribution file name.


### 0.1.0
- Init project.
- Add editor `datepicker`.


## Quick Start
```html
// css
<link rel="stylesheet" href="jquery.handsontable.full.min.css">
<!--
Include dependency CSS
<link rel="stylesheet" href="dependency css..">
...
-->

// js
<script src="moment.js"></script> <!-- if you want to set date format -->
<script src="jquery.min.js"></script>
<!--
Include dependency JS
<script src="dependency js..."></script>
...
-->
<script src="jquery.handsontable.full.js"></script>
<script src="jquery.handsontable-custom-editor.js"></script>
```

## Avaliable editor
- datepicker (dependency with [Pickadate](https://github.com/amsul/pickadate.js)) (because jquery-ui is very large file)
- advance-autocomplete (dependency with [devbride - jQuery Autocomplete](https://github.com/devbridge/jQuery-Autocomplete))

### Example option (columns)
```JavaScript

// datepicker
{
  editor: 'datepicker',
  format: 'mmm dd, yyyy'
  validator: function(value, callback) { // validator date format (mmm dd, yyyy)
    if ( /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2},\s\d{4}$/i.test(value) ) {
      callback(true);
    }
    else {
      callback(false);
    }
  }
}
```
