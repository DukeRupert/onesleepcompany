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
	import { urlFor } from '$lib/image-url';
	import SvelteSeo from 'svelte-seo';
	import type { page as pageData } from 'src/global';
	import { siteData } from '$lib/store';
	import { page } from '$app/stores';
	import { createForm } from 'felte';

	export let data: pageData;

	// Form Data
	const { form } = createForm({
		validate: (values) => {
			const errors = {};
			if (!values.firstName) errors.firstName = 'Must not be empty';
		},
		onSubmit: (values) => {
			console.log(JSON.stringify(values));
		}
	});

	// SEO
	const pageUrl = `https://${$page.host}${$page.path}`;

	let { email: oscEmail } = $siteData;
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
<div class="bg-white">
	<div class="py-24 lg:py-32">
		<div class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
			<h1 class="text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl">
				Get in touch
			</h1>
			<p class="mt-6 text-xl text-warm-gray-500 max-w-3xl">
				Our local experts are here to help you find better sleep today!
			</p>
		</div>
	</div>
</div>

<!-- Contact section -->
<section class="relative bg-white" aria-labelledby="contact-heading">
	<div class="absolute w-full h-1/2 bg-white" aria-hidden="true" />
	<!-- Decorative dot pattern -->
	<div class="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<svg
			class="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
			width="404"
			height="384"
			fill="none"
			viewBox="0 0 404 384"
			aria-hidden="true"
		>
			<defs>
				<pattern
					id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
					x="0"
					y="0"
					width="20"
					height="20"
					patternUnits="userSpaceOnUse"
				>
					<rect x="0" y="0" width="4" height="4" class="text-warm-gray-200" fill="currentColor" />
				</pattern>
			</defs>
			<rect width="404" height="384" fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
		</svg>
	</div>
	<div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="relative bg-white shadow-xl mb-8">
			<h2 id="contact-heading" class="sr-only">Contact us</h2>

			<div class="grid grid-cols-1 lg:grid-cols-3">
				<!-- Contact information -->
				<div class="relative overflow-hidden py-10 px-6 bg-secondary sm:px-10 xl:p-12">
					<!-- Decorative angle backgrounds -->
					<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
						<svg
							class="absolute inset-0 w-full h-full"
							width="343"
							height="388"
							viewBox="0 0 343 388"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
								fill="url(#linear1)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear1"
									x1="254.553"
									y1="107.554"
									x2="961.66"
									y2="814.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 w-full h-full"
							width="359"
							height="339"
							viewBox="0 0 359 339"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
								fill="url(#linear2)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear2"
									x1="192.553"
									y1="28.553"
									x2="899.66"
									y2="735.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<div
						class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
						aria-hidden="true"
					>
						<svg
							class="absolute inset-0 w-full h-full"
							width="160"
							height="678"
							viewBox="0 0 160 678"
							fill="none"
							preserveAspectRatio="xMidYMid slice"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
								fill="url(#linear3)"
								fill-opacity=".1"
							/>
							<defs>
								<linearGradient
									id="linear3"
									x1="192.553"
									y1="325.553"
									x2="899.66"
									y2="1032.66"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#fff" />
									<stop offset="1" stop-color="#fff" stop-opacity="0" />
								</linearGradient>
							</defs>
						</svg>
					</div>
					<h3 class="text-lg font-medium text-white">Contact information</h3>
					<dl class="mt-8 space-y-6">
						{#each $locations as { title, phone }}
							<dt><span class="sr-only">{title} store phone number</span></dt>
							<a href="tel:+1{phone.areaCode}{phone.three}{phone.four}"
								><dd class="flex text-base text-indigo-50">
									<svg
										class="flex-shrink-0 w-6 h-6 text-indigo-200"
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
									<span class="ml-3">({phone.areaCode}) {phone.three}-{phone.four}</span>
									<p class="inline-block text-base text-indigo-50 max-w-3xl ml-4">
										- &nbsp; {title}
									</p>
								</dd></a
							>
							<dt><span class="sr-only">Email</span></dt>
						{/each}
						<dd class="flex text-base text-indigo-50">
							<svg
								class="flex-shrink-0 w-6 h-6 text-indigo-200"
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
								<rect x="3" y="5" width="18" height="14" rx="2" />
								<polyline points="3 7 12 13 21 7" /></svg
							>
							<span class="ml-3">{oscEmail}</span>
						</dd>
					</dl>
				</div>
				<!-- Contact form -->
				<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
					<h3 class="text-lg font-medium text-gray-900">Send us a message</h3>
					<!-- svelte-ignore component-name-lowercase -->
					<form use:form class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
						<div>
							<label for="first-name" class="block text-sm font-medium text-gray-900"
								>First name</label
							>
							<div class="mt-1">
								<input
									type="text"
									id="first-name"
									name="firstName"
									autocomplete="given-name"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<label for="last-name" class="block text-sm font-medium text-gray-900"
								>Last name</label
							>
							<div class="mt-1">
								<input
									type="text"
									id="last-name"
									name="lastName"
									autocomplete="family-name"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<label for="email" class="block text-sm font-medium text-gray-900">Email</label>
							<div class="mt-1">
								<input
									id="email"
									type="email"
									name="email"
									autocomplete="email"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div>
							<div class="flex justify-between">
								<label for="tel" class="block text-sm font-medium text-gray-900">Phone</label>
								<span id="tel-optional" class="text-sm text-gray-500">Optional</span>
							</div>
							<div class="mt-1">
								<input
									type="text"
									id="tel"
									name="tel"
									autocomplete="tel"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
									aria-describedby="tel-optional"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
							<div class="mt-1">
								<input
									type="text"
									id="subject"
									name="subject"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border-gray-300 rounded-md"
								/>
							</div>
						</div>
						<div class="sm:col-span-2">
							<div class="flex justify-between">
								<label for="message" class="block text-sm font-medium text-gray-900">Message</label>
								<span id="message-max" class="text-sm text-gray-500">Max. 500 characters</span>
							</div>
							<div class="mt-1">
								<textarea
									id="message"
									name="message"
									rows="4"
									class="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-highlight focus:border-highlight border border-gray-300 rounded-md"
									aria-describedby="message-max"
								/>
							</div>
						</div>
						<div class="sm:col-span-2 sm:flex sm:justify-end">
							<button
								type="submit"
								value="Submit Form"
								class="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-highlight sm:w-auto"
							>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</section>
