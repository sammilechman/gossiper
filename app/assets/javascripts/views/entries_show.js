window.Gossip.Views.EntriesShow = Backbone.View.extend({

  initialize: function(options) {
    this.entry = options.entry;
    this.listenTo(this.entry, "change", this.render);
  },

  template: JST['entries/show'],

  events: {
    'click button#back': 'goBack',
  },

  render: function() {
    var view = this;
    var renderedContent = this.template({
      entry: view.entry
    });

    this.$el.html(renderedContent);

    return this;
  },

  goBack: function() {
    Backbone.history.navigate("" + this.entry.feed_id, { trigger: true });
  }
});