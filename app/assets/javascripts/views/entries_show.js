window.Gossip.Views.EntriesShow = Backbone.View.extend({

  initialize: function(options) {
    this.entry = options.entry;
    this.listenTo(this.entry, "change", this.render);
  },

  template: JST['entries/show'],

  render: function() {
    var view = this;
    var renderedContent = this.template({
      entry: view.entry
    });

    this.$el.html(renderedContent);

    return this;
  },



});