<script>
	import { slide, draw } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { page } from '$app/stores';
	import { TIMING } from '$lib/constants';
	import { urlFor } from '$lib/image-url';
	import { siteData } from '$lib/store';

	let isNavOpen = false;
	let timing = TIMING;
	let { title, logo } = $siteData;

	const toggleMenu = () => {
		isNavOpen = !isNavOpen;
	};
</script>

<div class="max-w-8xl mx-auto px-2 sm:px-6 lg:px-8">
	<div class="relative flex justify-between h-16">
		<div class="flex items-center mr-auto md:hidden">
			<!-- Mobile menu button -->
			<button
				type="button"
				class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-highlight"
				aria-controls="mobile-menu"
				aria-expanded="false"
				on:click={toggleMenu}
			>
				<span class="sr-only">Open main menu</span>
				{#if !isNavOpen}
					<svg
						class="h-6 w-6 block"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							in:draw={{ duration: timing, easing: quartOut }}
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
				{#if isNavOpen}
					<svg
						class="h-6 w-6 block"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							in:draw={{ duration: timing, easing: quartOut }}
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{/if}
			</button>
		</div>
		<div class="flex-1 flex items-center justify-center sm:items-stretch md:justify-start">
			<a sveltekit:prefetch href="/" class="flex items-center">
				<!-- max-width: 98% is a hacky fix. SVG gets fuzzy at max-size. Probably should fix svg file itself -->
				<img
					class="block lg:hidden h-8 w-auto"
					src={urlFor(logo.asset).format('webp').width(200).url()}
					alt={title + ' logo '}
				/>
				<img
					class="hidden lg:block h-8 w-auto"
					src={urlFor(logo.asset).format('webp').width(200).url()}
					alt={title + ' logo '}
				/>
			</a>
			<div class="hidden md:ml-6 md:flex md:space-x-4">
				<!-- Current: "border-highlight text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
				<a
					sveltekit:prefetch
					href="/inventory/mattresses"
					class="{$page.url.pathname == '/inventory/mattresses'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Mattresses
				</a>
				<a
					sveltekit:prefetch
					href="/inventory/adjustable-bases"
					class="{$page.url.pathname == '/inventory/adjustable-bases'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Adjustable Bases
				</a>
				<a
					sveltekit:prefetch
					href="/locations"
					class="{$page.url.pathname == '/locations'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					Locations
				</a>
				<a
					sveltekit:prefetch
					href="/about-us"
					class="{$page.url.pathname == '/about-us'
						? 'current'
						: 'default'} inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
				>
					About Us
				</a>
			</div>
		</div>
		<div class="flex items-center">
			<div class="flex-shrink-0">
				<a
					href="/locations"
					class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight"
				>
					<svg
						class="m-0 sm:-ml-1 sm:mr-2 h-5 w-5"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" />
						<path
							d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
						/></svg
					>
					<span class="hidden sm:inline-block">Call</span>
				</a>
			</div>
		</div>
	</div>
</div>

<!-- Mobile menu, show/hide based on menu state. -->
{#if isNavOpen}
	<div transition:slide={{ duration: timing, easing: quartOut }} class="md:hidden" id="mobile-menu">
		<div class="pt-2 pb-4 space-y-1">
			<a
				sveltekit:prefetch
				href="/inventory/mattresses"
				class="{$page.url.pathname == '/inventory/mattresses'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Mattresses</a
			>
			<a
				sveltekit:prefetch
				href="/inventory/adjustable-bases"
				class="{$page.url.pathname == '/inventory/adjustable-bases'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
				>Adjustable Bases</a
			>
			<a
				sveltekit:prefetch
				href="/locations"
				class="{$page.url.pathname == '/locations'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Locations</a
			>
			<a
				sveltekit:prefetch
				href="/about-us"
				class="{$page.url.pathname == '/about-us'
					? 'mobile-current'
					: 'mobile-default'} block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About Us</a
			>
		</div>
	</div>
{/if}

<style>
	.default {
		@apply border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700;
	}

	.current {
		@apply border-highlight text-gray-900;
	}
	.mobile-default {
		@apply border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700;
	}

	.mobile-current {
		@apply bg-indigo-50 border-highlight text-secondary;
	}
</style>
