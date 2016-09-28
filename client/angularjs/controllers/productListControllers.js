angular.module("sportsStore")
.constant("productListAtiveClass", "btn-primary")
.constant("productListPageCount", 3)
.controller("productListCtrl", function($filter,productListAtiveClass,
   productListPageCount){
  var selectedCategory = null;
  this.selectedPage = 1;
  this.pageSize = productListPageCount;

  this.selectedCategory = function(newCategory) {
    selectedCategory = newCategory;
    this.selectedPage = 1;
  }

  this.selectPage = function(newPage){
    this.selectedPage = newPage;
  }
  this.categoryFilterFn = function(product) {
    return selectedCategory == null || product.category == selectedCategory;
  }
  this.getCategoryClass = function(category) {
    return selectedCategory == category ? productListAtiveClass: "";
  }
  this.getPageClass = function(page){
    return this.selectedPage == page ? productListAtiveClass: "";
  }
});
