require.config({
  baseUrl: 'js/lib',
  paths: {
    jquery: 'vendor/jquery',
    lodash: 'vendor/lodash'
  }
});

require(['jquery', 'lodash', 'routerpwn'], function($, _, pwn) {
  console.log("[+] Starting RouterPwn  Version: (" + pwn.version + ")");

  console.log("RouterPwn:", pwn);

  $(document).ready(function() {

    $(".exploit-run").on('click', function(event) {
      var action = $(event.target).data('id') || null;

      if (action && action.split(":").length === 2) {
        console.log("Exploit '" + action + "' clicked!");

     var options = $(event.target).data('options') || null;

     var exploit_name = $(event.target).data('exploit_name') || null;

     pwn.run(action, options, exploit_name);
      }

    });

  });

});
