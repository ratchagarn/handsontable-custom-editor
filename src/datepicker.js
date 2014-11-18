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
          format: 'mmm dd, yyyy',
          selectYears: true,
          selectMonths: true
        },
        options = $.extend({}, defaultOptions, cellProperties.options || {});


    // special option for datepicker
    if (options.autoPosition === true && options.container === undefined) {
      options.container = 'body';
    }

    this.$input = $(this.TEXTAREA);
    this.$input.pickadate(options);
    this.options = options;
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

    // if option auto position is set then set auto position for picker
    if (this.options.autoPosition === true) {
      var offset = this.picker.$node.offset();
      this.picker.$root.css({
        top: offset.top + this.picker.$node.height() + 5,
        left: offset.left,
        right: 'auto',
        bottom: 'auto'
      });
    }

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