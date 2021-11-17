const btn = document.getElementById('btn');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

btn.addEventListener('click',() => {
	if (prefersDarkScheme.matches) {
		document.body.classList.toggle('light');
	} else {
		document.body.classList.toggle('dark');
	}
})