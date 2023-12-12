let localLibs = false;
let localCommon = false;
let localUi = false;

if (window.location.host.indexOf("localhost") === 0) {
	if (localLibs) {
		jQuery.sap.registerModulePath("ula.mes.common", "http://localhost:8082");
		jQuery.sap.registerModulePath("ula.mes.ui", "http://localhost:8083");
		jQuery.sap.registerModulePath("ula.mes.oms.barriers", "/sap/bc/ui5_ui5/sap/zoms_barriers");
	} else if (localCommon) {
		jQuery.sap.registerModulePath("ula.mes.common", "http://localhost:8082");
		jQuery.sap.registerModulePath("ula.mes.ui", 	"/sap/bc/ui5_ui5/sap/zmes_ui");
		jQuery.sap.registerModulePath("ula.mes.oms.barriers", "/sap/bc/ui5_ui5/sap/zoms_barriers");
	} else if (localUi) {
		jQuery.sap.registerModulePath("ula.mes.common", "/sap/bc/ui5_ui5/sap/zmes_common");
		jQuery.sap.registerModulePath("ula.mes.ui", "http://localhost:8083");
		jQuery.sap.registerModulePath("ula.mes.oms.barriers", "/sap/bc/ui5_ui5/sap/zoms_barriers");
	} else {
		jQuery.sap.registerModulePath("ula.mes.common", "/sap/bc/ui5_ui5/sap/zmes_common");
		jQuery.sap.registerModulePath("ula.mes.ui", 	"/sap/bc/ui5_ui5/sap/zmes_ui");
		jQuery.sap.registerModulePath("ula.mes.oms.barriers", "/sap/bc/ui5_ui5/sap/zoms_barriers");
	}
} else {
	jQuery.sap.registerModulePath("ula.mes.common", "/sap/bc/ui5_ui5/sap/zmes_common");
	jQuery.sap.registerModulePath("ula.mes.ui", 	"/sap/bc/ui5_ui5/sap/zmes_ui");
	jQuery.sap.registerModulePath("ula.mes.oms.barriers", "/sap/bc/ui5_ui5/sap/zoms_barriers");
}
//....
