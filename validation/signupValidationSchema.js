import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	name: Yup.string()
		.label('Name')
		.required('Please enter a valid name'),
	email: Yup.string()
		.label('Email')
		.email('Enter a valid email')
		.required('Please enter a registered email'),
	password: Yup.string()
		.label('Password')
		.required()
		.min(4, 'Password must have at least 4 characters '),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref('password'), null],
		'Password must match'
	),
});

export default validationSchema;
