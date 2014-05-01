var Mdata = {};
var mapD = {};

$(document).ready(function(){

	$.getJSON("http://localhost:3000/mongo", function(data) {
	
		var Mdata = data; 

		console.log("OK");

		console.log(Mdata);

		mapD = {
			
			element: document.getElementById('container'),

			scope: 'usa',

			fills: {
				defaultFill: 'rgb(240,240,240)',
				'low': 'rgb(199,233,255)',
				'medium': 'rgb(159,217,255)',
				'high': 'rgb(2,155,255)'
			},

			data: Mdata[0],

			geographyConfig: {

				popupTemplate: function(geo, data) {
					
				return '<div class="hoverinfo"><strong>' + geo.properties.name + '</strong><li>Income: ' + data.Income + '</li></div>';

					
				}

			}

		};

		$("#container").datamaps(mapD);

	});

});