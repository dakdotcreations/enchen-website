import type { PageLoad } from './$types';
import { projects } from '$lib/projects/index';
import { error } from '@sveltejs/kit';

export const prerender = true;

export function entries() {
	return projects.map((p) => ({ slug: p.slug }));
}

export const load: PageLoad = ({ params }) => {
	const project = projects.find((p) => p.slug === params.slug);
	if (!project) error(404, 'Project not found');
	return { project };
};
