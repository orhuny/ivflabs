import type { Treatment, Language } from '../../types';
import ivf from './ivf';
import icsi from './icsi';
import eggDonation from './egg-donation';
import spermDonation from './sperm-donation';
import embryoDonation from './embryo-donation';
import pgdPgs from './pgd-pgs';
import iui from './iui';
import eggFreezing from './egg-freezing';
import embryoFreezing from './embryo-freezing';
import assistedHatching from './assisted-hatching';
import fetalReduction from './fetal-reduction';
import surrogacy from './surrogacy';
import infertilityTreatment from './infertility-treatment';
import miniIvf from './mini-ivf';
import tesaTese from './tesa-tese';
import prp from './prp';

/**
 * Source-of-truth list of all treatments.
 * The order here drives both the listing grid and the sitemap.
 */
export const TREATMENTS: Treatment[] = [
  ivf,
  icsi,
  eggDonation,
  spermDonation,
  embryoDonation,
  pgdPgs,
  iui,
  eggFreezing,
  embryoFreezing,
  assistedHatching,
  fetalReduction,
  surrogacy,
  infertilityTreatment,
  miniIvf,
  tesaTese,
  prp,
];

export const TREATMENT_MAP: Record<string, Treatment> = TREATMENTS.reduce((acc, t) => {
  acc[t.id] = t;
  return acc;
}, {} as Record<string, Treatment>);

/** Find a treatment by its localized slug for a specific language. */
export function findTreatmentBySlug(lang: Language, slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug[lang] === slug);
}

/** Find a treatment by its (language-agnostic) id. */
export function findTreatmentById(id: string): Treatment | undefined {
  return TREATMENT_MAP[id];
}

/** Build the canonical URL path for a treatment in a given language. */
export function treatmentPath(lang: Language, treatment: Treatment): string {
  return `/${lang}/treatments/${treatment.slug[lang]}`;
}
