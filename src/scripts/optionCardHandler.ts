import { OptionCardId, getFormSubject } from '../utils/optionCardUtils';

// to check if url has changed
let existingUrlSubject: string | null = null;
let subject: string | null = null;

const handleSubject = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const newUrlSubject = urlParams.get('selected-option');
	console.log({ newUrlSubject });

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
