sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"Format/CustomFormat/formatter/format"
], function (Controller,format) {
	"use strict";
	
	return Controller.extend("Format.CustomFormat.controller.View1",{
		
		formatter:format
		
		
	});
	
});