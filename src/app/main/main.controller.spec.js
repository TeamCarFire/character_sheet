(function() {
  'use strict';

  describe('controllers: PageController', function(){
    var vm;

    beforeEach(module('characterSheet'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should be defined', function(){
      expect(vm).toBeDefined();
    })
  });
})();
