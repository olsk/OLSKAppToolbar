require('./node_modules/OLSKApp/modules/OLSKAssets/main.js').OLSKAssetsCopyAssetsFromTo([
		'OLSKLanguageSwitcher',
		'OLSKUIAssets',

		// pass tests
		'OLSKReloadButton',
	], require('path').join(__dirname, 'node_modules'), require('path').join(__dirname, 'os-app/_shared/__external'));
