<script>
	import { onMount } from 'svelte';
	import { Loader } from 'google-maps';

	let container;
	let map;
	let zoom = 8;
	let center = { lat: 47.292070374467144, lng: -122.31179780486268 };

	onMount(async () => {
		const options = {};
		const loader = new Loader('AIzaSyDs_RPFRaRePiDjqBlsEdFIU6SI5fJw9-I', options);
		const google = await loader.load();

		const stores = [
			{ label: 'Tacoma', lat: 47.209177062491634, lng: -122.46403353545608 },
			{ label: 'Sumner', lat: 47.24159193453409, lng: -122.24331057385851 },
			{ label: 'Kent', lat: 47.426434416755285, lng: -122.20090430546209 },
			{ label: 'Clackamas', lat: 45.493526319384465, lng: -122.59714049452576 }
		];

		map = new google.maps.Map(container, {
			zoom,
			center: center
		});

		stores.forEach((store) => {
			new google.maps.Marker({
				position: store,
				map,
				title: store.label
			});
		});
	});
</script>

<div class="w-full h-full" bind:this={container} />
