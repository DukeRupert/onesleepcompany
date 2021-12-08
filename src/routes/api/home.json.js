import client from '$lib/sanityClient';

export async function get() {
	// You must be on the home page if you reached this endpoint
	const slug = '/';

	// Build query using slug
	const filter = `*[_type == "page" && slug.current == "${slug}"]`;
	const projection = `{...,body[]{...,mattress->, adustableBase->}, mainImage{...,asset->}}`;
	const query = filter + projection;

	// Since only one match is expected destructure result
	const [data] = await client.fetch(query);

	if (data) {
		return {
			body: {
				data
			}
		};
	}

	return {
		status: data.status,
		error: new Error(`Could not fetch ${query}`)
	};
}
