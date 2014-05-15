window.Gossip.Models.FeedEntry = Backbone.Model.extend({

  urlRoot: "/entries",

  parse: function (response) {
    this.feed_id = response.feed_id;
    this.set('feed_id', response.feed_id);
    return response;
  }

});