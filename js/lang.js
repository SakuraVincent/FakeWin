$(function() {

	// Lets be professional, shall we?
	"use strict";

	// Some variables for later
	var dictionary, set_lang;
	var userLang = navigator.language || navigator.userLanguage;

	// Object literal behaving as multi-dictionary
	dictionary = {
		"simplifiedchinese": {

			"_fakewindowsupdates": "假装 Windows 升级界面",
			"_prankyourfriends": "用假的 windows 升级界面骗你的同事和朋友吧！",
			"_pressf11": "按 F11 开始全屏",
			"_pressenter": "按回车来触发蓝屏界面",
			"_video": "视频预览",
			"_selecttheme": "选择一个主题",
			"_relyonads": "我们依靠广告来支撑这个网站，如果你喜欢他，请考虑加入到广告过滤白名单！:)",

			"_winVistaupdates1": "正在配置更新：第一阶段",
			"_winVistaOf": "of",
			"_win7configuringupdates": "正在配置 Windows 更新",
			"_win7percent": "完成。",
			"_win7donotturnoff": "请不要关闭你的计算机。",
			"_winXPupdates1": "正在安装 Windows 更新...",
			"_winXPupdates2": "请不要关闭你的计算机或拔掉电源。",
			"_win10updates1": "正在安装 Windows 10",
			"_win10updates2": "您的电脑将重新启动多次。 请坐下来放松片刻。",
			"_win10updates3": "正在复制文件",
			"_win10updates4": "正在安装功能和驱动",
			"_win10updates5": "正在配置设置",

			"_win10workingonupdates": "Working on updates",
			"_win10donotturnoff": "请不要关闭您的计算机",
			"_win10willrestart": "您的电脑将重启几次"

		},

		"traditionalchinese": {

			"_fakewindowsupdates": "假装 Windows 的升級界面",
			"_prankyourfriends": "用假的 Windows 升級界面騙你的同事和朋友吧！",
			"_pressf11": "按 F11 開始全屏幕",
			"_pressenter": "按Enter来觸發BSOD界面",
			"_video": "影片概述",
			"_selecttheme": "選擇一個主題",
			"_relyonads": "我們依靠廣告來承載此網站，如果你喜歡它，請考慮將它納入白名單！ :)",

			"_winVistaupdates1": "正在配置更新︰ 階段",
			"_winVistaOf": "的",
			"_win7configuringupdates": "正在配置 Windows 更新",
			"_win7percent": "完成.",
			"_win7donotturnoff": "請勿關閉電腦或拔除電源.",

			"_winXPupdates1": "正在安裝 Windows 更新...",
			"_winXPupdates2": "請勿關閉電腦或拔除電源.",
			"_win10updates1": "正在安裝 Windows 10",
			"_win10updates2": "你的電腦將重新啓動數次，請耐心等候。",
			"_win10updates3": "正在複製文件",
			"_win10updates4": "正在安裝功能和驅動程式",
			"_win10updates5": "正在完成...",

			"_win10workingonupdates": "正在安裝更新",
			"_win10donotturnoff": "請勿關閉電腦. 這可能需要一些時間。",
			"_win10willrestart": "您的電腦將重新啓動"

		}

	};

	// Function for swapping dictionaries
	set_lang = function(dictionary) {
		$("[data-translate]").text(function() {
			var key = $(this).data("translate");
			if(dictionary.hasOwnProperty(key)) {
				return dictionary[key];
			}
		});
	};

	// Swap languages when menu changes
	$("#lc").on("change", function() {
		var language = $(this).val().toLowerCase();
		if(dictionary.hasOwnProperty(language)) {
			set_lang(dictionary[language]);
			localStorage.setItem("lang", language);
		}
	});

	$("#en").on("click", function() {
		localStorage.setItem("lang", "english");
		set_lang(dictionary.english);
	});

	$("#es").on("click", function() {
		localStorage.setItem("lang", "spanish");
		set_lang(dictionary.spanish);
	});

	$("#de").on("click", function() {
		localStorage.setItem("lang", "german");
		set_lang(dictionary.german);
	});

	$("#ru").on("click", function() {
		localStorage.setItem("lang", "russian");
		set_lang(dictionary.russian);
	});

	$("#tr").on("click", function() {
		localStorage.setItem("lang", "turkish");
		set_lang(dictionary.turkish);
	});

	$("#it").on("click", function() {
		localStorage.setItem("lang", "italian");
		set_lang(dictionary.italian);
	});

	$("#ptbr").on("click", function() {
		localStorage.setItem("lang", "portuguese");
		set_lang(dictionary.portuguese);
	});

	$("#pl").on("click", function() {
		localStorage.setItem("lang", "polish");
		set_lang(dictionary.polish);
	});

	$("#fi").on("click", function() {
		localStorage.setItem("lang", "finnish");
		set_lang(dictionary.finnish);
	});

	$("#he").on("click", function() {
		localStorage.setItem("lang", "hebrew");
		set_lang(dictionary.hebrew);
	});

	$("#ar").on("click", function() {
		localStorage.setItem("lang", "arabic");
		set_lang(dictionary.arabic);
	});

	$("#hu").on("click", function() {
		localStorage.setItem("lang", "hungarian");
		set_lang(dictionary.hungarian);
	});

	$("#sk").on("click", function() {
		localStorage.setItem("lang", "slovak");
		set_lang(dictionary.slovak);
	});

	$("#ua").on("click", function() {
		localStorage.setItem("lang", "ukrainian");
		set_lang(dictionary.ukrainian);
	});

	$("#ko").on("click", function() {
		localStorage.setItem("lang", "korean");
		set_lang(dictionary.korean);
	});

	$("#io").on("click", function() {
		localStorage.setItem("lang", "indonesian");
		set_lang(dictionary.indonesian);
	});

	$("#fr").on("click", function() {
		localStorage.setItem("lang", "french");
		set_lang(dictionary.french);
	});

	// Set initial language to English

	if(localStorage.lang === undefined) {

		var lgeo = window.navigator.userLanguage || window.navigator.language;
		var lgeosub = lgeo.substring(0, 2);

		if(lgeosub == "ru") {
			localStorage.setItem("lang", "russian");
			set_lang(dictionary.russian);
		} else if(lgeosub == "fr") {
			localStorage.setItem("lang", "french");
			set_lang(dictionary.french);
		} else if(lgeosub == "de") {
			localStorage.setItem("lang", "german");
			set_lang(dictionary.german);
		} else if(lgeosub == "es") {
			localStorage.setItem("lang", "spanish");
			set_lang(dictionary.spanish);
		} else if(lgeosub == "it") {
			localStorage.setItem("lang", "italian");
			set_lang(dictionary.italian);
		} else if(lgeosub == "nl") {
			localStorage.setItem("lang", "dutch");
			set_lang(dictionary.dutch);
		} else if(lgeosub == "pt") {
			localStorage.setItem("lang", "portuguese");
			set_lang(dictionary.portuguese);
		} else if(lgeosub == "id") {
			localStorage.setItem("lang", "indonesian");
			set_lang(dictionary.indonesian);
		} else if(lgeosub == "ko") {
			localStorage.setItem("lang", "korean");
			set_lang(dictionary.korean);
		} else if(lgeosub == "ua") {
			localStorage.setItem("lang", "ukrainian");
			set_lang(dictionary.ukrainian);
		} else if(lgeosub == "sk") {
			localStorage.setItem("lang", "slovak");
			set_lang(dictionary.slovak);
		} else if(lgeosub == "hu") {
			localStorage.setItem("lang", "hungarian");
			set_lang(dictionary.hungarian);
		} else if(lgeosub == "ar") {
			localStorage.setItem("lang", "arabic");
			set_lang(dictionary.arabic);
		} else if(lgeosub == "he") {
			localStorage.setItem("lang", "hebrew");
			set_lang(dictionary.hebrew);
		} else if(lgeosub == "fi") {
			localStorage.setItem("lang", "finnish");
			set_lang(dictionary.finnish);
		} else if(lgeosub == "pl") {
			localStorage.setItem("lang", "polish");
			set_lang(dictionary.polish);
		} else if(lgeosub == "tr") {
			localStorage.setItem("lang", "turkish");
			set_lang(dictionary.turkish);
		} else if(lgeosub == "zh") {
			localStorage.setItem("lang", "simplifiedchinese");
			set_lang(dictionary.simplifiedchinese);
		} else if(lgeosub == "vi") {
			localStorage.setItem("lang", "vietnamese");
			set_lang(dictionary.vietnamese);
		} else {

			var getLanguage = localStorage.getItem('lang') || 'english';
			set_lang(dictionary[getLanguage]);

		}

	} else {

		var getLanguage = localStorage.getItem('lang') || 'english';
		set_lang(dictionary[getLanguage]);

	}

});