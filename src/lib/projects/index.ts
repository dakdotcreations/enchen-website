import type { Project } from '$lib/types/project';

import padrePio from './padre-pio-insurance.json';
import wilkenTelecom from './wilken-telecom-offices.json';
import faoOffices from './fao-offices.json';
import privateResidence from './private-residence.json';
import financeTrustBank from './finance-trust-bank.json';
import nitaReceptionLounge from './nita-reception-lounge.json';
import nitaExecutiveDirectorsOffice from './nita-executive-directors-office.json';

export const projects: Project[] = [
	padrePio,
	wilkenTelecom,
	faoOffices,
	financeTrustBank,
	nitaReceptionLounge,
	nitaExecutiveDirectorsOffice,
	privateResidence,
] as Project[];
