var barChartData = {
	labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
	datasets: [
		{
			label: "January",
			//backgroundColor: "rgba(12,56,0,1)",
			backgroundColor: "rgba(215,51,0,0.08)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [0, 2, 1, 5, 4, 5, 3]
		},
		{
			label: "February",
			backgroundColor: "rgba(215,51,0,0.16)",
			//backgroundColor: "rgba(14,70,0,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [0, 2, 1, 4, 5, 3, 13]
		},
		{
			label: "March",
			backgroundColor: "rgba(215,51,0,0.24)",
			//backgroundColor: "rgba(17,85,0,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [0, 2, 9, 6, 7, 14, 17]
		},
		{
			label: "April",
			backgroundColor: "rgba(215,51,0,0.32)",
			//backgroundColor: "rgba(20,99,0,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [3, 3, 7, 6, 10, 13, 21]
		},
		{
			label: "May",
			backgroundColor: "rgba(215,51,0,0.41)",
			//backgroundColor: "rgba(23,113,0,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [2, 3, 7, 5, 10, 11, 8]
		},
		{
			label: "June",
			backgroundColor: "rgba(215,51,0,0.50)",
			//backgroundColor: "rgba(26,127,0,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [2, 3, 4, 2, 1, 7, 7]
		},
		{
			label: "July",
			backgroundColor: "rgba(215,51,0,0.58)",
			//backgroundColor: "rgba(29,141,0,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [1, 2, 4, 2, 2, 5, 7]
		},
		{
			label: "August",
			backgroundColor: "rgba(215,51,0,0.66)",
			//backgroundColor: "rgba(52,152,25,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [1, 2, 3, 4, 4, 7, 6]
		},
		{
			label: "September",
			backgroundColor: "rgba(215,51,0,0.74)",
			//backgroundColor: "rgba(74,164,51,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [4, 2, 3, 6, 5, 13, 13]
		},
		{
			label: "October",
			backgroundColor: "rgba(215,51,0,0.82)",
			//backgroundColor: "rgba(97,175,77,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [2, 4, 5, 8, 10, 10, 15]
		},
		{
			label: "November",
			backgroundColor: "rgba(215,51,0,0.91)",
			//backgroundColor: "rgba(119,187,102,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [3, 7, 7, 7, 13, 13, 17]
		},
		{
			label: "December",
			backgroundColor: "rgba(215,51,0,1)",
			//backgroundColor: "rgba(142,198,128,1)",
			strokeColor: "rgba(220,220,220,0.8)",
			highlightFill: "rgba(220,220,220,0.75)",
			highlightStroke: "rgba(220,220,220,1)",
			data: [2, 4, 4, 4, 8, 6, 14]
		},
	]
};
//window.onload = function () {
function renderChart() {
	var ctx = document.getElementById('chart1').getContext('2d');
	window.myBar = new Chart(ctx, {
		type: 'bar',
		data: barChartData,
		options: {
			title: {
				display: false,
				text: 'CTFs Per year and Month'
			},
			legend: {
				display: false
			},
			tooltips: {
				//display: false
				mode: 'index',
				intersect: false
			},
			responsive: true,
			scales: {
				xAxes: [{
					stacked: true,
				}],
				yAxes: [{
					stacked: true
				}]
			}
		}
	});
};



Reveal.addEventListener( "chart1", function( event ) {
	if ( event.type && event.type == "chart1" )
	{
		renderChart();
	}
});