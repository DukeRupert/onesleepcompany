<script lang="ts">
	import type { stats } from '$lib/components/stats';

	export let data: stats;
</script>

<div class="bg-tertiary">
	<div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl font-extrabold text-white sm:text-4xl">
				{data.title}
			</h2>
			<p class="mt-3 text-xl text-indigo-200 sm:mt-4">
				{data.description}
			</p>
		</div>
		<dl class="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
			<div class="flex flex-col">
				<dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
					{data.stats[0].description}
				</dt>
				<dd class="order-1 text-5xl font-extrabold text-white">
					{data.stats[0].title}
				</dd>
			</div>
			<div class="flex flex-col mt-10 sm:mt-0">
				<dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
					{data.stats[1].description}
				</dt>
				<dd class="order-1 text-5xl font-extrabold text-white">
					{data.stats[1].title}
				</dd>
			</div>
			<div class="flex flex-col mt-10 sm:mt-0">
				<dt class="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
					{data.stats[2].description}
				</dt>
				<dd class="order-1 text-5xl font-extrabold text-white">
					{data.stats[2].title}
				</dd>
			</div>
		</dl>
	</div>
</div>
