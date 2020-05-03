$$(document).on('page:init', '.page[data-name="search-issue"]', function () {
	view.html = '';
	for (var i = 0; i < data.length; i++) {
		if (data[i].code == searchIssueCode) {
			view.html += '<div class="col-100 card ngalongware-color-bg-blue" id="' + data[i].id + '-btn" >' + 
					'<div class="card-content card-content-padding" >' +
						'<div class="row">' +
							'<div class="col-50"><strong>' + data[i].code + '</strong></div>' +
							'<div class="col-50 ngalongware-right">' +
								'Issuer: ' + '<strong>' + data[i].issuer + '</strong><br />' +
								'Resolver: ' + '<strong>' + data[i].resolver + '</strong><br />' +
								'Approver: ' + '<strong>' + data[i].approver + '</strong></div>' +
						'</div>' +
						'<div class="row">' +
							'<div class="col-50">' + data[i].deptIssue + '</div>' +
							'<div class="col-50 ngalongware-right">' + 
								'Issue Date: ' + data[i].issuedDate + '<br />' +
								'Resolve Date: ' + data[i].resolvedDate + '<br />' +
								'Approve Date: ' + data[i].approvedDate + '</div>' + 
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
							'<div class="col-100 ngalongware-center">' + 
								'<h3>Note</h3>' +
								data[i].note + 
							'</div>' +
						'</div>' +
						'<div class="row">' +
							'<div class="col-100 ngalongware-center">' +
								'<a href="#" class="text-color-red" id="issue-'+ data[i].id + '-btn-delete">' +
									'<strong>Hapus</strong>' + 
								'</a>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>';
		}
	}
	
	$$('#list-search-issue').html(view.html);
	$$(".ngalongware-footer").html('<div class="ngalongware-center">' +
			'<div class="ngalongware-font-9">' + 'CLASS MOBILE - panpan &copy; 2020' + '</div>' +
			'<br />' +
		'</div>');
	
	$$("#search-issue-btn").on('click', function() {
		var form = app.form.convertToData('#search-issue-form');
		
		if (form.code == null || form.code.trim() == '') {
			app.dialog.alert('Code is empty', 'CLASS MOBILE - panpan', function() {
			});
			return;
		}
		/*
		alert('data to post: ' + JSON.stringify(form));
		app.request.postJSON('hola', form, function(data) {
			app.dialog.alert('posted data: ' + form, 'CLASS MOBILE - panpan');
			return;
		});
		*/
		// dummy
		searchIssueCode = form.code;
		
		app.views.main.router.navigate('/search-issue/', {reloadCurrent: true, transition: 'f7-circle'});
		
	});
});

