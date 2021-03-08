const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKAppToolbar_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				OLSKAppToolbarGuideURL: Math.random().toString(),
			});
		});
	
		it('localizes OLSKAppToolbarAproposButton', function() {
			browser.assert.attribute(OLSKAppToolbarAproposButton, 'title', uLocalized('OLSKAppToolbarAproposButtonText'));
		});

		it('localizes OLSKAppToolbarLanguageButton', function() {
			browser.assert.attribute(OLSKAppToolbarLanguageButton, 'title', uLocalized('OLSKAppToolbarLanguageButtonText'));
		});

		it('localizes OLSKAppToolbarGuideLink', function() {
			browser.assert.text(OLSKAppToolbarGuideLink, uLocalized('OLSKAppToolbarGuideLinkText'));
		});
	
		it('localizes OLSKAppToolbarFundButton', function() {
			browser.assert.text(OLSKAppToolbarFundButton, uLocalized('OLSKAppToolbarFundButtonText'));
		});
	
		it('localizes OLSKAppToolbarCloudButton', function() {
			browser.assert.attribute(OLSKAppToolbarCloudButton, 'title', uLocalized('OLSKAppToolbarCloudButtonText'));
		});
	
		it('localizes OLSKAppToolbarLauncherButton', function() {
			browser.assert.attribute(OLSKAppToolbarLauncherButton, 'title', uLocalized('OLSKAppToolbarLauncherButtonText'));
		});

		describe('OLSKAppToolbarCloudStatus', function test_OLSKAppToolbarCloudStatus () {

			it('sets text', function () {
				browser.assert.text(OLSKAppToolbarCloudStatus, '');
			});

			context('online', function () {

				before(function() {
					return browser.OLSKVisit(kDefaultRoute, {
						OLSKRoutingLanguage,
						OLSKAppToolbarCloudConnected: true,
					});
				});

				it('sets src', function () {
					browser.assert.text(OLSKAppToolbarCloudStatus, uLocalized('OLSKAppToolbarCloudStatusOnline'));
				});
			
			});

			context('offline', function () {

				before(function() {
					return browser.OLSKVisit(kDefaultRoute, {
						OLSKRoutingLanguage,
						OLSKAppToolbarCloudConnected: true,
						OLSKAppToolbarCloudOffline: true,
					});
				});

				it('sets src', function () {
					browser.assert.text(OLSKAppToolbarCloudStatus, uLocalized('OLSKAppToolbarCloudStatusOffline'));
				});
			
			});

			context('error', function () {

				before(function() {
					return browser.OLSKVisit(kDefaultRoute, {
						OLSKRoutingLanguage,
						OLSKAppToolbarCloudConnected: true,
						OLSKAppToolbarCloudOffline: true,
						OLSKAppToolbarCloudError: true,
					});
				});

				it('sets src', function () {
					browser.assert.text(OLSKAppToolbarCloudStatus, uLocalized('OLSKAppToolbarCloudStatusError'));
				});
			
			});

		});

	});

});
