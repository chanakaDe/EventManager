/**
 * Created by chanaka on 5/17/15.
 */
function PurchaseController($scope, supplierService, inventryService, invoiceService) {

    $scope.allSuppliers = [];
    $scope.allItems = [];


    //Get all suppliers
    supplierService.getAllSuppliers().then(function (data) {
        $scope.allSuppliers = data.data;
    });

    //Get all items
    inventryService.getItemsforview().then(function (data) {
        console.log(data);
        $scope.allItems = data.data;
    });

    $scope.savePurchaseOrder = function () {
        var purchase = $scope.purchase;

        supplierService.savePurchaseOrderService(purchase).then(function (data) {
            console.log(data);
        });
    };

    $scope.getItemPrice = function () {
        var itemid = $scope.purchase.itemcode;
        console.log(itemid);
        invoiceService.getItemPriceView(itemid).then(function (data) {
            console.log(data);
            $scope.invoice.rate = data.data.retailPrice;
            console.log("Price : " + $scope.invoice.rate)
        });
    };

}