window.Gossip.Collections.FeedEntries = Backbone.Collection.extend({

  url: function() {
    return this.feed.url() + "/entries";
  },

  initialize: function(models, options) {
    this.feed = options.feed;
  }

});