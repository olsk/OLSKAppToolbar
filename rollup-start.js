import RollupStart from './main.svelte';

const OLSKAppToolbar = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKAppToolbarDispatchApropos: (function  () {
			window.TestOLSKAppToolbarDispatchApropos.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchApropos.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchTongue: (function  () {
			window.TestOLSKAppToolbarDispatchTongue.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchTongue.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchFund: (function  () {
			window.TestOLSKAppToolbarDispatchFund.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchFund.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchCloud: (function  () {
			window.TestOLSKAppToolbarDispatchCloud.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchCloud.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchLauncher: (function  () {
			window.TestOLSKAppToolbarDispatchLauncher.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchLauncher.innerHTML) + 1;
		}),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e) {
		if (['OLSKAppToolbarDispatchApropos', 'OLSKAppToolbarDispatchTongue', 'OLSKAppToolbarDispatchFund', 'OLSKAppToolbarFundShowProgress', 'OLSKAppToolbarDispatchLauncher', 'OLSKAppToolbarFundLimitText'].includes(e[0]) && e[1].trim()) {
			e[1] = JSON.parse(e[1]);
		}

		return e;
	}))),
});

export default OLSKAppToolbar;
