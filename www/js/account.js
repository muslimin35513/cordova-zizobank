$$(document).on('page:init', '.page[data-name="account"]', function () {
	$$("#act-name").html(user.firstName + " " + user.lastName);
	$$("#act-username").html(user.username);
	$$("#act-password").html(user.password);
	$$("#act-idNo").html(user.idNo);

});
