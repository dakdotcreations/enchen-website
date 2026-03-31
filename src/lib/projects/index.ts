import type { Project } from '$lib/types/project';

import executiveHQ from './executive-headquarters.json';
import lakesideVilla from './luxury-lakeside-villa.json';
import premiumLounge from './premium-members-lounge.json';
import penthouseSuite from './penthouse-suite-redesign.json';
import boardroom from './c-suite-boardroom-redesign.json';
import hotelLobby from './boutique-hotel-lobby.json';
import contemporaryApt from './contemporary-apartment.json';
import officeRitOut from './regional-office-fit-out.json';
import restaurantBar from './restaurant-and-bar.json';
import padrePio from './padre-pio-insurance.json';
import wilkenTelecom from './wilken-telecom-offices.json';

export const projects: Project[] = [
	executiveHQ,
	lakesideVilla,
	premiumLounge,
	penthouseSuite,
	boardroom,
	hotelLobby,
	contemporaryApt,
	officeRitOut,
	restaurantBar,
	padrePio,
	wilkenTelecom,
] as Project[];
