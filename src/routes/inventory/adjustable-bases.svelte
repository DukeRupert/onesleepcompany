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
	import SvelteSeo from 'svelte-seo';
	import { urlFor } from '$lib/image-url';
	import type { page as pageData } from 'src/global';
	import ContentBlocks from '@arzidava/svelte-portable-text';
	import ProductCard from '$lib/components/productCard.svelte';
	import Link from '$lib/components/link.svelte';
	import SimpleCta from '$lib/components/simpleCTA.svelte';

	export const serializers = {
		types: {
			adustableBaseReference: (node) => {
				return {
					component: ProductCard,
					props: {
						title: node.adustableBase.title,
						slug: node.adustableBase.slug.current,
						image: {
							url: urlFor(node.adustableBase.images[0].asset).width(450).format('webp').url(),
							alt: node.adustableBase.title
						},
						price: node.adustableBase.price,
						features: node.adustableBase.features
					}
				};
			},
			adustableBase: (node) => {
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
				};
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
	};

	export let data: pageData;

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
</script>

<SvelteSeo
	title={data.title}
	description={data.description}
	openGraph={{
		title: data.title,
		description: data.description,
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
<section id="filters" class="bg-white">
	<div class="pb-6">
		<div
			aria-labelledby="filter-heading"
			class="relative z-10 border-t border-b border-gray-200 grid items-center"
		/>
	</div>
</section>
<!-- Product grid -->
<section
	aria-labelledby="products-heading"
	class="bg-white max-w-8xl mx-auto overflow-hidden px-4 sm:px-6 lg:px-8"
>
	<h2 id="products-heading" class="sr-only">Products</h2>
	<div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
		<ContentBlocks blocks={data.body} {serializers} />
	</div>
	<SimpleCta {...ctaData} />
</section>
