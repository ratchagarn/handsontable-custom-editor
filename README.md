# Handsontable custom editor
Add more avaliable Editor type of handsontable.

How about [handsontable](https://github.com/handsontable/jquery-handsontable).


## Avaliable editor
- `datepicker` (dependency with [Pickadate](https://github.com/amsul/pickadate.js)) (because jquery-ui is very large file)
- `advance-autocomplete` (dependency with [devbride - jQuery Autocomplete](https://github.com/devbridge/jQuery-Autocomplete))


### Version

`0.2.1`

## Change log

### 0.2.1
- Add special option `autoPosition` for dependency lib (pickadate) for `datepicker`.

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

### Example option (columns)
```JavaScript

// datepicker
{
  editor: 'datepicker',
  options: {
    autoPosition: true
  },
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

### Note
- If you use editor like `advance-autocomplete` or `datepicker` and you don't see editor dependency UI, try to update dependency lib for latest version or config option something like `container` (Example: http://amsul.ca/pickadate.js/date.htm#container)
