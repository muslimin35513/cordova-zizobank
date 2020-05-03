$$(document).on('page:init', '.page[data-name="login"]', function () {
//var $$ = Dom7;

	$$("#login-btn").on('click', function() {
		var form = app.form.convertToData('#login-form');
		
		if (form.username == null || form.username.trim() == '') {
			app.dialog.alert('Username is empty', function() {
			});
			return;
		}
		
		if (form.password == null || form.password.trim() == '') {
			app.dialog.alert('Password is empty', function() {
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
		user.username = form.username;
		user.password = form.password;
		user.firstName = 'Peter';
		user.lastName= 'Griffin';
		user.idNo = '1234567890';
		
		if (form.username == 'muslimin' && form.password == '12345'){
		app.views.main.router.navigate('/dashboard/', {reloadCurrent: true, transition: 'f7-circle'});
		}else{
			app.dialog.alert('your username or password wrong...');
		  return;
		}
		
	});
	
	$$("#reg-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#forgot-password").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#logout-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#language-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});
	
	$$("#search-report-btn").on('click', function() {
		app.dialog.alert('Ooops... The page is under construction', 'CLASS MOBILE - panpan');
		return;
	
	});

});
