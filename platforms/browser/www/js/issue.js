$$(document).on('page:init', '.page[data-name="issue"]', function () {
	view.html = '';
	for (var i = 0; i < data.length; i++) {
		view.html += '<div class="col-100 card ngalongware-color-bg-blue" id="' + data[i].id + '-btn" >' + 
				'<div class="card-content card-content-padding" >' +
					'<div class="row">' +
						'<div class="col-50"><strong>' + data[i].code + '</strong></div>' +
						'<div class="col-50 ngalongware-right"><strong>' + data[i].issuer + '</strong></div>' +					
					'</div>' +
					'<div class="row">' +
						'<div class="col-50">' + data[i].deptIssue + '</div>' +
						'<div class="col-50 ngalongware-right">' + data[i].issuedDate + '</div>' + 
					'</div>' +
					'<div class="row">' +
						'<div class="col-100 ngalongware-center">' + 
							'<h3>Deskripsi Issue</h3>' +
							data[i].descIssue + 
						'</div>' +
					'</div>' +
					'<div class="row">' +
						'<div class="col-30">' +
							'<a href="#" class="text-color-white" id="issue-'+ data[i].id + '-btn-update">' +
								'<strong>Ubah</strong>' + 
							'</a>' +
						'</div>' +
						'<div class="col-30 ngalongware-center">' +
							'<a href="#" class="text-color-green" id="issue-'+ data[i].id + '-btn-resolve">' +
								'<strong>Resolve</strong>' + 
							'</a>' +
						'</div>' +
						'<div class="col-30 ngalongware-right">' +
							'<a href="#" class="text-color-red" id="issue-'+ data[i].id + '-btn-delete">' +
								'<strong>Hapus</strong>' + 
							'</a>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';
	}
	
	$$('#list-issue').html(view.html);
	$$(".ngalongware-footer").html('<div class="ngalongware-center">' +
			'<div class="ngalongware-font-9">' + 'FOLINE &copy; 2020' + '</div>' +
			'<br />' +
		'</div>');
});