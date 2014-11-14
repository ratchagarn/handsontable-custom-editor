# Handsontable custom editor

How about [handsontable](https://github.com/handsontable/jquery-handsontable)

## Quick Start
```html
// css
<link rel="stylesheet" href="jquery.handsontable.full.min.css">
<link rel="stylesheet" href="pikaday.css">

// js
<script src="moment.js"></script> <!-- if you want to set date format -->
<script src="jquery.min.js"></script>
<script src="pikaday.js"></script>
<script src="jquery.handsontable.full.js"></script>
<script src="handsontable-custom-editor.js"></script>
```

## Avaliable editor
- datepicker (dependency with [Pikaday](https://github.com/dbushell/Pikaday))

### Example option (columns)
```JavaScript

// datepicker
{
  editor: 'datepicker',
  format: 'MMM DD, YYYY' // require `moment.js` for format setting
}
```
