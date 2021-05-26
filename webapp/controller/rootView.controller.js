sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("IntQ.IQuestion.controller.rootView", {
		onInit: function () {

		},
		onBeforeRendering : function(){
			var oJsonModel = new sap.ui.model.json.JSONModel();                  
			var oDataModel = this.getView().getModel();
			var oList = this.getView().byId("table1");
			
			var that = this;
			oDataModel.read("/Customers", {
				"method":"GET",
				"success":function(data){
					console.log(data);
					oJsonModel.setData(data);
					oList.setModel(oJsonModel,"JSONMODEL");
				//	that.getView().byId("header0").setTitle = oJsonModel.getData().results[0].CompanyName;      
				//	that.getView().byId("header0").setTitle ="KKDKKDKDKDDKDKDK";
					//this.getView().byId("movie_name");

				}
				
			});
		}
	});
});

/*
	var oList = this.getView().byId("table1");
			var oJsonModel = new sap.ui.model.json.JSONModel();
			// oList.setModel(oModel);

			var oModel = this.getView().getModel("ES5Model");
			oModel.read("/Suppliers", {
				"method": "GET",
				"success": function (data) {
					console.log(data);
					oJsonModel.setData(data);
					oList.setModel(oJsonModel, "JSONMODEL");
				}
			});
*/