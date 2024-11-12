chrome.contextMenus.create({
    id: "iqdb-search",
    title: "iqdb search",
    contexts: ["image"],
});

chrome.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "iqdb-search") {
		chrome.tabs.create({url: "https://iqdb.org/?url=" + info.srcUrl});
	}
});