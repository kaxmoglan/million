import { useEffect, useState } from 'react';
import styles from './form.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { getFormSubject } from '../../utils/optionCardUtils';

export const Form = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<Array<string>>([]);
	const [name, setName] = useState<string>();
	const [email, setEmail] = useState<string>();
	const [subject, setSubject] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		const searchParams = new URLSearchParams(document.location.search);
		const selectedOption = searchParams.get('selected-option');
		setSubject(selectedOption ? getFormSubject(selectedOption) : '');
	}, []);

	const handleName = (e: React.ChangeEvent<HTMLInputElement>) =>
		setName(e.target.value);
	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEmail(e.target.value);
	const handleSubject = (e: React.ChangeEvent<HTMLInputElement>) =>
		setSubject(e.target.value);
	const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) =>
		setMessage(e.target.value);

	const handleSubmit = () => alert('Form submitted');

	return (
		<div className={styles.container}>
			<form className={styles.contactForm} onSubmit={handleSubmit}>
				<StyledTextField
					label="Name"
					variant="outlined"
					required
					onChange={handleName}
					value={name}
				/>
				<StyledTextField
					label="Email"
					variant="outlined"
					required
					onChange={handleEmail}
					value={email}
				/>
				<StyledTextField
					label="Subject"
					variant="outlined"
					required
					onChange={handleSubject}
					value={subject}
				/>
				<StyledTextField
					label="Message"
					variant="outlined"
					required
					multiline
					rows={8}
					onChange={handleMessage}
					value={message}
				/>
				<StyledButton type="submit" onSubmit={handleSubmit} variant="outlined">
					Send
				</StyledButton>
			</form>
		</div>
	);
};

const StyledTextField = styled(TextField)({
	textArea: {
		color: styles.grey2,
	},
	input: {
		color: styles.grey2,
	},
	'&:hover label': {
		color: styles.grey2,
	},
	'& label': {
		color: styles.grey3,
	},
	'& label.Mui-focused': {
		color: styles.highlight,
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: styles.highlight,
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: styles.grey3,
		},
		'&:hover fieldset': {
			borderColor: styles.grey2,
		},
		'&.Mui-focused fieldset': {
			borderColor: styles.highlight,
		},
	},
});

const StyledButton = styled(Button)({
	color: styles.grey3,
	borderColor: styles.grey3,

	'&:hover': {
		color: styles.highlight,
		borderColor: styles.highlight,
	},
});
