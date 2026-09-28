// El mando de presentaciones envía ↓/↑. Por defecto Slidev los usa para saltar
// de slide sin pasar por los clics; aquí avanzan y retroceden clic a clic,
// igual que →/←. La vista general (o) mantiene sus flechas.
// Docs: https://sli.dev/custom/config-shortcuts
import type { NavOperations, ShortcutOptions } from '@slidev/types';

const setupShortcuts = (nav: NavOperations, base: ShortcutOptions[]): ShortcutOptions[] =>
  base.map((s) => {
    if (s.name === 'next_down') return { ...s, fn: nav.next };
    if (s.name === 'prev_up') return { ...s, fn: nav.prev };
    return s;
  });

export default setupShortcuts;
