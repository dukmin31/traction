$(document).ready(function() {
	setupTable();

});

function setupTable(){
	$.ajax({
		"type": "GET",
		"url": "http://192.168.33.10:3000/website/",
		"success": function (data) {
			setupDataTable(data);
		}
	});
}

function setupDataTable(data){
	$('#siteTable').dataTable({
				"aaSorting": [[0, "asc"]],
				"aaData": data,
				"bScrollCollapse": true,
				"bFilter": true,
				"bProcessing": true,
				"sPaginationType": "full_numbers",
				"bJQueryUI": true,
				"columnDefs": [ {
					"targets"  : 'no-sort',
					"orderable": false,
					"order": []
				}],
				"aoColumnDefs": [
								{ "sWidth": "1em", "aTargets":  [0] },
								{ "sWidth": "20em", "aTargets": [1] },
								{ "sWidth": "7em", "aTargets":  [2] },
								{ "sWidth": "7em", "aTargets":  [3] }
					],
				"aoColumns": [
					{ "sTitle": "Rank" ,"mDataProp": "rank"},
					{ "sTitle": "URL", "mDataProp": "url"},
					{ "sTitle": "Page Views per user", "mDataProp": "page_views_per_user" },
					{ "sTitle": "Page Views per million", "mDataProp": "page_views_per_million" }]
	});

	$('#siteTable tr').click(function () {
		console.log(this);
	});
}
