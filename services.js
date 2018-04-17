function wsReqData1() {

	var data;

	$.ajax({
		headers: { 'X-Auth-Token': 'ee7a747a1ee64483b4a3424687851263' },
		url : "https://api.football-data.org/v1/competitions/430/leagueTable",
//		url: "http://api.football-data.org/v1/fixtures?timeFrame=n1",
		// hier der Anfrage typ (z.B. Get, Post, Put…)
		type : "GET",
		dataType : "json",
		async : false,
		success : function(data) {
			// in der Variable data ist jetzt dein datenmodel hinterlegt
			alert(JSON.stringify(data));
		},
		error : function(error) {
			console.log("", error);
		}
	});

}

function wsReqData2() {
	var oODataModel = new sap.ui.model.odata.v2.ODataModel("https://sap-d22.abatgroup.de:44300/sap/opu/odata/SAP/Z_POC_MATERIAL_SRV?sap-client=101&sap-language=DE");
	
	oODataModel.read("/materialSet('EWMS4-WBTRO00')", {
	    success: function(data) {
	        alert(JSON.stringify(data));
	    },
	    error: function() {
	    	alert ("error");
	    }
	});	

	
}
