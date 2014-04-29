define(function(require) {
  var _ = require('lodash');

  var companies = [
    '2wire', 
    '3com'
  ];


  var modules = {};
  _.each(companies, function(company) {
    require(["modules/" + company], function(module) {
      modules[company] = module;
    });
  });

  console.log("RouterPwn initialized!");

  return {
    version: '2',
    modules: modules,

    run: function(action, options) {
      if (!action || action.split(":").length !== 2) {
        console.error("Expected valid action, got", action);
        return;
      }

      var params = action.split(":");

      console.log("Params: ",params);
      var company = params[0];
      var exploit = params[1];

      console.log("Executing " + company + ":" + exploit);
      this.modules[company][exploit](options || {});
    }
  };
});


