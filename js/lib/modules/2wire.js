define(['util'], function(util) {

  return {
    name: '2Wire',
    test: function(options) {
      console.log("Running 'test' exploit for " + this.name + " using " + util.version);
      if (options) { console.log("With options", options) }
    },

   test1: function(options) {
      console.log("Running 'test' exploit for " + this.name + " using " + util.version);
      if (options) { console.log("With options", options) }
    }

  
  }
});
