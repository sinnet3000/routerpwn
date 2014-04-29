define(['util'], function(util) {

  return {
    company_name: '2Wire',
  
   1: function(options, exploit_name) {
      console.log("Running " + exploit_name + " exploit for " + this.company_name + " using " + util.version);
      if (options) { console.log("With options from test", options) }

      console.log("Grabbing ip from data-options html tag, accesible in 2wire.js as options.ip: ", options.ip)

    }

  
  }
});
