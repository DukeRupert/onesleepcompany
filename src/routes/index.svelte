
<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/home.json`);

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
	import { page } from '$app/stores'
	import { siteData } from "$lib/store";
	import { urlFor } from "$lib/image-url";
	import SvelteSeo from "svelte-seo";
	import Hero from '$lib/components/hero.svelte'
	import type {hero} from '$lib/components/hero'
	import CategoryPreview from '$lib/components/categoryPreview.svelte';
	import type { categoryPreview } from '$lib/components/categoryPreview';
	import Feature from '$lib/components/feature.svelte'
	import type { feature } from '$lib/components/feature'
	import Stats from '$lib/components/stats.svelte'
	import type { stats } from '$lib/components/stats'
    export let data
    console.log(data)

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	let heroData: hero = {
		title: {
			first: 'Wholesale pricing',
			second: 'Factory direct'
		},
		description:
			data.excerpt,
		image: {
			url: urlFor(data.mainImage.asset).format('webp').width(800).url(),
			alt: data.mainImage.alt
		},
		cta: {
			title: 'Shop Mattresses',
			link: '/inventory/mattresses'
		}
	};

	let categoryPreviews: categoryPreview[] = [
		{
			title: 'Platform Frames',
			link: '/locations',
			image: {
				url: '/platformFrame.jpg',
				alt: 'fix me'
			}
		},
		{
			title: 'Pillows & Sheets',
			link: '/locations',
			image: {
				url: '/pillow.jpg',
				alt: 'fix me'
			}
		},
		{
			title: 'Adjustable Frames',
			link: '/locations',
			image: {
				url: 'adjustableFrame.jpg',
				alt: 'fix me'
			}
		}
	];

	let featureData: feature = {
		title: 'Made in the USA',
		description:
			'Our mattresses are made right here in the USA. The One Sleep Company stores are located in the beautiful Pacific Northwest. Make an appointment today to visit one of our showrooms to view our selection of mattresses. We offer everything from traditional spring mattresses to pillow-tops in sizes to fit your needs. Whether you’re looking for a twin, full, queen or king, we’ve got you covered.',
		cta: {
			title: 'Contact Us',
			link: '/contact-us'
		},
		image: {
			url: '/american-made-small.jpg',
			alt: 'A mattress on a wooden frame with an American flag on the wall over it.'
		}
	};

	let statsData: stats = {
		title: 'Local Experts, Not Robots',
		description: 'Talk to one of our knowledgeable sleep advisors today!',
		stats: [
			{ title: '10', description: 'Years Manufacturing Experience' },
			{ title: '100%', description: 'Satisfaction' },
			{ title: '1', description: 'Goal' }
		]
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
				url: urlFor(data.mainImage.asset).width(1200).height(627).format('webp').url(),
				width: '1200',
				height: '627',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<div class="min-h-screen">
	<Hero data={heroData} />
	<Feature data={featureData} />
	<Stats data={statsData} />
	<CategoryPreview data={categoryPreviews} />
</div>