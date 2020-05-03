$$(document).on('page:init', '.page[data-name="resolved"]', function () {
	view.html = '';
	for (var i = 0; i < data.length; i++) {
		view.html += '<div class="col-100 card ngalongware-color-bg-blue" id="' + data[i].id + '-btn" >' + 
				'<div class="card-content card-content-padding" >' +
					'<div class="row">' +
						'<div class="col-50"><strong>' + data[i].code + '</strong></div>' +
						'<div class="col-50 ngalongware-right">' +
							'Issuer: ' + '<strong>' + data[i].issuer + '</strong><br />' +
							'Resolver: ' + '<strong>' + data[i].resolver + '</strong></div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col-50">' + data[i].deptIssue + '</div>' +
						'<div class="col-50 ngalongware-right">' + 
							'Issue Date: ' + data[i].issuedDate + '<br />' +
							'Resolve Date: ' + data[i].resolvedDate + '</div>' + 
					'</div>' +
					'<div class="row">' +
						'<div class="col-100 ngalongware-center">' + 
							'<h3>Deskripsi Issue</h3>' +
							data[i].descIssue + 
						'</div>' +
						'<div class="col-100 ngalongware-center">' + 
							'<h3>Deskripsi Resolve</h3>' +
							data[i].descResolve + 
						'</div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col-50">' +
							'<a href="#" class="text-color-green" id="issue-'+ data[i].id + '-btn-approve">' +
								'<strong>Approve</strong>' + 
							'</a>' +
						'</div>' +
						'<div class="col-50 ngalongware-right">' +
							'<a href="#" class="text-color-red" id="issue-'+ data[i].id + '-btn-delete">' +
								'<strong>Hapus</strong>' + 
							'</a>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
	}
	
	$$("#submit-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$('#list-resolved').html(view.html);
	$$(".ngalongware-footer").html('<div class="ngalongware-center">' +
			'<div class="ngalongware-font-9">' + 'CLASS MOBILE - panpan &copy; 2020' + '</div>' +
			'<br />' +
		'</div>');
});
