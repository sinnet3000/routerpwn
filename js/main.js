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
      var action = $(event.target).attr('id') || null;

      if (action && action.split(":").length === 2) {
        console.log("Exploit '" + action + "' clicked!");

        pwn.run(action);
      }

    });

  });

});
