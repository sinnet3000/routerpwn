define(['util'], function(util) {

  return {
    name: '2Wire',
  
   test: function(options) {
      console.log("Running 'test' exploit for " + this.name + " using " + util.version);
      if (options) { console.log("With options from test", options) }

      console.log("Grabbing ip from data-options html tag, accesible in 2wire.js as options.ip: ", options.ip)

    }

  
  }
});
