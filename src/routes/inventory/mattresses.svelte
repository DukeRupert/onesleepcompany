<script lang="ts" context="module">
	export async function load({ fetch, page }) {
		const { path } = page;
		const res = await fetch(`/api${path}.json`);

		if (res.ok) {
			const { data } = await res.json();
			return { props: { data } };
		}

		return {
			status: res.status,
			error: new Error()
		};
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import { siteData } from '$lib/store';
	import { urlFor } from '$lib/image-url';
	import { slide } from 'svelte/transition';
	import { quartOut } from 'svelte/easing';
	import { TIMING } from '$lib/constants';
	import SvelteSeo from 'svelte-seo'
	import ContentBlocks from '@arzidava/svelte-portable-text'
	import ProductCard from '$lib/components/productCard.svelte';
	import SimpleCTA from '$lib/components/simpleCTA.svelte';
	import Link from '$lib/components/link.svelte';

	export const serializers = {
		types: {
			mattressReference: (node) => {
				return {
					component: ProductCard,
					props: {
						title: node.mattress.title,
				slug: node.mattress.slug.current,
				image: {
					url: urlFor(node.mattress.images[0].asset).width(450).format('webp').url(),
					alt: node.mattress.title
				},
				price: node.mattress.price,
				features: node.mattress.features
					}
				}
			},
			mattress: (node) => {
				return {
					component: ProductCard,
				props: {
					title: node.title,
					slug: node.slug.current,
					image: {
						url: urlFor(node.images[0].asset).width(450).format('webp').url(),
						alt: node.title
					},
					price: node.price,
					features: node.features
				}
				}
			}
		},
		marks: {
			link: (props) => {
				return {
					component: Link,
					props: props.mark
				};
			}
		}	
	}
	

	export let data;
	const ctaData = {
		line1: 'Ready to sleep well?',
		line2: 'Make an appointment today.',
		action1: 'Find a Showroom',
		link1: '/locations',
		action2: 'Contact Us',
		link2: '/locations'
	};

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	// Sorting
	let isSortOpen = false;
	const toggleSort = () => {
		isSortOpen = !isSortOpen;
	};

	let mattresses = data.body;

	let sortBy: string[] = ['Price: Low to High', 'Price: High to Low'];

	let activeSort = sortBy[0];

	const handleSort = (e) => {
		// copy, sort and re-assign product array to activate flip animation
		let sorted = mattresses;
		switch (e.target.id) {
			case 'Price: Low to High':
				sorted.sort((a, b) => (a.mattress.price > b.mattress.price ? 1 : -1));
				break;
			case 'Price: High to Low':
				sorted.sort((a, b) => (a.mattress.price < b.mattress.price ? 1 : -1));
				break;
			default:
				console.log('No match found');
		}
		mattresses = [...sorted];
		// set activeSort for menu styling
		activeSort = e.target.id;
		// close menu
		isSortOpen = false;
	};
</script>

<SvelteSeo
	openGraph={{
		title: $siteData.title + ' - ' + data.title,
		description: data.excerpt,
		url: pageUrl,
		type: 'website',
		images: [
			{
				url: urlFor(data.mainImage.asset).url(),
				width: data.mainImage.asset.metadata.dimensions.width,
				height: data.mainImage.asset.metadata.dimensions.height,
				alt: data.mainImage.alt
			}
		]
	}}
/>
<!-- Header -->
<header class="bg-white text-center py-16 px-4 sm:px-6 lg:px-8">
	<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">{data.title}</h1>
	<p class="mt-4 max-w-xl mx-auto text-base text-gray-500">
		{data.subtitle}
	</p>
</header>
<!-- Filters -->
<section id="filters" class="bg-white">
	<div class="pb-6">
		<div
			aria-labelledby="filter-heading"
			class="relative z-10 border-t border-b border-gray-200 grid items-center"
		>
			<!-- Sort -->
			<div class="col-start-1 row-start-1 py-4">
				<div class="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="relative inline-block">
						<div class="flex">
							<button
								type="button"
								class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
								id="menu-button"
								aria-expanded="false"
								aria-haspopup="true"
								on:click={toggleSort}
							>
								Sort
								<svg
									class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500 transition-transform transform-gpu duration-500 ease-out {isSortOpen
										? 'rotate-180'
										: ''}"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
									fill="none"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<path stroke="none" d="M0 0h24v24H0z" /> <polyline points="6 9 12 15 18 9" /></svg
								>
							</button>
						</div>
						{#if isSortOpen}
							<div
								transition:slide={{ duration: TIMING, easing: quartOut }}
								class="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="menu-button"
								tabindex="-1"
							>
								{#each sortBy as label}
									<div class="py-1" role="none">
										<a
											id={label}
											class="{label == activeSort
												? 'font-medium text-gray-900'
												: 'text-gray-500'} block px-4 py-2 text-sm cursor-pointer"
											role="menuitem"
											tabindex="-1"
											on:click={handleSort}
										>
											{label}
										</a>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- Product grid -->
<section
	aria-labelledby="products-heading"
	class="bg-white max-w-8xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"
>
	<h2 id="products-heading" class="sr-only">Products</h2>
	<div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
		<ContentBlocks blocks={mattresses} {serializers} />
	</div>
	<SimpleCTA {...ctaData} />
</section>
