(function () {
    'use strict';

    angular.module('BlogApp', [])
        .controller('BlogAppController', BlogAppController)
        .service('BlogGetService', BlogGetService)
        .constant('ApiBasePath', "https://github.com/Curiosity-431/Blog-Api/blob/master");
       // .directive('BlogItems', BlogItemsDirective);


    BlogAppController.$inject = ['BlogGetService'];

    function BlogAppController(BlogGetService) {
        var blog = this;

        var promise = BlogGetService.getBlogItems();

        promise.then(function (response) {
                blog.quotes = response.data;
            })
            .catch(function (error) {
                console.log("Something went terribly wrong.");
            });


    }

    BlogGetService.$inject = ['$http', 'ApiBasePath'];

    function BlogGetService($http, ApiBasePath) {
        var service = this;

        service.getBlogItems = function () {
            var response = $http({
                method: "GET",
<<<<<<< HEAD
                url: "json/blog_quotes_api.json"
=======
                url: "https://github.com/Curiosity-431/Blog-with-AngularJS/blob/master/json/blog_quotes_api.json"
>>>>>>> 846f0dc868d2f0eee8e23c583d98d16a8dedaec5
            });

            return response;
        };
    }





})();
