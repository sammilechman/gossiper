window.Gossip.Views.FeedsShow = Backbone.View.extend({

  initialize: function(options) {
    this.feed = options.model;
    this.listenTo(this.feed, "change sync", this.render);
  },

  events: {
    "click button#refresh-feed": "refreshFeed"
  },

  template: JST['feeds/show'],

  render: function() {
    var view = this;

    var renderedContent = this.template({
      feed: this.feed
    });
    this.$el.html(renderedContent);
    return this;
  },

  refreshFeed: function(event) {
    this.feed.fetch();
  }

  // refreshFeed: function(event) {
  //   debugger
  //   var view = this;
  //   this.feed.fetch({
  //     success: view.render
  //   });
  // }

});