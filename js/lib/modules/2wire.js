define(['util'], function(util) {

  return {
    name: '2Wire',
  
   test: function(options) {
      console.log("Running 'test' exploit for " + this.name + " using " + util.version);
      if (options) { console.log("With options from test", options) }

      console.log("Grabbing ip from 2wire.js: ", options.ip)

    }

  
  }
});
