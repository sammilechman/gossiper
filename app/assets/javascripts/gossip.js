window.Gossip = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    window.Gossip.Collections.feeds = new Gossip.Collections.Feeds();

    new Gossip.Routers.AppRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Gossip.initialize();
});

something = 0;