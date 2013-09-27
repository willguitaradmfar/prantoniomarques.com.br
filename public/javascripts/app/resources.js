
'use strict';

angular.module('myApp.resource', ["ngResource"])

.factory('PostREST', function ($resource) {
      return $resource('post:s/:id', {}, {
        list: {method:'GET', params : {id : 'all', s : 's'}, isArray:true},
        get: {method:'GET', params : {id : 'idPassado'}},
        save: {method:'POST'},
        update: {method:'PUT', params : {id : 'idPassado'}},
        excluir: {method:'DELETE', params : {id : 'idPassado'}}
      });
  })
  ;