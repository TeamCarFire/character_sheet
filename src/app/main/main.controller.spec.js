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
    });

    describe('.nextLevelExperience()', function(){
      it('should return 1200 when level is 1', function(){
        expect(vm.nextLevelExperience).toEqual(300);
      });
    });

    describe('.experienceTilNextLevel', function() {
      it('should give a percentage of xp til next level', function(){
        var calculation = ((80 / 300) * 100).toFixed(2);
        expect(vm.experienceTilNextLevel).toEqual(calculation);
      });
    });

  });
})();
