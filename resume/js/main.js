var parseHashRequest = function() {
	if (location.hash.split("#").length > 1) {
		var hashValue = location.hash.split("#")[1];
		if (hashValue == "print") {
			if ($("head").find("link[href='css/print.css']").length == 0) {
				$("head").append('<link href="css/print.css" rel="stylesheet" type="text/css" />')
			}
		} else {
			if ($("head").find("link[href='css/print.css']").length == 1) {
				$("head").find("link[href='css/print.css']").remove();
			}
		}

	} else {
		if ($("head").find("link[href='css/print.css']").length == 1) {
			$("head").find("link[href='css/print.css']").remove();
		}
	}
};

$("document").ready(function() {
	$(window).on('hashchange', function() {
		parseHashRequest();
	});

	parseHashRequest();
})

