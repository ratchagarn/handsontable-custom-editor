/**
 * handsontable editor - Date picker
 * ------------------------------------------------------------
 * dependency with Pickadate (https://github.com/amsul/pickadate.js)
 */


(function ($, Handsontable) {

'use strict';

var DatePickerEditor = Handsontable.editors.TextEditor.prototype.extend();


/**
 * ------------------------------------------------------------
 * Create custom editor
 * ------------------------------------------------------------
 */

$.extend(DatePickerEditor.prototype, {

  /**
   * ------------------------------------------------------------
   * Init
   * ------------------------------------------------------------
   */

  init: function() {

    if (typeof $.fn.pickadate === 'undefined') {
      throw new Error('Pickadate dependency not found. (https://github.com/amsul/pickadate.js)');
    }

    // overwrite original
    Handsontable.editors.TextEditor.prototype.init.apply(this, arguments);
  },


  /**
   * ------------------------------------------------------------
   * Prepare
   * ------------------------------------------------------------
   */
  
  prepare: function (td, row, col, prop, value, cellProperties) {

    // overwrite original
    Handsontable.editors.TextEditor.prototype.prepare.apply(this, arguments);

    if (this.assign_datepicker) { return; }
    this.assign_datepicker = true;

    var defaultOptions = {
          container: 'body',
          format: 'mmm dd, yyyy',
          selectYears: true,
          selectMonths: true
        },
        options = $.extend({}, defaultOptions, cellProperties.options || {});

    this.$input = $(this.TEXTAREA);
    this.$input.pickadate(options);
    this.picker = this.$input.pickadate('picker');
  },


  /**
   * ------------------------------------------------------------
   * Open
   * ------------------------------------------------------------
   */
  
  open: function() {
    Handsontable.editors.TextEditor.prototype.open.call(this);
    var that = this;
    setTimeout(function() {
      that.picker.open();
    });
  }


});


/**
 * ------------------------------------------------------------
 * Register custom editor
 * ------------------------------------------------------------
 */

Handsontable.editors.DatePickerEditor = DatePickerEditor;
Handsontable.editors.registerEditor('datepicker', DatePickerEditor);


}).call(this, jQuery, Handsontable);