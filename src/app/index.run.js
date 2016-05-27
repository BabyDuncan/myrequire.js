(function() {
  'use strict';

  angular
    .module('myrequireJs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
