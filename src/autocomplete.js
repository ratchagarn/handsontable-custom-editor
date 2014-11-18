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