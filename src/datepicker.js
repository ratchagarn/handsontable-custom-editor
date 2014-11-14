/**
 * handsontable editor - Date picker
 * ------------------------------------------------------------
 * dependency with Pikaday (https://github.com/dbushell/Pikaday)
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

    if (typeof Pikaday === 'undefined') {
      throw new Error("Pikaday dependency not found. (https://github.com/dbushell/Pikaday)");
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
    Handsontable.editors.TextEditor.prototype.prepare.apply(this, arguments);

    if (this.assign_datepicker) { return; }
    this.assign_datepicker = true;


    var defaultOptions = {
          field: this.TEXTAREA
        };

    if (this.cellProperties.format) {
      defaultOptions.format = this.cellProperties.format;
    }

    this.picker = new Pikaday( defaultOptions );
  },


  /**
   * ------------------------------------------------------------
   * Open
   * ------------------------------------------------------------
   */
  
  open: function() {
    Handsontable.editors.TextEditor.prototype.open.call(this);
    var that = this;
    if (!this.picker.isVisible()) {
      setTimeout(function() {
        that.picker.show();
      });
    }
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