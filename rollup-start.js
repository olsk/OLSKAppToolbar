import RollupStart from './main.svelte';

const OLSKAppToolbar = new RollupStart({
	target: document.body,
	props: Object.assign({
		OLSKAppToolbarDispatchStorage: (function _OLSKAppToolbarDispatchStorage () {
			window.TestOLSKAppToolbarDispatchStorage.innerHTML = parseInt(window.TestOLSKAppToolbarDispatchStorage.innerHTML) + 1;
		}),
		_OLSKAppToolbarDispatchExport: (function __OLSKAppToolbarDispatchExport () {}),
		_OLSKAppToolbarDispatchImport: (function __OLSKAppToolbarDispatchImport () {}),
	}, Object.fromEntries(Array.from((new window.URLSearchParams(window.location.search)).entries()))),
});

export default OLSKAppToolbar;
