import { OptionCardId, getFormSubject } from '../utils/optionCardUtils';

// to check if url has changed
let existingUrlSubject: string | null = null;
let subject: string | null = null;

const handleSubject = () => {
	const url = window.location;
	if (!url.href.includes('/contact')) return;

	const urlParams = new URLSearchParams(url.search);
	const newUrlSubject = urlParams.get('selected-option');

	const hasUrlSubjectChanged = newUrlSubject !== existingUrlSubject;

	if (!newUrlSubject || (!subject && !hasUrlSubjectChanged)) {
		return;
	}

	if (hasUrlSubjectChanged || !subject) {
		existingUrlSubject = newUrlSubject;
		subject = getFormSubject(newUrlSubject as OptionCardId);
	}

	const subjectText = document.getElementById('subject-text');
	if (subjectText) subjectText.innerHTML = subject;
};

handleSubject();
setInterval(handleSubject, 200);
