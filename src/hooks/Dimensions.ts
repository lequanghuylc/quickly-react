
export let Dimensions : any;
export  const setDimensions = (dep : any) => {
    if (!dep && typeof window !== 'undefined') {
       Dimensions = {
        get: (type : any) => {
            return {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
          addEventListener: (event: 'change', callback : any) => {
            window.addEventListener('resize', callback);
          },
          removeEventListener: (event: 'change', callback : any) => {
            window.removeEventListener('resize', callback);
          },
       }
    } else {
        Dimensions = dep;
    }
}