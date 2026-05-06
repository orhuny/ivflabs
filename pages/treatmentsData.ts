// Backwards-compatibility re-export. The canonical source of treatment data is
// now under `pages/treatments/`, with each treatment in its own file.
export { TREATMENTS, TREATMENT_MAP, findTreatmentBySlug, findTreatmentById, treatmentPath } from './treatments';
