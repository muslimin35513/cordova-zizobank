$$(document).on('page:init', '.page[data-name="user"]', function () {
	var data1 = {
			id: '1',
			nik: '12345',
			name: 'Andre',
			dept: 'QA',
			position: 'Staff',
			pic: 'Joe',
			gender: 'Laki-laki',
			phone: '089898989',
			email: 'andrie@gmail.com'
	}

	var data2 = {
			id: '2',
			nik: '12345',
			name: 'Kampleng',
			dept: 'LINE 2',
			position: 'Operator',
			pic: 'Sam',
			gender: 'Laki-laki',
			phone: '089898989',
			email: 'andrie@gmail.com'
	}
	
	var view = {
			html: ''
	}
	
	var data = [data1, data2];
	for (var i = 0; i < data.length; i++) {
		view.html += '<div class="col-100 card ngalongware-color-bg-blue">' + 
				'<div class="card-content card-content-padding" id="' + data[i].id + '-btn" >' +
					'<div class="row">' +
						'<div class="col-50"><strong>' + data[i].nik + '</strong></div>' +
						'<div class="col-50 ngalongware-right"><strong>' + data[i].name + '</strong></div>' +					
					'</div>' +
					'<div class="row">' +
						'<div class="col-50">' + data[i].dept + '</div>' +
						'<div class="col-50 ngalongware-right">' + data[i].position + '</div>' +					
					'</div>' +
				'</div>' +
			'</div>';
	}
	
	$$('#list-user').html(view.html);
	$$(".ngalongware-footer").html('<div class="ngalongware-center">' +
			'<div class="ngalongware-font-9">' + 'Providoc IRC &copy; 2020' + '</div>' +
			'<br />' +
		'</div>');
});