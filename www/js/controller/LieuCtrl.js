/* LIEUX */

angular.module('starter.controllers')
.controller('LieuCtrl',

        function($scope, $ionicPopup, RechercheService) {

            $scope.maxDisplayResults = 250;
     	    $scope.debug = false;
            
            //SELECT Type de structures                 
            $scope.typeCollecte = RechercheService.getAFilter("filter_collect_types");
           
            //FORM MODEL : DEFAULTS
            $scope.formParam = {
                type : $scope.typeCollecte[0],
                searchkey : ''
            };


            //INIT RESULTS
            $scope.results = RechercheService.searchStructure(paramAllPlaces, '');


            $scope.onSearchSubmit = function() {          
                $scope.results = RechercheService.searchStructure($scope.formParam.type.code, $scope.formParam.searchkey);
				if ($scope.formParam.searchkey.indexOf(" ")>-1) {
					$scope.onlyOneResult = "1";
				} else {
					$scope.onlyOneResult = null;
				}
            };


            //Choix du type de lieu (popup)
            $scope.selectTypeLieuPopup = function () {
              
              $ionicPopup.show({
              template: '<div ng-repeat="obj in typeCollecte"> <ion-radio ng-model="formParam.type" ng-value="obj">{{obj.nom}}</ion-radio> </div>',
              cssClass: 'popup-lieu',
              title: 'Type de lieu',
              scope: $scope,
              buttons: [
                {
                  text: 'OK',
                  type: 'button-positive',
                  onTap: function(e) {

                    $scope.onSearchSubmit();
                    
                  }
                }
              ]
            });

          };

  
})
.controller('LieuDetailCtrl',

        function($scope, $stateParams, RechercheService, $rootScope) {
            
             $scope.debug = false;
             
            var code = $stateParams.code;
            $scope.structure = RechercheService.getStructure(code);
            
            // $scope.isNavigator = _isNavigator();
            // $scope.isNavigator && 
            if ($scope.structure.photos) {
                $scope.lstPhotos = $scope.structure.photos.split(",");
            } else {
                $scope.lstPhotos = [];
            }
            
            if ($scope.structure.tel) {
                $scope.lstTel = $scope.structure.tel.split(",");
            } else {
                $scope.lstTel = [];
            }
            
            // Open Geo
			// RM-TR_NAVIG_01 : Le bouton “y aller” permet de lancer l’application associée aux itinéraires, ou sur un PC d’ouvrir le site google maps.
            $scope.openMapLink = function(latitude, longitude) {
              var geoString = '';
              if(ionic.Platform.isIOS()) {
                geoString = 'maps://?q='+latitude+','+longitude+'';
              }
              else if(ionic.Platform.isAndroid()) {
                geoString = 'geo://?q='+latitude+','+longitude+'';
              } else {
                geoString = 'http://maps.google.fr/maps?f=q&hl=fr&q='+latitude+','+longitude+'';
              }
              window.open(geoString, '_system');
            }
            
            // Open Phone
			// RM-TR_NAVIG_02 : Le bouton “appeler” permet de lancer l’application associée aux itinéraires, ou sur un PC d’ouvrir le site google maps.
            $scope.openPhoneLink = function(tel) {
              var telString = 'tel:'+tel+'';
              window.open(telString, '_system');
            }
            
            // Open Link
			// RM-TR_NAVIG_03 : Le bouton “écrire” permet de lancer l'application associée aux emails, ou sur un PC est un mailto.
            $scope.openHrefLink = function(url) {
              window.open(url, '_system', 'location=yes');
              return false;
            }
        }
);

