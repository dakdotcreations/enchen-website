import type { Project } from '$lib/types/project';

import padrePio from './padre-pio-insurance.json';
import wilkenTelecom from './wilken-telecom-offices.json';

export const projects: Project[] = [
	padrePio,
	wilkenTelecom,
] as Project[];
