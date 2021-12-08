// https://www.sanity.io/docs/what-you-need-to-know-about-block-text/presenting-block-text
// https://github.com/movingbrands/svelte-portable-text
import BlockContent from '$lib/portable-text';
// https://www.npmjs.com/package/@sanity/image-url
import { urlFor } from '$lib/image-url';
import Link from '$lib/components/link.svelte';
import ProductCard from '$lib/components/productCard.svelte';

export default {
	marks: {
		link: ({ children, mark }) => ({
			component: Link,
			childNodes: children,
			props: mark
		})
	},
	types: {
		adustableBase: ({ node, children }) => ({
			component: ProductCard,
			childNodes: children,
			props: {
				title: node.title,
				slug: node.slug.current,
				image: {
					url: urlFor(node.images[0].asset).width(450).format('webp').url(),
					alt: node.title
				},
				price: node.price,
				features: node.features
			}
		}),
		adustableBaseReference: ({ children, node: { adustableBase } }) => ({
			component: ProductCard,
			childNodes: children,
			props: {
				title: adustableBase.title,
				slug: adustableBase.slug.current,
				image: {
					url: urlFor(adustableBase.images[0].asset).width(450).format('webp').url(),
					alt: adustableBase.title
				},
				price: adustableBase.price,
				features: adustableBase.features
			}
		}),
		mattress: ({ node, children }) => ({
			component: ProductCard,
			childNodes: children,
			props: {
				title: node.title,
				slug: node.slug.current,
				image: {
					url: urlFor(node.images[0].asset).width(450).format('webp').url(),
					alt: node.title
				},
				price: node.price,
				features: node.features
			}
		}),
		mattressReference: ({ children, node: { mattress } }) => ({
			component: ProductCard,
			childNodes: children,
			props: {
				title: mattress.title,
				slug: mattress.slug.current,
				image: {
					url: urlFor(mattress.images[0].asset).width(450).format('webp').url(),
					alt: mattress.title
				},
				price: mattress.price,
				features: mattress.featuresauthor
			}
		})
	}
};
