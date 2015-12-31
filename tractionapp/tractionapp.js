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
				"createdRow": function ( row, data, index ) {
					 $('td', row).click(function(){
						 showModal(data)
					 });
			 	},
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
}

function showModal(website){
	$("#modalLabel").text(website.url);
	createElementsOnModal($("#websiteModalBody"), website)
	$("#websiteModal").modal();

	$("#saveChangesButton").click(submitForm);
}

function submitForm(){
	console.log('enviar');
	$.ajax({
			 type: "PUT",
			 url: "http://192.168.33.10:3000/website/update",
			 data: $("#websiteForm").serialize(), // serializes the form's elements.
			 success: function(data)
			 {
					 alert("Success!");
			 },
			 error: function(data)
			 {
				 alert("Problem!");
			 }
		 });
}

function createElementsOnModal(modal, website){
	var html =
	[ "<form id='websiteForm'>",
	  "<div class='form-group'>",

		"<h3>Rank:", website.rank,"</h3>",
		"<label for='recipient-name' class='control-label'>URL:</label>",
		"<input class='form-control' name='url' type='text' value='", website.url , "'/>",

		"<input type='hidden' name='rank' value='", website.rank , "'/>",

		"<label for='recipient-name' class='control-label'>Page Views per user:</label>",
		"<input class='form-control' name='page_views_per_user' type='text' value='", website.page_views_per_user , "'/>",

		"<label for='recipient-name' class='control-label'>Pages Views per million:</label>",
		"<input class='form-control' name='page_views_per_million' type='text' value='", website.page_views_per_million , "'/>",

		"</div></form>"
	].join("");

	modal.html(html);

}
