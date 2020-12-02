import RollupStart from './main.svelte';

const OLSKAppToolbar = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKAppToolbarDispatchLanguage: (function  () {
			window.TestOLSKAppToolbarDispatchLanguage.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchLanguage.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchFund: (function  () {
			window.TestOLSKAppToolbarDispatchFund.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchFund.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchLauncher: (function  () {
			window.TestOLSKAppToolbarDispatchLauncher.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchLauncher.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchStorage: (function  () {
			window.TestOLSKAppToolbarDispatchStorage.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchStorage.innerHTML) + 1;
		}),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e, index, coll) {
		if (['OLSKAppToolbarDispatchLanguage', 'OLSKAppToolbarDispatchFund', 'OLSKAppToolbarFundShowProgress', 'OLSKAppToolbarDispatchLauncher', 'OLSKAppToolbarFundLimitText'].includes(e[0])) {
			e[1] = JSON.parse(e[1]);
		}

		return e;
	}))),
});

export default OLSKAppToolbar;
