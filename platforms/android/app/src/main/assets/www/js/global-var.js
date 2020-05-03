var user = {
	username: '',
	password: '',
	firstName: '',
	lastName: '',
	accountNo: '',
	idNo: '',
	cby: '',
	cdate: '',
	mby: '',
	mdate: ''
}

var data1 = {
		id: '1',
		code: '12345',
		issuer: 'Andre',
		resolver: 'John',
		approver: 'Kaneki',
		issuedDate: '02-02-2020',
		resolvedDate: '02-02-2020',
		approvedDate: '02-02-2020',
		descIssue: 'Terdapat Perubahan measurement yang tidak cocok',
		descResolve: 'Wadaw Wadidaw',
		note: 'w.o.w',
		deptIssue: 'QA'
}

var data2 = {
		id: '1',
		code: '54321',
		issuer: 'Kampleng',
		resolver: 'Andrie',
		approver: 'Kaneki',
		issuedDate: '01-02-2020',
		resolvedDate: '01-02-2020',
		approvedDate: '01-02-2020',
		descIssue: 'Terdapat pertikaian',
		descResolve: 'Baku Hantam',
		note: 'w.o.w',
		deptIssue: 'Operator'
}

var view = {
		html: ''
}

var data = [data1, data2];
var searchIssueCode = '';