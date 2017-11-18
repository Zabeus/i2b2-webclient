{
	urlProxy: "index.php",
	urlFramework: "js-i2b2/",
	//-------------------------------------------------------------------------------------------
	// THESE ARE ALL THE DOMAINS A USER CAN LOGIN TO
	lstDomains: [
		{ domain: "UTHealth",
		  name: "UTHealth",
		  urlCellPM: "http://localhost:9090/i2b2/services/PMService/",
		  allowAnalysis: true,
		  debug: true
		},
                { domain: "UTHealth",
                  name: "UTHealth Admin",
                  urlCellPM: "http://localhost:9090/i2b2/services/PMService/",
                  allowAnalysis: true,
                  debug: true,
                  adminOnly: true
                }
	]
	//-------------------------------------------------------------------------------------------
}
