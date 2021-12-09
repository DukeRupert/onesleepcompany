<script lang="ts">
	import type { highlight } from '$lib/components/highlights';

	export let data: highlight[];
</script>

<div class="py-12 bg-white">
	<div class="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-8xl lg:px-8">
		<dl class="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
			<div class="flex flex-col h-64">
				<dt>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-white text-highlight"
					>
						<!-- Badge Check -->
						<svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
							/>
						</svg>
					</div>
					<p class="mt-5 text-lg leading-6 font-medium text-gray-900">{data[0].title}</p>
				</dt>
				<dd class="mt-2 text-base text-gray-500">
					{data[0].description}
				</dd>
				<div class="mt-auto">
					<a
						href={data[0].cta.link}
						class="inline-flex px-4 py-2 mt-auto border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
					>
						{data[0].cta.title}
					</a>
				</div>
			</div>

			<div class="flex flex-col h-64">
				<dt>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-white text-highlight"
					>
						<!-- Location Marker	 -->
						<svg class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					</div>
					<p class="mt-5 text-lg leading-6 font-medium text-gray-900">{data[1].title}</p>
				</dt>
				<dd class="mt-2 text-base text-gray-500">
					{data[1].description}
				</dd>
				<div class="mt-auto">
					<a
						href={data[1].cta.link}
						class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
					>
						{data[1].cta.title}
					</a>
				</div>
			</div>

			<div class="flex flex-col h-64">
				<dt>
					<div
						class="flex items-center justify-center h-12 w-12 rounded-md bg-white text-highlight"
					>
						<!-- Shield Check	 -->
						<svg
							class="h-12 w-12"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path stroke="none" d="M0 0h24v24H0z" /> <path d="M9 12l2 2l4 -4" />
							<path
								d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"
							/></svg
						>
					</div>
					<p class="mt-5 text-lg leading-6 font-medium text-gray-900">{data[2].title}</p>
				</dt>
				<dd class="mt-2 text-base text-gray-500">
					{data[2].description}
				</dd>
				<div class="mt-auto">
					<a
						href={data[2].cta.link}
						class="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary"
					>
						{data[2].cta.title}
					</a>
				</div>
			</div>
		</dl>
	</div>
</div>
