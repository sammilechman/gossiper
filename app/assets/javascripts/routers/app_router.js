window.Gossip.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "" : "feedsIndex",
    ":id": "feedShow"
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

    var feedShowView = new Gossip.Views.FeedsShow({
      model: feed
    });

    this._swapView(feedShowView);

  },

  _swapView: function(view) {
    if (this.currentView) {
      this.currentView.remove();
    }
    this.currentView = view;

    $('#content').html(view.render().$el);
  }


});