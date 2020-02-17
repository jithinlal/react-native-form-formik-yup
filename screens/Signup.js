import React, { Fragment } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-elements';
import { Formik } from 'formik';

import signUpValidationSchema from '../validation/signupValidationSchema';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

export default class Signup extends React.Component {
	goToLogin = () => this.props.navigation.navigate('Login');

	handleSubmit = values => {
		console.log(values);
	};

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: '',
						confirmPassword: '',
					}}
					onSubmit={values => {
						this.handleSubmit(values);
					}}
					validationSchema={signUpValidationSchema}
				>
					{({
						handleChange,
						values,
						handleSubmit,
						errors,
						isValid,
						isSubmitting,
						touched,
						handleBlur,
					}) => (
						<Fragment>
							<FormInput
								name='name'
								values={values.name}
								placeholder='Enter name'
								autoCapitalize='none'
								onChangeText={handleChange('name')}
								onBlur={handleBlur('name')}
								iconName='ios-contact'
								iconColor='#2C384A'
							/>
							<ErrorMessage errorValue={touched.name && errors.name} />
							<FormInput
								name='email'
								value={values.email}
								placeholder='Enter email'
								autoCapitalize='none'
								onChangeText={handleChange('email')}
								onBlur={handleBlur('email')}
								iconName='ios-mail'
								iconColor='#2C384A'
							/>
							<ErrorMessage errorValue={touched.email && errors.email} />
							<FormInput
								name='password'
								value={values.password}
								placeholder='Enter password'
								secureTextEntry
								onChangeText={handleChange('password')}
								onBlur={handleBlur('password')}
								iconName='ios-lock'
								iconColor='#2C384A'
							/>
							<ErrorMessage errorValue={touched.password && errors.password} />
							<FormInput
								name='confirmPassword'
								value={values.confirmPassword}
								placeholder='Confirm password'
								secureTextEntry
								onChangeText={handleChange('confirmPassword')}
								onBlur={handleBlur('confirmPassword')}
								iconName='ios-checkmark'
								iconColor='#2C384A'
							/>
							<ErrorMessage
								errorValue={touched.confirmPassword && errors.confirmPassword}
							/>
							<View style={styles.buttonContainer}>
								<FormButton
									buttonType='outline'
									onPress={handleSubmit}
									title='SIGNUP'
									buttonColor='#039BE5'
									disabled={!isValid || isSubmitting}
									loading={isSubmitting}
								/>
							</View>
						</Fragment>
					)}
				</Formik>
				<Button
					title='Go to Login'
					titleStyle={{
						color: '#F57C00',
					}}
					onPress={this.goToLogin}
					type='clear'
				/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	buttonContainer: {
		margin: 25,
	},
});
