var tw = {
	"app": {
		"nav": {
			"intro": "介紹",
			"renoir": "程式之前",
			"self": "自學之路",
			"bkd": "管理者系統",
			"web": "使用者系統",
			"internal": "內部系統",
			"skill": "技能",
			"contact": "聯絡我",
		},
		"download_tw": "中文履歷",
		"download_en": "英文履歷",
		"download": "下載",
		"enter_pw": "請輸入密碼",
		"cancel": "取消",
		"submit": "確認",
		"banner": "徐佳安 Ann Hsu<br /><br />大學四年主修企業管理，畢業後擔任行銷企劃三年。<br />熟悉品牌行銷、消費者行為及市場特性，<br />進入的職場第四年，開始自學程式語言。<br />轉職工程師後，擅長透過敏銳觀察及清晰邏輯解決問題，<br />現任公司主產品前端網頁負責人。不斷學習新領域，並且樂在其中。",
		"intro": "徐佳安<br /><br />新北市永和區<br />1990.8.30<br />輔仁大學 企業管理學系 畢業<br /><br />\#自助旅行 \#底片攝影<br />\#網路重度使用者",
		"renoir": {
			"title": "雷諾瓦國際有限公司 策略發展部 品牌行銷組 行銷企劃專員",
			"work": "負責全台20餘家門市的活動企劃、產品企劃及執行，接洽圖像授權及產品送審業務，經手過好市多合作專案、產品製程改善專案、公司官方APP開發專案。",
		},
		"self": {
			"work": "自學Html、Css及Javascript，完成個人靜態網站也得到了第一份工程師工作，期望以市場面向切入網頁/程式開發，打造更美好的產品。",
		},
		"bkd": {
			"title": "中兆匯科技服務股份有限公司 前端工程師",
			"work": "負責公司主線產品WorkLink的網頁後台，以React.js與flux進行產品維護及新功能開發，並使用git、postman等工具，同時具備RESTful api、RWD、AJAX等基本概念。",
		},
		"web": {
			"work": "以React.js與flux進行產品維護及新功能開發，利用Socket.IO建立即時通訊功能，與後端、iOS、Android工程師同步開發，並與UI/UX設計師討論並改善可行性。",
		},
		"internal": {
			"work": "以React.js與Redux建立內部系統，以便公司業務、會計線上建立訂單、開立發票、合約和客戶管理，並提供主管匯出報表、查看成效並訂立新銷售策略。",
		},
		"skill": {
			"title1": "技術能力",
			"title2": "語言能力",
			"title3": "人際關係能力",
			"work2": "英文 流暢 / 中文 精通 / 台語 精通",
			"work3": "清楚表達能力 / 溝通能力 / 衝突協調能力",
		},
		"language": {
			"tw": "繁體中文",
			"en": "English",
		},
	},
},
en = {
	"app": {
		"nav": {
			"intro": "Intro",
			"renoir": "Before Coding",
			"self": "Self-learning",
			"bkd": "Management System",
			"web": "User System",
			"internal": "Internal System",
			"skill": "Skill",
			"contact": "Contact",
		},
		"download_tw": "Resume(tw)",
		"download_en": "Resume(en)",
		"download": "Download",
		"enter_pw": "Please enter the password",
		"cancel": "Cancel",
		"submit": "Submit",
		"banner": "Ann Hsu<br /><br />I majored in Business Administration for Bachelor's Degree, <br />and had been doing marketing for over 3 years. <br />I excel in Branding Strategy, Consumer Behavior and Market Analysis. <br />After working in the marketing industry for 3 year, I started to learn programming on my own. <br />I became a Front-end engineer, have been developing and maintaining main product of company. <br />My philosophy is to keep learning new things and ENJOY it.",
		"intro": "CHIA-AN, HSU<br /><br />Yonghe District, New Taipei City<br />August 30th 1990<br />Business Administration, Fu Jen Catholic University<br /><br />\#travelToTheWorld \#filmPhotography<br />\#heavyUsers",
		"renoir": {
			"title": "Renoir Co., Ltd Marketing Executive",
			"work": "I was responsible for event planning and executions. I communicated with authorized agents to make sure that products are approved and produced in schedule. Also, I was a part of the Costco roadshow project, doing manufacturing process improvement and official app development.",
		},
		"self": {
			"work": "I learned Html, css and javascript by myself. After finishing my first static web page, I got the first engineer job. I’m looking forward to making a product that brings brilliant experience for users.",
		},
		"bkd": {
			"title": "Central Trillion Inc. Front-End Engineer",
			"work": "I have been participating in company's main product-WorkLink. My job includes maintaining and developing new features with React.js and flux. I use git and postman to be more efficient while working. Also I have basic knowledge of RESTful api、RWD、AJAX.",
		},
		"web": {
			"work": "I maintain and develop new features with React.js and flux, build real time front-end using Socket.io. I coordinate with back-end, iOS and Android developers in order to develop synchronously. Also I collaborate with designers to improve usability.",
		},
		"internal": {
			"work": "I build Internal System with React.js and Redux so that our sales and accounting could create orders and invoicing online, manage contracts and clients. Also, the system provide that supervisor could export report to view performance and plan new strategy.",
		},
		"skill": {
			"title1": "Technical Skill",
			"title2": "Language Skill",
			"title3": "Interpersonal Skill",
			"work2": "English: fluent / Mandarin: native speaker / Taiwanese: native speaker",
			"work3": "Clear expression / Good communication / Effective negotiation",
		},
		"language": {
			"tw": "繁體中文",
			"en": "English",
		},
	},
};
var allElements = document.getElementsByTagName("*");
var lng = getUrlVars()["lng"] ? getUrlVars()["lng"] : "tw";
var getLng = getUrlVars()["lng"];
switch (getLng) {
	case "tw":
		var lng = tw;
		break;
	case "en":
		var lng = en;
		break;
	default:
		var lng = tw;
}
console.log('allElements',allElements);
for (var i = 0, n = allElements.length; i < n; i++){
if(allElements[i].type == 'button') console.log('allElements',i,allElements[i]);
	if (allElements[i].getAttribute("data-i18n") !== null) {
		allElements[i].innerHTML = getString(lng, allElements[i].getAttribute("data-i18n").split("."));
	}
}
$('#dropdownMenu')[0].innerHTML = lng.app.language[getUrlVars()["lng"] ? getUrlVars()["lng"] : "tw"];
function getUrlVars() {
	var vars = [],
		hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}
function getString(init,arr) {
	var str = init
	for (var j = 0, n = arr.length; j < n; j++){
		str = str[arr[j]];
	}
	return str;
}
