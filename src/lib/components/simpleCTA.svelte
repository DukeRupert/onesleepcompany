<script lang="ts">
	export let line1: string = 'Ready to dive in?';
	export let line2: string = 'Start your free trial today.';
	export let action1: string = 'Get started';
	export let link1: string = '#';
	export let action2: string = 'Learn more';
	export let link2: string = '#';
</script>

<div class="bg-white">
	<div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
		<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			<span class="block">{line1}</span>
			<span class="block">{line2}</span>
		</h2>
		<div class="mt-8 flex justify-center">
			<div class="inline-flex rounded-md shadow">
				<a
					href={link1}
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-matisse-600 hover:bg-matisse-700"
				>
					{action1}
				</a>
			</div>
			<div class="ml-3 inline-flex">
				<a
					href={link2}
					class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-matisse-700 bg-matisse-100 hover:bg-matisse-200"
				>
					{action2}
				</a>
			</div>
		</div>
	</div>
</div>
