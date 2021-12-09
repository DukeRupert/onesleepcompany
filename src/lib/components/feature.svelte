<script lang="ts">
	import type { feature } from '$lib/components/feature';

	export let data: feature;
</script>

<div class="relative bg-white pt-16 pb-32 overflow-hidden">
	<div class="mt-24">
		<div
			class="lg:mx-auto lg:max-w-8xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24"
		>
			<div
				class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2"
			>
				<div>
					<div>
						<span class="h-12 w-12 rounded-md flex items-center justify-center bg-primary">
							<!-- flag -->
							<svg
								class="h-6 w-6 text-white"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" /> <line x1="5" y1="5" x2="5" y2="21" />
								<line x1="19" y1="5" x2="19" y2="14" />
								<path d="M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0" />
								<path d="M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0" /></svg
							>
						</span>
					</div>
					<div class="mt-6">
						<h2 class="text-3xl font-extrabold tracking-tight text-gray-900">
							{data.title}
						</h2>
						<p class="mt-4 text-lg text-gray-500">
							{data.description}
						</p>
						<div class="mt-6">
							<a
								href={data.cta.link}
								class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
							>
								{data.cta.title}
							</a>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-12 sm:mt-16 sm:max-w-2xl sm:mx-auto lg:mt-0 lg:col-start-1">
				<div class="sm:pr-6 px-4 md:px-8 lg:px-0 lg:m-0 lg:relative lg:h-full">
					<img
						class="w-full h-auto rounded-xl shadow-xl ring-1 ring-black ring-opacity-5"
						src={data.image.url}
						alt={data.image.alt}
					/>
				</div>
			</div>
		</div>
	</div>
</div>
