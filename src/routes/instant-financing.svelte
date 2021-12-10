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
	import SvelteSeo from 'svelte-seo';
	import { urlFor } from '$lib/image-url';
	import { page } from '$app/stores';
	import type { page as pageData } from 'src/global';

	export let data: pageData;

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	import { locations } from '$lib/store';
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
<!-- Header -->
<header class="text-center py-16 px-4 sm:px-6 lg:px-8">
	<h1 class="text-4xl font-extrabold tracking-tight text-gray-900">{data.title}</h1>
	<p class="mt-4 max-w-xl mx-auto text-base text-gray-500">
		{data.description}
	</p>
</header>
<!-- Locations -->
<section class="mx-auto max-w-3xl w-full">
	<div class="bg-white shadow overflow-hidden">
		<ul role="list" class="divide-y divide-gray-200">
			{#each $locations as location}
				<li class="px-4 py-4 sm:px-6">
					<div class="px-4 py-4 flex flex-col items-center sm:px-6 sm:flex-row">
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
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												/>
											</svg>

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
						<div class="mt-8 sm:mt-0 flex flex-shrink sm:flex sm:items-center">
							<div class="flex-shrink-0">
								<a
									href={location.finance}
									class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
								>
									<span>Apply Now</span>
								</a>
							</div>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>
