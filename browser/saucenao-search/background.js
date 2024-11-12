browser.contextMenus.create({
    id: "saucenao-search",
    title: "saucenao",
    contexts: ["image"],
});

browser.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "saucenao-search") {
		browser.tabs.create({url: "https://saucenao.com/search.php?&url=" + info.srcUrl});
	}
});

