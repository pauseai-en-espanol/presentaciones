// El mando de presentaciones envía ↓/↑. Por defecto Slidev los usa para saltar
// de slide sin pasar por los clics. Aquí van clic a clic y, a gusto de Dani,
// al revés de lo habitual: ↑ avanza y ↓ retrocede. →/← siguen igual y la vista
// general (o) mantiene sus flechas.
// Docs: https://sli.dev/custom/config-shortcuts
import type { NavOperations, ShortcutOptions } from '@slidev/types';

const setupShortcuts = (nav: NavOperations, base: ShortcutOptions[]): ShortcutOptions[] =>
  base.map((s) => {
    if (s.name === 'prev_up') return { ...s, fn: nav.next };
    if (s.name === 'next_down') return { ...s, fn: nav.prev };
    return s;
  });

export default setupShortcuts;
