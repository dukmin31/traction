angular.module('tractionapp', ['datatables', 'ngResource'])
.controller('WithAjaxCtrl', WithAjaxCtrl);

function WithAjaxCtrl($scope, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
		vm.message = '';
		vm.clickHandler = clickHandler;
    vm.dtOptions = DTOptionsBuilder.fromSource('http://192.168.33.10:3000/website/')
        .withPaginationType('full_numbers')
				.withOption('rowCallback', rowCallback);

    vm.dtColumns = [
        DTColumnBuilder.newColumn('rank').withTitle('Rank'),
        DTColumnBuilder.newColumn('url').withTitle('URL'),
				DTColumnBuilder.newColumn('page_views_per_user').withTitle('Page Views per user'),
        DTColumnBuilder.newColumn('page_views_per_million').withTitle('Page Views per million')
    ];

		vm.dtInstance = {};

		function clickHandler(website) {
				 vm.message = website.rank + ' - ' + website.url;
				 $("#modalLabel").text(website.url);
				 createElementsOnModal($("#websiteModalBody"), website)
				 $("#websiteModal").modal();

				 $("#saveChangesButton").click(submitForm);

				 $('#websiteModal').on('hidden.bs.modal', function () {
  			 		$("#callback-message").addClass("hidden");
						$("#callback-message").removeClass("alert-success alert-danger");
						$("#callback-message").text("");
						vm.dtInstance.rerender();
				 })
		 }

		function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
				// Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
				$('td', nRow).unbind('click');
				$('td', nRow).bind('click', function() {
						$scope.$apply(function() {
								vm.clickHandler(aData);
						});
				});
				return nRow;
		}
}

function submitForm(){
	console.log('enviar');
	$.ajax({
			 type: "PUT",
			 url: "http://192.168.33.10:3000/website/update",
			 data: $("#websiteForm").serialize(), // serializes the form's elements.
			 success: function(data)
			 {
				 	$("#callback-message").removeClass("hidden");
				  $("#callback-message").addClass("alert-success");
				 	$("#callback-message").text("Success!")
			 },
			 error: function(data)
			 {
				 $("#callback-message").addClass("alert-danger");
				 $("#callback-message").text("Problem!")
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
