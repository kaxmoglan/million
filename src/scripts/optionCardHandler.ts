import { OptionCardId, getFormSubject } from '../utils/optionCardUtils';

const handleSubject = () => {
	const url = window.location;
	if (!url.href.includes('/contact')) return;

	const urlParams = new URLSearchParams(url.search);
	const selectedOption = urlParams.get('selected-option');

	const subject = getFormSubject(selectedOption as OptionCardId);

	const subjectText = document.getElementById('subject-text');
	if (subjectText) subjectText.innerHTML = subject;
};

document.addEventListener('astro:beforeload', handleSubject);
