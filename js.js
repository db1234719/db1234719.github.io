let theme = "light";
function change_1() {
	theme = "light"
	return master()
}
function change_2() {
	theme = "dark"
	return master()
}
function master() {
	if (theme === "light") {
		document.documentElement.style.setProperty('--back', '#cc9d8f');
		document.documentElement.style.setProperty('--back00', '#9f9c8a');
		document.documentElement.style.setProperty('--font', '#342532');
		document.documentElement.style.setProperty('--font00', '#dbdbdb');
		document.documentElement.style.setProperty('--a', '#782024');
		document.documentElement.style.setProperty('--display-1', 'none');
		document.documentElement.style.setProperty('--display-2', 'block');
	} else if (theme === "dark") {
			document.documentElement.style.setProperty('--back', '#000000');
			document.documentElement.style.setProperty('--back00', '#222222');
			document.documentElement.style.setProperty('--font', '#ffffff');
			document.documentElement.style.setProperty('--font00', '#999999');
			document.documentElement.style.setProperty('--a', '555555');
			document.documentElement.style.setProperty('--display-2', 'none');
			document.documentElement.style.setProperty('--display-1', 'block');
	}
}