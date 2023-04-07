const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKAppToolbar_Localize-' + OLSKRoutingLanguage, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
				OLSKAppToolbarGuideURL: Math.random().toString(),
			});
		});
	
		it('localizes OLSKAppToolbarAproposButton', function() {
			return browser.assert.attribute(OLSKAppToolbarAproposButton, 'title', uLocalized('OLSKAppToolbarAproposButtonText'));
		});

		it('localizes OLSKAppToolbarLanguageButton', function() {
			return browser.assert.attribute(OLSKAppToolbarLanguageButton, 'title', uLocalized('OLSKAppToolbarLanguageButtonText'));
		});

		it('localizes OLSKAppToolbarGuideLink', function() {
			return browser.assert.text(OLSKAppToolbarGuideLink, uLocalized('OLSKAppToolbarGuideLinkText'));
		});
	
		it('localizes OLSKAppToolbarFundButton', function() {
			return browser.assert.text(OLSKAppToolbarFundButton, uLocalized('OLSKAppToolbarFundButtonText'));
		});
	
		it('localizes OLSKAppToolbarClubButton', function() {
			return browser.assert.text(OLSKAppToolbarClubButton, uLocalized('OLSKAppToolbarClubButtonText'));
		});
	
		it('localizes OLSKAppToolbarCloudButton', function() {
			return browser.assert.attribute(OLSKAppToolbarCloudButton, 'title', uLocalized('OLSKAppToolbarCloudButtonText'));
		});
	
		it('localizes OLSKAppToolbarLauncherButton', function() {
			return browser.assert.attribute(OLSKAppToolbarLauncherButton, 'title', uLocalized('OLSKAppToolbarLauncherButtonText'));
		});

		describe('OLSKAppToolbarFundProgress', function test_OLSKAppToolbarFundProgress () {

			before(function() {
				return browser.OLSKVisit(kDefaultRoute, {
					OLSKAppToolbarFundShowProgress: true,
				});
			});

			it('sets innerText', function () {
				return browser.assert.text(OLSKAppToolbarFundProgress, '…');
			});

		});

		describe('OLSKAppToolbarCloudStatus', function test_OLSKAppToolbarCloudStatus () {

			it('sets text', function () {
				return browser.assert.text(OLSKAppToolbarCloudStatus, '');
			});

			context('online', function () {

				before(function() {
					return browser.OLSKVisit(kDefaultRoute, {
						OLSKRoutingLanguage,
						OLSKAppToolbarCloudConnected: true,
					});
				});

				it('sets src', function () {
					return browser.assert.text(OLSKAppToolbarCloudStatus, uLocalized('OLSKAppToolbarCloudStatusOnline'));
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
					return browser.assert.text(OLSKAppToolbarCloudStatus, uLocalized('OLSKAppToolbarCloudStatusOffline'));
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
					return browser.assert.text(OLSKAppToolbarCloudStatus, uLocalized('OLSKAppToolbarCloudStatusError'));
				});
			
			});

		});

	});

});
