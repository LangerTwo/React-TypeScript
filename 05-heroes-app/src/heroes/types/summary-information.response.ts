import type { Hero } from "./hero.interface";

export interface SummaryInformatioResponse {
    totalHeroes:   number;
    strongestHero: Hero;
    smartestHero:  Hero;
    heroCount:     number;
    villainCount:  number;
};