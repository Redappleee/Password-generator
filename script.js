function generate() {
	let dictionary = "";
	if (document.getElementById("lowercaseCb").checked) {
		dictionary += "abcdefghijklmnopqrstuvwxyz";
	}
	if (document.getElementById("uppercaseCb").checked) {
		dictionary += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}
	if (document.getElementById("digitsCb").checked) {
		dictionary += "0123456789";
	}
	if (document.getElementById("specialsCb").checked) {
		dictionary += "!@#$%^&*()_+-={}[];<>:";
	}

	const length = document.getElementById("lengthRange").value;

	if (length < 1 || dictionary.length === 0) {
		document.getElementById("passwordDisplay").value = "Invalid selection";
		return;
	}

	let password = "";
	for (let i = 0; i < length; i++) {
		const pos = Math.floor(Math.random() * dictionary.length);
		password += dictionary[pos];
	}

	document.getElementById("passwordDisplay").value = password;
}

// Event listeners
document.querySelectorAll('input[type="checkbox"], button.generate').forEach((elem) => {
	elem.addEventListener("click", generate);
});

document.getElementById("lengthRange").addEventListener("input", (e) => {
	document.getElementById("rangeValue").innerText = e.target.value;
	generate();
});

// Copy password to clipboard
document.getElementById("copyBtn").addEventListener("click", () => {
	const password = document.getElementById("passwordDisplay").value;
	navigator.clipboard.writeText(password).then(() => {
		document.getElementById("copyBtn").innerHTML = "Copied!";
		setTimeout(() => {
			document.getElementById("copyBtn").innerHTML = "Copy";
		}, 1000);
	});
});

generate(); // Initial generation