<script lang="ts">
	export let title: string;
	export let slug;
	export let image;
	export let price: number;
	export let features: string[];
</script>

<div>
	<div class="relative">
		<div class="relative w-full h-72 rounded-lg overflow-hidden">
			<img src={image.url} alt={image.alt} class="w-full h-full object-center object-cover" />
		</div>
		<div class="relative mt-4">
			<h3 class="text-sm font-medium text-gray-900">{title}</h3>
			{#if features}
				<ul class="ml-4">
					{#each features as feature}
						<li class="mt-1 text-sm text-gray-500">
							<!-- Star -->
							<svg
								class="w-3 h-3 inline-block mr-4"
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
									d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z"
								/></svg
							>
							{feature}
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<div
			class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden"
		>
			<div
				aria-hidden="true"
				class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
			/>
			{#if price}
				<p class="relative text-lg font-semibold text-white">From ${price}</p>
			{/if}
		</div>
	</div>
</div>
