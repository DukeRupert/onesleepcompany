
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
	import { siteData } from "$lib/store";
	import { urlFor } from "$lib/image-url";
	import SvelteSeo from "svelte-seo";
	import Hero from '$lib/components/hero.svelte'
	import type {hero} from '$lib/components/hero'
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
</div>