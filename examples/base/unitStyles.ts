const UNIT = 10; // 10px;

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
  const arr = [];
  ['0', '1', '2', '3', '4'].forEach((number) => {
    matching.forEach((val) => {
      arr.push(val.key + number);
    });
  });
  return arr;
})();

export const addMarginPaddingStyles = (commonStyles) => {
  ['0', '1', '2', '3', '4'].forEach((number) => {
    matching.forEach(({ key, value }) => {
      commonStyles[key + number] = {
        [value]: UNIT * Number(number === '0' ? 0.5 : number),
      };
    });
  });
};
