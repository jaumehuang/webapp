
var common = common || {};
common.baseUrl ='../libs/php/';
var commonApp = angular.module('commonApp', []);

commonApp.directive('dkRepeat', function () {
    return function (_scope) {
    // console.log(arguments);
    // console.log(_scope.columnName);
    // console.log(_scope.dictionary);
    }
});

commonApp.directive('datagrid', function () {
    return {
        restrict: 'E',
        templateUrl: 'template/datagrid.html',
        scope: {},
        controller: function ($scope, $element, $attrs, $http) {

            $http.get($attrs.api).success(function (response) {

                console.log($attrs.language);
                console.log($attrs.dic);
                $http.get($attrs.dic).success(function(_dic){
                    console.log(_dic);
                    var dicArr = [];
                    for(var _d in _dic){
                        dicArr.push(_d);
                    }

                    for(var i = 1; i<$('th').length; i++){
                        var cur = dicArr[i-1];
                        $('th').eq(i).text(_dic[cur][$attrs.language]);
                    }

                })
                $scope.index = 1;
                $scope.students = response.data;
                //每页行数
                $scope.pageRows = $attrs.rowsnum;
                //总页数
                $scope.pageCount = Math.ceil($scope.students.length / $scope.pageRows);
                // console.log($scope.pageCount);
                $scope.colspan = 0;
                for(var key in $scope.students[0]){
                    $scope.colspan ++;
                }

                var arr = [];
                for(var i = 1; i<=$scope.pageCount; i++){
                    arr.push(i);
                }
                $scope.lists = arr;
                
                
                $scope.mySearch = function(params){
                    if($scope.keyWords){
                        if((params[$scope.keyWords] + '').indexOf($scope.keyWord) > -1){
                            return params;
                        }
                    }else{
                        return params;
                    }
                }

                $scope.filterchange = function(){
                    var total = 0;
                    for(var i = 0; i<$scope.students.length; i++){
                        if(($scope.students[i][$scope.keyWords] + '').indexOf($scope.keyWord) > -1){
                            total++;
                            console.log(total);
                        }
                    }
                    // console.log(total);
                    $scope.pageCount = Math.ceil(total / $scope.pageRows);
                }
            });

            $scope.trClick = function (_tr, _index, _event) {
                if ($attrs.multiple == 'true') {
                    $(_event.target).closest('tr').toggleClass('tr-selected');
                } else {
                    $(_event.target).closest('tr').addClass('tr-selected').siblings('tr').removeClass('tr-selected');
                }
            }
        },
        link: function (_scope, _element, _attrs) {
        }
    }
})

commonApp.filter('range',function(){
    return function(array,range){
        for(var i = 1; i<=range; i++){
            array.push(i);
        }
        return array;
    }
})

commonApp.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.defaults.transformRequest=function(obj){
        var str=[];
        for(var p in obj){
            str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };
    $httpProvider.defaults.headers.post={
        'Content-Type':'application/x-www-form-urlencoded'
    }      
    $httpProvider.interceptors.push(function ($rootScope, $q) {
        return {
            'request': function (config) {
                //请求执行
                if (!$('.mask')[0]) {
                    var _html = '<div class="mask item-hidden"><i class="fa fa-spinner fa-spin"></i></div>';
                    $(_html).appendTo($('body'));
                }
                $('.mask').removeClass('item-hidden');
                if (config.url.indexOf('.html') < 0 && config.url.indexOf('.php') < 0) {
                    config.url = common.baseUrl + config.url;
                }
//              if (config.url.indexOf('.html') < 0 && config.url.indexOf('.txt') < 0) {
//              	 config.url = common.baseUrl + config.url;
//              }
                config.params = $.extend(config.params,{ '_': Math.random() });
                return config || $q.when(config);
            },
            'requestError': function (rejection) {
                //请求出错的时候执行
                return rejection;
            },
            'response': function (response) {
                //响应成功的回调函数
                $('.mask').addClass('item-hidden');
                return response || $q.when(response);
            },
            'responseError': function (response) {
                //响应失败的回调函数
                $.alert(response.status + ' - ' + response.statusText + '<br/>请求路径：<br/>' + response.config.url, '请求错误');
                $('.mask').addClass('item-hidden');
                return $q.reject(response);
            }
        };
    });
}]);