define(['app', 'backbone'], function(app, Backbone) {

  return {
    id: 'tiles',

    View: Backbone.Layout.extend({

      template: 'core/listings/tiles',

      attributes: {
        class: 'view-tiles js-listing-view file-listing'
      },

      serialize: function() {
        return {
          items: this.collection.toJSON()
        };
      },

      initialize: function() {
        //
      }
    })
  }
});