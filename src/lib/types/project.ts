export type Tag = 'corporate' | 'residential' | 'commercial';

export type TextBlock = {
	type: 'text';
	heading?: string;
	body: string;
};

export type ImageBlock = {
	type: 'image';
	src: string;
	alt: string;
	caption?: string;
};

export type VideoBlock = {
	type: 'video';
	src: string;
	caption?: string;
};

export type ColumnsBlock = {
	type: 'columns';
	items: (TextBlock | ImageBlock | VideoBlock)[];
};

export type ContentBlock = TextBlock | ImageBlock | VideoBlock | ColumnsBlock;

export type Project = {
	slug: string;
	title: string;
	location: string;
	tag: Tag;
	/** Path under /static, leave empty until real image is added */
	thumbnail: string;
	content: ContentBlock[];
};
