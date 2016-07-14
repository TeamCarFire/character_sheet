(function() {
  'use strict';
  /*global dump */
  describe('controllers: PageController', function(){
    var vm;

    beforeEach(module('characterSheet'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should be defined', function(){
      expect(vm).toBeDefined();
    });

    describe('.nextLevelExperience()', function(){
      it('should return 1200 when level is 1', function(){
        vm.currentLevel = 1;
        expect(vm.nextLevelExperience).toEqual(12000);
      });
      it('should return 2400 when level is 2', function(){
        vm.currentLevel = 2;
        expect(vm.nextLevelExperience).toEqual(24000);
      });
    })
  });
})();
