$$(document).on('page:init', '.page[data-name="poin"]', function () {
	var dataUser1 = {
			id: '1',
			nik: '12345',
			name: 'Andre',
			dept: 'QA',
			position: 'Staff',
			pic: 'Joe',
			gender: 'Laki-laki',
			phone: '089898989',
			email: 'andrie@gmail.com',
			poin: '2'
	}

	var dataUser2 = {
			id: '2',
			nik: '12345',
			name: 'Kampleng',
			dept: 'LINE 2',
			position: 'Operator',
			pic: 'Sam',
			gender: 'Laki-laki',
			phone: '089898989',
			email: 'andrie@gmail.com',
			poin: '6'
	}
	
	var dataUser = [dataUser1, dataUser2];
	view.html = '';
	for (var i = 0; i < dataUser.length; i++) {
		view.html += '<div class="col-100 card ngalongware-color-bg-blue">' + 
				'<div class="card-content card-content-padding" id="' + dataUser[i].id + '-btn" >' +
					'<div class="row">' +
						'<div class="col-50"><strong>' + dataUser[i].nik + '</strong></div>' +
						'<div class="col-50 ngalongware-right"><strong>' + dataUser[i].name + '</strong></div>' +					
					'</div>' +
					'<div class="row">' +
						'<div class="col-50">' + dataUser[i].dept + '</div>' +
						'<div class="col-50 ngalongware-right">' + dataUser[i].position + '</div>' +					
					'</div>' +
					'<div class="row">' +
						'<div class="col-50">' + '&nbsp;' + '</div>' +
						'<div class="col-50 ngalongware-right">' + dataUser[i].poin + '</div>' +					
					'</div>' +
				'</div>' +
			'</div>';
	}
	
	$$('#list-poin').html(view.html);
	$$(".ngalongware-footer").html('<div class="ngalongware-center">' +
			'<div class="ngalongware-font-9">' + 'Providoc IRC &copy; 2020' + '</div>' +
			'<br />' +
		'</div>');
});