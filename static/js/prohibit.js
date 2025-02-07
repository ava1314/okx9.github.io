[
	'contextmenu',
	'selectstart',
	'keydown',
	'dragstart',
	'wheel'
].forEach(event => {
	document.addEventListener(event, e => {
		e.preventDefault();
	}, false);
});


document.addEventListener('keydown', e => {
	const {
		keyCode,
		ctrlKey,
		shiftKey
	} = e;
	if (
		keyCode === 123 ||
		(ctrlKey && shiftKey && keyCode === 73) ||
		(ctrlKey && keyCode === 85)
	) {
		e.preventDefault();
		return false;
	}
}, false);
