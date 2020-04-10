/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Demo_app/first_baseUI5app/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});