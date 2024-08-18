export const matching = [
  { key: 'm', value: 'margin' },
  { key: 'mv', value: 'marginVertical' },
  { key: 'mh', value: 'marginHorizontal' },
  { key: 'ml', value: 'marginLeft' },
  { key: 'mt', value: 'marginTop' },
  { key: 'mb', value: 'marginBottom' },
  { key: 'mr', value: 'marginRight' },
  { key: 'p', value: 'padding' },
  { key: 'pv', value: 'paddingVertical' },
  { key: 'ph', value: 'paddingHorizontal' },
  { key: 'pl', value: 'paddingLeft' },
  { key: 'pt', value: 'paddingTop' },
  { key: 'pb', value: 'paddingBottom' },
  { key: 'pr', value: 'paddingRight' },
];
export const listOfMarginPaddingKeys = (() => {
  const arr : any = [];
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach((number) => {
    matching.forEach((val) => {
      arr.push(val.key + number);
    });
  });
  return arr;
})();

export const addMarginPaddingStyles = (commonStyles : any, unit = 10) => {
  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].forEach((number) => {
    matching.forEach(({ key, value }) => {
      commonStyles[key + number] = {
        [value]: unit * Number(number === '0' ? 0.5 : number),
      };
    });
  });
};
