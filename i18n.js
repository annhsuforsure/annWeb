var tw = {
	"app": {
		"header": "首頁",
	}
},
en = {
	"app": {
		"header": "Home",
	}
};
$(document).ready(function (){
	var allElements = document.getElementsByTagName("*");
	var lng = getUrlVars()["lng"] ? getUrlVars()["lng"] : "tw";
	for (var i = 0, n = allElements.length; i < n; i++){
		console.log('i',i);
		if (allElements[i].getAttribute("data-i18n") !== null) {
			allElements[i].innerHTML = getString(lng, allElements[i].getAttribute("data-i18n").split("."));
		}
	}
});
function getUrlVars() {
	var vars = [],
		hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	console.log('vars',vars);
	return vars;
}
function getString(init,arr) {
	var str = init
	for (var j = 0, n = arr.length; j < n; j++){
		str = str[arr[j]];
	}
	return str;
}
