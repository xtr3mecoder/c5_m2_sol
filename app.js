(function () {
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var tbc = this;
		tbc.buyItems = ShoppingListCheckOffService.getItems();
		if (tbc.buyItems.length>=1){
			tbc.error = "Everything is bought!";
			tbc.error1 = "Everything is bought!";
		}
		tbc.buyIt = function(item){
			console.log(item);
			ShoppingListCheckOffService.buyAction(item);
		if (tbc.buyItems.length<=0){
			tbc.error = "";
		}
		if (tbc.buyItems.length<=4){
			tbc.error1 = "";
		}
		}
	}
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var abc = this;
		 abc.buyItems = ShoppingListCheckOffService.getBoughtItems();
		
	}
	function ShoppingListCheckOffService() {
  	var service = this;
 	 // List of shopping items
  	var buyItems = [{name: "cookies", q: "9 bags"}, {name: "chips", q: "5 tons"}, {name: "cheese", q: "4 packages"}, {name: "sweets", q: "3 pcs"} , {name: "ham", q: "500g"}];
  	var boughtItems = [];
  	var error = "";
  	service.buyAction = function (itemIndex) {
    var item = {
        name: buyItems[itemIndex].name,
        q: buyItems[itemIndex].q
      };
      boughtItems.push(item);
      buyItems.splice(itemIndex, 1);
      error = "sf";
      console.log(error);
  };
  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };
    service.resetError = function () {
    return error;
  };
  service.getItems = function () {
    return buyItems;
  };
  service.getBoughtItems = function () {
    return boughtItems;
  };
}
})();