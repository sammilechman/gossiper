window.Gossip.Models.Feed = Backbone.Model.extend({

  urlRoot: "/feeds",

  entries: function() {
    if (!this._entries) {
      this._entries = new Gossip.Collections.FeedEntries([], {
        feed: this
      });
    }

    return this._entries;
  },

  parse: function(json) {
    if (json.entries) {
      this.entries().set(json.entries)
      delete json.entries;
    }

    return json;
  }

});