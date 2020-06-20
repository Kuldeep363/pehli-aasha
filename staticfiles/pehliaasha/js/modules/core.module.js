let myApp = angular.module('ngo',['ngRoute','ngResource']);
        myApp.config(($interpolateProvider)=>{
            $interpolateProvider.startSymbol('[[')
            $interpolateProvider.endSymbol(']]')
        })