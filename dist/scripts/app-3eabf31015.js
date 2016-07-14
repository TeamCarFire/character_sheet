!function(){"use strict";angular.module("characterSheet",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ui.router","ngMaterial","toastr"])}(),function(){"use strict";function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Angular Material Design",url:"https://material.angularjs.org/#/",description:"The Angular reference implementation of the Google's Material Design specification.",logo:"angular-material.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"}];this.getTec=e}angular.module("characterSheet").service("webDevTec",e)}(),function(){"use strict";function e(e){function t(t,n,a,r){var o,i=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function n(e,t){function n(){return a().then(function(){e.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(e){return r.contributors=e,r.contributors})}var r=this;r.contributors=[],n()}n.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return a}e.$inject=["malarkey"],angular.module("characterSheet").directive("acmeMalarkey",e)}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("characterSheet").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t){function n(n){function r(e){return e.data}function o(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(a+"/contributors?per_page="+n).then(r)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",r={apiHost:a,getContributors:n};return r}e.$inject=["$log","$http"],angular.module("characterSheet").factory("githubContributor",e)}(),function(){"use strict";function e(e,t,n){function a(){o(),e(function(){i.classAnimation="rubberBand"},4e3)}function r(){n.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),i.classAnimation=""}function o(){i.awesomeThings=t.getTec(),angular.forEach(i.awesomeThings,function(e){e.rank=Math.random()})}var i=this;i.awesomeThings=[],i.classAnimation="",i.creationDate=1467114982780,i.showToastr=r,a()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("characterSheet").controller("PageController",e)}(),function(){"use strict";function e(){function e(e){switch(e){case 1:return 0;case 2:return 300;case 3:return 900;case 4:return 2700;case 5:return 6500;case 6:return 14e3;case 7:return 23e3;case 8:return 34e3;case 9:return 48e3;case 10:return 64e3;case 11:return 85e3;case 12:return 1e5;case 13:return 12e4;case 14:return 14e4;case 15:return 165e3;case 16:return 195e3;case 17:return 225e3;case 18:return 265e3;case 19:return 305e3;case 20:return 355e3;default:return 0}}var t=this;t.currentLevel=1,t.nextLevel=t.currentLevel+1,t.nextLevelExperience=e(t.nextLevel),t.currentExperience=80,t.experienceTilNextLevel=(t.currentExperience/t.nextLevelExperience*100).toFixed(2)}angular.module("characterSheet").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("characterSheet").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("characterSheet").config(e)}(),function(){"use strict";angular.module("characterSheet").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("characterSheet").config(e)}(),angular.module("characterSheet").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=header>Main header</div><div class=body><div class=sidebar>Sidebar</div><div class=main><div class=content><div class=box><md-progress-circular md-mode=determinate value={{main.experienceTilNextLevel}} md-diameter=50px></md-progress-circular><md-progress-linear md-mode=determinate value={{main.experienceTilNextLevel}}></md-progress-linear><md-content class="md-padding autocomplete" layout=column><md-chip-template><md-chip class=level-chip><strong>{{main.currentLevel}}</strong></md-chip></md-chip-template></md-content><md-content class=md-padding><form name=characterForm><div layout layout-sm=column><md-input-container flex><label>Player First Name</label><input ng-model=user.playerFirstName></md-input-container><md-input-container flex><label>Player Last Name</label><input ng-model=user.playerLastName></md-input-container></div><div layout layout-sm=column><md-input-container flex><label>Character First Name</label><input ng-model=user.characterFirstName></md-input-container><md-input-container flex><label>Character Last Name</label><input ng-model=user.characterLastName></md-input-container></div><div layout layout-sm=column><md-input-container flex><label>Race</label><input ng-model=user.race></md-input-container><md-input-container flex><label>Sub-Race</label><input ng-model=user.subRace></md-input-container><md-input-container flex><label>Race Ability</label><input ng-model=user.raceAbility></md-input-container></div><div layout layout-sm=column><md-input-container flex><label>Background</label><input ng-model=user.background></md-input-container><md-input-container flex><label>Alignment</label><input ng-model=user.alignment></md-input-container></div><!--<md-input-container flex>--><!--&lt;!&ndash;<label>Race</label>&ndash;&gt;--><!--&lt;!&ndash;<input ng-model="user.race">&ndash;&gt;--><!--</md-input-container>--><div layout layout-sm=column><md-input-container flex><label>Biography</label><textarea ng-model=user.biography columns=1 md-maxlength=500></textarea></md-input-container></div></form></md-content><!--<div class="md-actions" layout="row"><span flex></span>--><!--<md-button ng-click=""> Cancel</md-button>--><!--<md-button ng-click="" class="md-primary"> Save</md-button>--><!--</div>--><!--<div>--><!--<md-content layout-gt-md="row" layout-padding>--><!--<div>--><!--<form name="userForm">--><!--<div layout-gt-sm="row">--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>Character Name</label>--><!--<input ng-model="user.character.fullName">--><!--</md-input-container>--><!--</div>--><!--</form>--><!--</div>--><!--</md-content>--><!--</div>--><!--<div layout-gt-sm="row">--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>First Name</label>--><!--<input ng-model="user.character.firstName">--><!--</md-input-container>--><!--<md-input-container class="md-block" flex-gt-sm>--><!--<label>Last Name</label>--><!--<input ng-model="user.character.lastName">--><!--</md-input-container>--><!--</div>--></div></div></div></div>'),e.put("app/page/page.html",'<div layout=vertical layout-fill><md-content><header><acme-navbar creation-date=main.creationDate></acme-navbar></header><section class=jumbotron><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><md-button class="md-raised animated infinite" ng-class=main.classAnimation ng-click=main.showToastr()>Splendid Toastr</md-button><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></section><div class=techs layout-align=center><md-card ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><md-card-content><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><h3 class=md-title>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p></md-card-content><div class=md-action-buttons><md-button ng-href="{{ awesomeThing.url }}">Website</md-button></div></md-card></div></md-content></div>'),e.put("app/components/navbar/navbar.html",'<md-toolbar layout=row layout-align="center center"><md-button href=https://github.com/Swiip/generator-gulp-angular>Gulp Angular</md-button><section flex layout=row layout-align="left center"><md-button href=# class=md-raised>Home</md-button><md-button href=# class=md-raised>About</md-button><md-button href=# class=md-raised>Contact</md-button></section><md-button class=acme-navbar-text>Application was created {{ vm.relativeDate }}.</md-button></md-toolbar>')}]);
//# sourceMappingURL=../maps/scripts/app-3eabf31015.js.map
