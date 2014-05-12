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
				'low': 'rgb(153,255,153)',
				'medium': 'rgb(0,255,0)',
				'high': 'rgb(0,102,0)'
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