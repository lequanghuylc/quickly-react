import { COLOR } from './tokens';

type TPropParam = {
  propName: string;
  obj: any;
  isDefault?: boolean;
};

export const viewProps: Array<TPropParam> = [
  {
    propName: 'bgTheme',
    obj: {
      theme: {
        dark: {
          backgroundColor: COLOR.DARK_1,
        },
        light: {
          backgroundColor: COLOR.WHITE,
        },
      },
    },
  },
  {
    propName: 'bgTheme2',
    obj: {
      theme: {
        dark: {
          backgroundColor: COLOR.DARK_2,
        },
        light: {
          backgroundColor: COLOR.WHITE,
        },
      },
    },
  },
];

export interface IViewProps {
  bgTheme?: boolean;
  bgTheme2?: boolean;
}
