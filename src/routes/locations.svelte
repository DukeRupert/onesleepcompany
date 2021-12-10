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
	import { locations } from '$lib/store';
	import Map from '$lib/components/map.svelte';
	import SvelteSeo from 'svelte-seo';
	import { urlFor } from '$lib/image-url';
	import { page } from '$app/stores';
	import type { page as pageData } from 'src/global';

	export let data: pageData;

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
				url: urlFor(data.mainImage.asset).width(1200).height(627).format('webp').url(),
				width: '1200',
				height: '627',
				alt: data.mainImage.alt
			}
		]
	}}
/>

<div class="bg-white pb-16 overflow-hidden">
	<div class="max-w-8xl mx-auto py-8 px-2 sm:py-16 sm:px-4 lg:px-6">
		<div class="text-center">
			<h2 class="text-base font-semibold text-primary tracking-wide uppercase">Locations</h2>
			<p
				class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl"
			>
				Find a store near you
			</p>
			<p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
				Let our experts help you get better sleep today!
			</p>
		</div>
	</div>
	<div class="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 w-full h-full">
		<div class="bg-white shadow overflow-hidden">
			<ul role="list" class="divide-y divide-gray-200">
				{#each $locations as location}
					<li class="px-4 py-4 sm:px-6">
						<div class="px-4 py-4 flex items-center sm:px-6">
							<div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
								<div class="">
									<div class="flex text-sm">
										<h2 class="text-xl font-medium text-gray-900">{location.title}</h2>
									</div>

									<div class="mt-2 flex">
										<div class="flex items-center text-sm text-gray-500">
											<p>
												{location.address}
											</p>
										</div>
									</div>
									<div class="flex">
										<div class="flex items-center text-sm text-gray-500">
											<p>
												{location.city}
												{location.state}, {location.zip}
											</p>
										</div>
									</div>
									<div class="mt-2 flex">
										<a
											href="tel:+1{location.phone.areaCode}{location.phone.three}{location.phone
												.four}"
											><div class="flex items-center text-base text-gray-500">
												<svg
													class="flex-shrink-0 w-5 h-5 text-gray-400"
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
												<span class="ml-3 text-secondary"
													>({location.phone.areaCode}) {location.phone.three}-{location.phone
														.four}</span
												>
											</div></a
										>
									</div>
									<div class="mt-2 flex">
										<svg
											class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											stroke-width="2"
											stroke="currentColor"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" /> <circle cx="12" cy="12" r="9" />
											<polyline points="12 7 12 12 15 15" /></svg
										>
										<p class="text-sm font-medium text-gray-500">
											{location.hours}
										</p>
									</div>
								</div>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
		<div class="h-screen-1/2 md:h-full">
			<Map />
		</div>
	</div>
</div>
