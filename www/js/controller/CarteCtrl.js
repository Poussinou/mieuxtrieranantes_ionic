/* CARTE */

angular.module('starter.controllers')
.controller('CarteCtrl', 
            function($scope, $state, RechercheService, ParamService) {
                
       //ServiceStructures, leafletData, leafletMapEvents
       // $scope.modeCollecte = [ { "code" : "smco_conteneurlerelais", "libelle" : "Conteneur Le Relais" }, { "code" : "modco_contpapiercarton", "libelle" : "Conteneur papier/carton"} ];
      $scope.modeCollecte = RechercheService.getAFilter("filter_map");
      $scope.selected = {};
   
      // http://stackoverflow.com/questions/36931140/ionic-angularjs-checkbox-and-ng-repeat-from-api
      angular.forEach($scope.modeCollecte, function(val, index) {
            $scope.selected[val.id] = "true";
            $scope.modeCollecte[index].checked = false;
        })
	    // handle search
      $scope.checked = function(key, status) {
            if (status == true) {
                $scope.modeCollecte[key].checked = true;
            } else {
                $scope.modeCollecte[key].checked = false;
            }
      }
      $scope.onSearchSubmit = function() {
        var temp = "";
        angular.forEach($scope.modeCollecte, function(val, index) {
            if ($scope.modeCollecte[index].checked == true) {
              temp += $scope.modeCollecte[index].id+",";
            }
        })
        ParamService.setValueInLocalStorage("filter_map_checked", temp);
        $state.go('tab.carte-detail');
     };

            //CONTENEURS
            
            //$scope.markers = ServiceStructures.getLeafletContainers($scope.center); 

            //var leafletEventName = 'leafletDirectiveMap.moveend';
            /*
            $scope.$on(leafletEventName, function(event) {
                    //$scope.eventDetected = event.name;                     
                    leafletData.getMap().then(function(map) {

                           $scope.markers = ServiceStructures.getLeafletContainers(map.getCenter()); 
                           var circle= {
                                type: "circle",
                                radius: 1200,
                                latlngs: map.getCenter(),
                                color : 'green',
                                fillColor : '#c2e47e',
                                fillOpacity : 0.3,
                                weight : 3
                           };
                           $scope.paths = {};
                           $scope.paths['circle'] = circle;

                    });

            });*/
    
})
.controller('CarteDetailCtrl', 
            function($scope, $stateParams, leafletMarkerEvents, CarteService, ParamService, RechercheService) {
            
      var filterMap = ParamService.getValueInLocalStorage("filter_map_checked");
      var modeCollecte = RechercheService.getAFilter("filter_map");
      var listFilterMap = filterMap.split(",");
      var codesModeCollecte = "";
      for (var i=0; i<modeCollecte.length;i++) {
            var ajoutModeCollecte = false;
            for (var j=0; j<listFilterMap.length && ajoutModeCollecte===false;j++) {
              if (modeCollecte[i].id===listFilterMap[j]) {
                ajoutModeCollecte = true;
              }
            }
            if (ajoutModeCollecte) {
              codesModeCollecte += modeCollecte[i].code + ",";
            }
        }
      // var temp=0;
     
            angular.extend($scope, {
                center: {
                    lat: ParamService.getNumberParam("geo.defaultLat", 47.240987),
                    lng: ParamService.getNumberParam("geo.defaultLong", -1.8),
                    // zoom: ParamService.getNumberParam("geo.zoomInit", 10)
                    zoom : 10
                },
                layers:
                {
                        baselayers: {
                            openStreetMap: {
                                name: 'OpenStreetMap',
                                type: 'xyz',
                                url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                            }
                        },
                        overlays: {
                            container: {
                                type: 'group',
                                name: 'containers',
                                visible: true
                            }
                        }
                },
                
            });
            
            
            $scope.$on("leafletDirectiveMap.mymap.load", function(event, args){
                var leafEvent = args.leafletEvent;
                $scope.markers = CarteService.getLeafletContainers($scope.center, codesModeCollecte);
                console.log('markers');
            });
            
            //Récupération des marqueurs Leaflets
            $scope.codesModeCollecte = codesModeCollecte;
            

                
});