/**
 * Created by ChanakaDeSilva on 2/16/2015.
 */

module.factory('supplierService', function ($http) {

    var supplierService = {
        /**
         * Get all roles from server
         *
         * @returns {*}
         */

        getAllSuppliers: function () {

            return $http({
                method: "GET",
                headers: headers,
                url: host.supplier + '/search_all'
            }).then(function (response) {
                return response.data;
            });

        },
        savePurchaseOrderService: function (data) {

            return $http({
                method: "POST",
                data: data,
                headers: headers,
                url: host.purchase_order + '/save'
            }).then(function (response) {
                return response.data;
            });

        }
    };
    return supplierService;
});