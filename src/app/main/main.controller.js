(function () {
  'use strict';

  angular
    .module('characterSheet')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.currentLevel = 1;
    vm.nextLevelExperience = nextLevelExperience(vm.currentLevel);
    vm.currentExperience = 80;
    vm.experienceTilNextLevel = vm.currentExperience / 3;

//    I like this progress directive https://github.com/angular-directives/angular-round-progress-directive

/*
 0  1 +2
 300 2 +2
 900 3 +2
 2,700 4 +2
 6,500 5 +3
 14,000 6 +3
 23,000 7 +3
 34,000 8 +3
 48,000 9 +4
 64,000 10 +4
 85,000 11 +4
 100,000 12 +4
 120,000 13 +5
 140,000 14 +5
 165,000 15 +5
 195,000 16 +5
 225,000 17 +6
 265,000 18 +6
 305,000 19 +6
 355,000 20 +6
*/

    function nextLevelExperience(currentLevel) {
      var nextLevel = currentLevel + 1;
      switch (nextLevel) {
        case 1:
          return 0;
        case 2:
          return 300;
        case 3:
          return 900;
        case 4:
          return 2700;
        case 5:
          return 6500;
        case 6:
          return 14000;
        case 7:
          return 23000;
        case 8:
          return 34000;
        case 9:
          return 48000;
        case 10:
          return 64000;
        case 11:
          return 85000;
        case 12:
          return 100000;
        case 13:
          return 120000;
        case 14:
          return 140000;
        case 15:
          return 165000;
        case 16:
          return 195000;
        case 17:
          return 225000;
        case 18:
          return 265000 ;
        case 19:
          return 305000;
        case 20:
          return 355000;
        default:
          return 0;
      }
    }
  }
})();
