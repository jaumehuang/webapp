var myApp = angular.module("myAppcc", []);
myApp.config(function($provide) {
	$provide.provider("change_page", function() {
		this.$get = function() {
			var factorty = {};
			factorty.calc = function(_obj) {
				var _total = 0;
				for(var i = 0; i < _obj.students.length; i++) {
					if(JSON.stringify(_obj.students[i][_obj.colname]).indexOf(_obj.keyWord) > -1) {
						_total++;
					}
				}
				_obj.pagecount = Math.ceil(_total / _obj.pagerows);
			}
			return factorty;
		}
	})
})
myApp.service("myselect", function() {

	this.calc = function(_studen, _obj) {

		if(_obj.colname) {
			if(JSON.stringify(_studen[_obj.colname]).indexOf(_obj.keyWord) > -1) {
				return _studen;
			}
		} else {
			return _studen;
		}
	}
	return this;
});
myApp.filter('range', function() {
	return function(array, range) {
		for(var i = 1; i <= range; i++) {
			array.push(i);
		}
		return array;
	}
})