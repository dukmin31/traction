$(document).ready(function() {
	setupDataTable();
	getData();
});

function getData(){
	$.getJSON( "http://192.168.33.10:3000/website/", function( data ) {
	  var items = [];
		console.log(data)
	});
}


function setupDataTable(){

	$('.datatable').dataTable({
		"sPaginationType": "bs_full",
		"columnDefs": [ {
			"targets"  : 'no-sort',
			"orderable": false,
			"order": []
		}]
	});

	$('.datatable').each(function(){
		var datatable = $(this);
		// SEARCH - Add the placeholder for Search and Turn this into in-line form control
		var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
		search_input.attr('placeholder', 'Search');
		search_input.addClass('form-control input-sm');
		// LENGTH - Inline-Form control
		var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
		length_sel.addClass('form-control input-sm');
	});
}
