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
	import { page } from '$app/stores';
	import { siteData } from '$lib/store';
	import { urlFor } from '$lib/image-url';
	import SvelteSeo from 'svelte-seo';
	import Hero from '$lib/components/hero.svelte';
	import type { hero } from '$lib/components/hero';
	import CategoryPreview from '$lib/components/categoryPreview.svelte';
	import type { categoryPreview } from '$lib/components/categoryPreview';
	import Feature from '$lib/components/feature.svelte';
	import type { feature } from '$lib/components/feature';
	import Stats from '$lib/components/stats.svelte';
	import type { stats } from '$lib/components/stats';
	import Highlights from '$lib/components/highlights.svelte';
	import type { highlight } from '$lib/components/highlights';
	import type { page as pageData } from 'src/global';
	import FacebookPixel from '$lib/FacebookPixel.svelte';
	import { onMount } from 'svelte';

	export let data: pageData;

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	let heroData: hero = {
		title: {
			first: 'Wholesale pricing',
			second: 'Factory direct'
		},
		description: data.description,
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

	let highlightData: highlight[] = [
		{
			title: 'Instant Approval Financing',
			description:
				'Instant approval financing available! Ask us about our ZERO CREDIT NEEDED financing and our 24 month same as cash financing. Same Day approvals.',
			cta: {
				title: 'Apply for Financing',
				link: '/instant-financing'
			}
		},
		{
			title: 'Made in the Pacific Northwest',
			description:
				'All of our mattresses are manufactured here in the United States of America at our factory in the Pacific Northwest. Come visit our showroom to choose the mattress for you.',
			cta: {
				title: 'Find A Showroom',
				link: '/locations'
			}
		},
		{
			title: 'Manufacturer Warranty',
			description:
				'All of our mattresses come with a manufacture’s warranty. So you can rest easy knowing that you are taken care of if something is wrong with your mattress.',
			cta: {
				title: 'View Mattresses',
				link: '/inventory/mattresses'
			}
		}
	];

	let fb;
	let id = 900909000387495;

	onMount(() => {
		fb.enable();
		fb.track();
	});
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
				url: urlFor(data.mainImage.asset).width(1200).height(627).format('webp').url(),
				width: '1200',
				height: '627',
				alt: data.mainImage.alt
			}
		]
	}}
/>
<FacebookPixel bind:this={fb} {id} />
<div class="min-h-screen">
	<Hero data={heroData} />
	<Feature data={featureData} />
	<Stats data={statsData} />
	<CategoryPreview data={categoryPreviews} />
	<Highlights data={highlightData} />
</div>
