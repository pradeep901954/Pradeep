sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onPress:function(e){debugger;var s=this._view.byId("sales::PurchaseOrderObjectPage--fe::table::purchaseToVehicle::LineItem::DeliveryDetails")._oTable;var i=s.getBinding("rows");if(i){setTimeout(function(){i.refresh()}.bind(this),800)}}}});
//# sourceMappingURL=DateColumn.js.map