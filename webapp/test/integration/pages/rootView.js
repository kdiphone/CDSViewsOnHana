sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "rootView";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The rootView view is displayed");
						},
						errorMessage: "Did not find the rootView view"
					});
				}
			}
		}
	});

});

/*
	return this.waitFor({
						id: "idPress",
						viewName: sViewName,
						matchers:new sap.ui.test.matchers.PropertyStrictEquals({
							name: "text",
							value:"Now Add Name from Controller !"
						}),
						success: function () {
							Opa5.assert.ok(true, "The rootView view is displayed");
						},
						errorMessage: "Did not find the rootView view"
					});
				}
*/