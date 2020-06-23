import RollupStart from './main.svelte';

const OLSKAppToolbar = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKAppToolbarDispatchLauncher: (function _OLSKAppToolbarDispatchLauncher () {
			window.TestOLSKAppToolbarDispatchLauncher.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchLauncher.innerHTML) + 1;
		}),
		OLSKAppToolbarDispatchStorage: (function _OLSKAppToolbarDispatchStorage () {
			window.TestOLSKAppToolbarDispatchStorage.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchStorage.innerHTML) + 1;
		}),
		_OLSKAppToolbarDispatchExport: (function __OLSKAppToolbarDispatchExport () {}),
		_OLSKAppToolbarDispatchImport: (function __OLSKAppToolbarDispatchImport () {}),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()).map(function (e, index, coll) {
		if (['OLSKAppToolbarDispatchLauncher'].includes(e[0])) {
			e[1] = JSON.parse(e[1]);
		}

		return e;
	}))),
});

export default OLSKAppToolbar;
