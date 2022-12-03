<script>
export let OLSKAppToolbarGuideURL = '';
export let OLSKAppToolbarFundShowProgress = false;
export let OLSKAppToolbarFundLimitText = '';
export let OLSKAppToolbarCloudConnected = false;
export let OLSKAppToolbarCloudOffline = false;
export let OLSKAppToolbarCloudError = false;
export let OLSKAppToolbarDispatchApropos = null;
export let OLSKAppToolbarDispatchTongue = null;
export let OLSKAppToolbarDispatchFund = null;
export let OLSKAppToolbarDispatchCloud = null;
export let OLSKAppToolbarDispatchLauncher = null;

import { OLSKLocalized } from 'OLSKInternational';

const mod = {

	// INTERFACE

	InterfaceWindowDidKeydown (event) {
		const handlerFunctions = {

			Space () {
				if (!event.altKey) {
					return
				}

				OLSKAppToolbarDispatchLauncher()

				return event.preventDefault();
			},
			
		};

		handlerFunctions[event.code] && handlerFunctions[event.code]();
	},

};

import OLSKReloadButton from 'OLSKReloadButton';
import OLSKUIAssets from 'OLSKUIAssets';
</script>
<svelte:window on:keydown={ mod.InterfaceWindowDidKeydown } />

<div class="OLSKAppToolbar OLSKToolbar OLSKToolbarJustify OLSKCommonEdgeTop">

<div class="OLSKToolbarElementGroup">
	{#if OLSKAppToolbarDispatchApropos }
		<button class="OLSKAppToolbarAproposButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarAproposButtonText') } on:click={ OLSKAppToolbarDispatchApropos }>
			<div class="OLSKAppToolbarAproposButtonImage">{@html OLSKUIAssets._OLSKSharedApropos }</div>
		</button>
	{:else}
		<OLSKReloadButton />
	{/if}

	{#if OLSKAppToolbarDispatchTongue }
		<button class="OLSKAppToolbarLanguageButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarLanguageButtonText') } on:click={ OLSKAppToolbarDispatchTongue }>
			<div class="OLSKAppToolbarLanguageButtonImage">{@html OLSKUIAssets._OLSKSharedLanguage }</div>
		</button>
	{/if}

	{#if OLSKAppToolbarGuideURL}
		<a class="OLSKAppToolbarGuideLink" href={ OLSKAppToolbarGuideURL } target="_blank">{ OLSKLocalized('OLSKAppToolbarGuideLinkText') }</a>
	{/if}

	<slot></slot>
</div>

<div class="OLSKToolbarElementGroup">
	<div class="OLSKAppToolbarFund">
		{#if OLSKAppToolbarDispatchFund && !OLSKAppToolbarFundShowProgress }
			<button class="OLSKAppToolbarFundButton OLSKDecorPress" on:click={ OLSKAppToolbarDispatchFund }>{ OLSKLocalized('OLSKAppToolbarFundButtonText') }</button>

			{#if OLSKAppToolbarFundLimitText !== '' }
				<!-- #hotfix svelte rendering issue resolves with button  -->
				<button class="OLSKAppToolbarFundLimit OLSKDecorButtonNoStyle" disabled>{ OLSKAppToolbarFundLimitText.toString() }</button>
			{/if}
		{/if}

		{#if OLSKAppToolbarFundShowProgress }
			<div class="OLSKAppToolbarFundProgress">…</div>
		{/if}
	</div>
</div>

<div class="OLSKToolbarElementGroup">
	{#if OLSKAppToolbarDispatchCloud }
		<div class="OLSKAppToolbarCloudStatus">{ !OLSKAppToolbarCloudConnected ? '' : (OLSKAppToolbarCloudError ? OLSKLocalized('OLSKAppToolbarCloudStatusError') : (OLSKAppToolbarCloudOffline ? OLSKLocalized('OLSKAppToolbarCloudStatusOffline') : OLSKLocalized('OLSKAppToolbarCloudStatusOnline'))) }</div>

		<button class="OLSKAppToolbarCloudButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarCloudButtonText') } on:click={ OLSKAppToolbarDispatchCloud }>
			<div class="OLSKAppToolbarCloudButtonImage">{@html OLSKAppToolbarCloudError ? OLSKUIAssets._OLSKSharedCloudError : (OLSKAppToolbarCloudOffline ? OLSKUIAssets._OLSKSharedCloudOffline : OLSKUIAssets._OLSKSharedCloud) }</div>
		</button>
	{/if}

	{#if OLSKAppToolbarDispatchLauncher }
		<button class="OLSKAppToolbarLauncherButton OLSKDecorButtonNoStyle OLSKDecorTappable OLSKToolbarButton" title={ OLSKLocalized('OLSKAppToolbarLauncherButtonText') } on:click={ OLSKAppToolbarDispatchLauncher }>
			<div class="OLSKAppToolbarLauncherButtonImage">{@html OLSKUIAssets._OLSKSharedLauncher }</div>
		</button>
	{/if}
</div>
	
</div>

<style src="./ui-style.css"></style>
