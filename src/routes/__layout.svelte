<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(`/api/siteSettings.json`);

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
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Banner from '$lib/components/banner.svelte';
	import { siteData } from '$lib/store';
	import { onMount } from 'svelte';

	export let data;
	if (data) {
		siteData.set(data);
	} else {
		console.log('Error: Failed to load site data.');
	}

	onMount(() => {
		var chatbox = document.getElementById('fb-customer-chat');
		chatbox.setAttribute('page_id', '958154947684587');
		chatbox.setAttribute('attribution', 'biz_inbox');

		window.fbAsyncInit = function () {
			FB.init({
				xfbml: true,
				version: 'v12.0'
			});
		};

		(function (d, s, id) {
			var js,
				fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) return;
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
			fjs.parentNode.insertBefore(js, fjs);
		})(document, 'script', 'facebook-jssdk');
	});
</script>

<svelte:head>
	<!-- Facebook Pixel Code -->
	<script>
		!(function (f, b, e, v, n, t, s) {
			if (f.fbq) return;
			n = f.fbq = function () {
				n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
			};
			if (!f._fbq) f._fbq = n;
			n.push = n;
			n.loaded = !0;
			n.version = '2.0';
			n.queue = [];
			t = b.createElement(e);
			t.async = !0;
			t.src = v;
			s = b.getElementsByTagName(e)[0];
			s.parentNode.insertBefore(t, s);
		})(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
		fbq('init', '900909000387495');
		fbq('track', 'PageView');
	</script>
	<noscript
		><img
			height="1"
			width="1"
			style="display:none"
			src="https://www.facebook.com/tr?id=900909000387495&ev=PageView&noscript=1"
		/></noscript
	>
	<!-- End Facebook Pixel Code -->
</svelte:head>

<div class="parent">
	<nav class="bg-white shadow">
		<Banner />
		<Navbar />
	</nav>
	<main class="bg-white">
		<slot />
		<!-- Messenger Chat Plugin Code -->
		<div id="fb-root" />
		<!-- Your Chat Plugin code -->
		<div id="fb-customer-chat" class="fb-customerchat" />
	</main>
	<footer>
		<Footer />
	</footer>
</div>

<style>
	.parent {
		display: grid;
		grid-template-rows: auto 1fr auto;
	}
	nav {
		grid-row-start: 1;
		grid-row-end: 2;
	}
	main {
		grid-row-start: 2;
		grid-row-end: 3;
	}

	footer {
		grid-row-start: 3;
		grid-row-end: 4;
	}
</style>
