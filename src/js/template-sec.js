document.addEventListener('DOMContentLoaded', () => {
	fetch('header.html')
	.then(r => r.ok ? r.text() : Promise.reject('Not found'))
	.then(html => {
		const headerEl = document.getElementById('header-wrapper');
		if (headerEl) headerEl.innerHTML = html;
	})
	.catch(e => console.error('Header load error:', e));

	fetch('footer.html')
	.then(r => r.ok ? r.text() : Promise.reject('Not found'))
	.then(html => {
		const footerEl = document.getElementById('footer-wrapper');
		if (footerEl) footerEl.innerHTML = html;
	})
	.catch(e => console.error('Footer load error:', e));
});