
export let Dimensions = {
  get: (type: any) => {
    return {
      width: typeof window === 'undefined' ? 0 : window.innerWidth,
      height: typeof window === 'undefined' ? 0 : window.innerHeight,
    };
  },
  addEventListener: (event: 'change', callback: any) => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return;
    window.addEventListener('resize', callback);
  },
  removeEventListener: (event: 'change', callback: any) => {
    if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return;
    window.removeEventListener('resize', callback);
  },
}
export const setDimensions = (dep: any) => {
  Dimensions = dep;
}