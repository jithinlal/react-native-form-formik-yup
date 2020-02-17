import React from 'react';
import { Button } from 'react-native-elements';

const FormButton = ({ title, buttonType, buttonColor, ...props }) => {
	return (
		<Button
			{...props}
			type={buttonType}
			title={title}
			buttonStyle={{ borderColor: buttonColor, borderRadius: 20 }}
			titleStyle={{ color: buttonColor }}
		></Button>
	);
};

export default FormButton;
