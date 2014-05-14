window.Gossip.Views.FeedsShow = Backbone.View.extend({

  initialize: function(options) {
    // listener
    this.feed = options.model;
  },

  template: JST['feeds/show'],

  render: function() {
    // var view = this;
    var renderedContent = this.template({
      feed: this.feed
    });
    this.$el.html(renderedContent);
    return this;
  }

});