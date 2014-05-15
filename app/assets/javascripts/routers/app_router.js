window.Gossip.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    ":id": "feedShow",
    "entries/:id": "entryShow"
  },

  feedsIndex: function() {
    var feedsIndexView = new Gossip.Views.FeedsIndex({
      collection: Gossip.Collections.feeds
    });

    Gossip.Collections.feeds.fetch();
    this._swapView(feedsIndexView);

  },

  feedShow: function (id) {
    var feed = Gossip.Collections.feeds.getOrFetch(id);
    feed.fetch();
    var feedShowView = new Gossip.Views.FeedsShow({
      model: feed
    });

    this._swapView(feedShowView);

  },

  entryShow: function(id) {
    var entry = new Gossip.Models.FeedEntry({ id: id });
    entry.fetch();
    var entryShowView = new Gossip.Views.EntriesShow({
      entry: entry
    });

    this._swapView(entryShowView);
  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    $('#content').html(view.render().$el);
  }


});