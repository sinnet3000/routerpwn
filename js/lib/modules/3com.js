define(['util'], function(util) {

  return {
    company_name: '3Com',
    1: function(options, exploit_name) {
      console.log("Running " + exploit_name + " exploit for " + this.company_name + " using " + util.version);
      if (options) { console.log(options) }
    }
  
  }
});
