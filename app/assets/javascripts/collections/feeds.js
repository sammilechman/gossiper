window.Gossip.Collections.Feeds = Backbone.Collection.extend({
  url: "/feeds",
  model: Gossip.Models.Feed,

  getOrFetch: function(id) {
    var model;
    var feeds = this;

    if (model = this.get(id)) {
      model.fetch();
      return model;
    } else {
      model = new Gossip.Models.Feed({ id: id });
      model.fetch({
        success: function() { feeds.add(model); }
      })
      return model;
    }
  }
});