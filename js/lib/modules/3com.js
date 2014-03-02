define(['util'], function(util) {

  return {
    name: '3Com',
    test: function(options) {
      console.log("Running 'test' exploit for " + this.name + " using " + util.version);
      if (options) { console.log(options) }
    }
  
  }
});
