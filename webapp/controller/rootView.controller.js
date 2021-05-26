sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("IntQ.IQuestion.controller.rootView", {
		onInit: function () {
			var oPositionsModel = new sap.ui.model.json.JSONModel();
			oPositionsModel.loadData("model/Positions.json");
		//	sap.ui.getCore().setModel("model/Positions.json");
			//this.getView().setModel(oPositionsModel);
			this.getView().setModel(oPositionsModel, "LOCALMODEL");
			oPositionsModel.attachRequestCompleted(function (oEvent) {
				sap.ui.getCore().setModel(oEvent.getSource());
			});
		},
		onBeforeRendering: function () {
			var oJsonModel = new sap.ui.model.json.JSONModel();
			var oDataModel = this.getView().getModel();
			var oList = this.getView().byId("table1");

			var that = this;
			//that.getView().byId("idObjectHeader").setTitle ="poooooo";
			oDataModel.read("/Customers", {
				"method": "GET",
				"success": function (data) {
					console.log(data);
					//	that.getView().byId("idText1111").setText = "KD";
					oJsonModel.setData(data);
					oList.setModel(oJsonModel, "JSONMODEL");
					//	that.getView().byId("idObjectHeader").setTitle = oJsonModel.getData().results[0].CompanyName;      
					//	that.getView().byId("idObjectHeader").setTitle ="KKDKKDKDKDDKDKDK";
					//this.getView().byId("movie_name");

				}

			});
		},
		onPress: function (oEvent) {
			var oBtn = oEvent.getSource();
			oBtn.setText("Now Add Name from Controller !");
		}
	});
});