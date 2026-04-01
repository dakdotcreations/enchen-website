import type { Project } from '$lib/types/project';

import padrePio from './padre-pio-insurance.json';
import wilkenTelecom from './wilken-telecom-offices.json';
import faoOffices from './fao-offices.json';
import privateResidence from './private-residence.json';

export const projects: Project[] = [
	padrePio,
	wilkenTelecom,
	faoOffices,
	privateResidence,
] as Project[];
