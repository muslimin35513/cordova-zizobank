$$(document).on('page:init', '.page[data-name="registrasi"]', function () {
    //var $$ = Dom7;
    
        $$("#registrasi-btn").on('click', function() {
            var form = app.form.convertToData('#registrasi-form');
            
            if (form.username == null || form.username.trim() == '') {
                app.dialog.alert('Username is empty', function() {
                });
                return;
            }
            
            if (form.firstname == null || form.firstname.trim() == '') {
                app.dialog.alert('First Name is empty', function() {
                });
                return;
            }
            if (form.lastname == null || form.lastname.trim() == '') {
                app.dialog.alert('Last Name is empty', function() {
                });
                return;
            }
            if (form.alamat == null || form.alamat.trim() == '') {
                app.dialog.alert('Alamat is empty', function() {
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
            
            app.views.main.router.navigate('/login/', {reloadCurrent: true, transition: 'f7-circle'});
            
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
    