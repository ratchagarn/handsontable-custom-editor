/*!
 * handsontable custom editor version 0.2.0
 * Copyright 2014-Preset
 * Author: Ratchagarn Naewbuntad
 * Licensed under MIT
 */
/**
 * handsontable editor - Advance Auto complete
 * ------------------------------------------------------------
 * dependency with Dev bridge Auto complete (https://github.com/devbridge/jQuery-Autocomplete)
 */


(function ($, Handsontable) {

'use strict';

var AdvanceAutoComplete = Handsontable.editors.HandsontableEditor.prototype.extend();


/**
 * ------------------------------------------------------------
 * Create custom editor
 * ------------------------------------------------------------
 */

$.extend(AdvanceAutoComplete.prototype, {

  /**
   * ------------------------------------------------------------
   * Init
   * ------------------------------------------------------------
   */

  init: function() {

    if (!$.fn.devbridgeAutocomplete) {
      throw new Error("devbridgeAutocomplete dependency not found. (https://github.com/devbridge/jQuery-Autocomplete)");
    }

    // overwrite original
    Handsontable.editors.HandsontableEditor.prototype.init.apply(this, arguments);
  },


  /**
   * ------------------------------------------------------------
   * Prepare
   * ------------------------------------------------------------
   */
  
  prepare: function (td, row, col, prop, value, cellProperties) {
    // overwrite original
    Handsontable.editors.HandsontableEditor.prototype.prepare.apply(this, arguments);

    if (this.assign_autocomplete) { return; }
    this.assign_autocomplete = true;

    this.$autocomplete = $(this.TEXTAREA);
    this.default_options = $.extend({}, cellProperties.options);

    this.$autocomplete.autocomplete( this.default_options );
  }


});


/**
 * ------------------------------------------------------------
 * Register custom editor
 * ------------------------------------------------------------
 */

Handsontable.editors.AdvanceAutoComplete = AdvanceAutoComplete;
Handsontable.editors.registerEditor('advance-autocomplete', AdvanceAutoComplete);


}).call(this, jQuery, Handsontable);
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