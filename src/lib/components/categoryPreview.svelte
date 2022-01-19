<script lang="ts">
	import type { categoryPreview } from '$lib/components/categoryPreview';
	export let data: categoryPreview[];
</script>

<div class="bg-white">
	<div class="max-w-8xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
		<div class="sm:flex sm:items-baseline sm:justify-between">
			<h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Everything You Need</h2>
			<a
				href="/locations"
				class="hidden text-sm font-semibold text-primary hover:text-highlight sm:block"
				>Find a location near you<span aria-hidden="true"> &rarr;</span></a
			>
		</div>

		<div class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
			<div
				class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
			>
				<img
					src={data[0].image.url}
					alt={data[0].image.alt}
					class="object-center object-cover group-hover:opacity-75"
				/>
				<div aria-hidden="true" class="bg-gradient-to-b from-transparent to-black opacity-50" />
				<div class="p-6 flex items-end">
					<div>
						<h3 class="font-semibold text-white">
							<a href={data[0].link} rel="external">
								<span class="absolute inset-0" />
								{data[0].title}
							</a>
						</h3>
						<p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
					</div>
				</div>
			</div>
			<div
				class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
			>
				<img
					src={data[1].image.url}
					alt={data[1].image.alt}
					class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
				/>
				<div
					aria-hidden="true"
					class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
				/>
				<div class="p-6 flex items-end sm:absolute sm:inset-0">
					<div>
						<h3 class="font-semibold text-white">
							<a href={data[1].link} rel="external">
								<span class="absolute inset-0" />
								{data[1].title}
							</a>
						</h3>
						<p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
					</div>
				</div>
			</div>
			<div
				class="group aspect-w-2 aspect-h-1 rounded-lg overflow-hidden sm:relative sm:aspect-none sm:h-full"
			>
				<img
					src={data[2].image.url}
					alt={data[2].image.alt}
					class="object-center object-cover group-hover:opacity-75 sm:absolute sm:inset-0 sm:w-full sm:h-full"
				/>
				<div
					aria-hidden="true"
					class="bg-gradient-to-b from-transparent to-black opacity-50 sm:absolute sm:inset-0"
				/>
				<div class="p-6 flex items-end sm:absolute sm:inset-0">
					<div>
						<h3 class="font-semibold text-white">
							<a href={data[2].link} rel="external">
								<span class="absolute inset-0" />
								{data[2].title}
							</a>
						</h3>
						<p aria-hidden="true" class="mt-1 text-sm text-white">Shop now</p>
					</div>
				</div>
			</div>
		</div>

		<div class="mt-6 sm:hidden">
			<a href="/inventory" class="block text-sm font-semibold text-primary hover:text-highlight"
				>Browse all categories<span aria-hidden="true"> &rarr;</span></a
			>
		</div>
	</div>
</div>
