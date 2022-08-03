import { TStyle } from 'quickly-react';
import { addMarginPaddingStyles } from './unitStyles';

interface ICommonStyle {
  [name: string]: TStyle;
}

const COLOR = {
  BORDER: '#BABABA',
};

const commonStyles: ICommonStyle = {
  width100p: {
    width: '100%',
  },
  middle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgWhite: {
    backgroundColor: 'white',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  absolute: {
    position: 'absolute',
  },
  borderThin: {
    borderWidth: 1,
    borderColor: COLOR.BORDER,
  },
  stretch: {
    alignItems: 'stretch',
  },
  round1: {
    borderRadius: 10,
  },
  round0: {
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
};
addMarginPaddingStyles(commonStyles);

const commons = [
  // script generateMarginPaddingKeys
  'm0',
  'mv0',
  'mh0',
  'ml0',
  'mt0',
  'mb0',
  'mr0',
  'p0',
  'pv0',
  'ph0',
  'pl0',
  'pt0',
  'pb0',
  'pr0',
  'm1',
  'mv1',
  'mh1',
  'ml1',
  'mt1',
  'mb1',
  'mr1',
  'p1',
  'pv1',
  'ph1',
  'pl1',
  'pt1',
  'pb1',
  'pr1',
  'm2',
  'mv2',
  'mh2',
  'ml2',
  'mt2',
  'mb2',
  'mr2',
  'p2',
  'pv2',
  'ph2',
  'pl2',
  'pt2',
  'pb2',
  'pr2',
  'm3',
  'mv3',
  'mh3',
  'ml3',
  'mt3',
  'mb3',
  'mr3',
  'p3',
  'pv3',
  'ph3',
  'pl3',
  'pt3',
  'pb3',
  'pr3',
  'm4',
  'mv4',
  'mh4',
  'ml4',
  'mt4',
  'mb4',
  'mr4',
  'p4',
  'pv4',
  'ph4',
  'pl4',
  'pt4',
  'pb4',
  'pr4',

  'width100p',
  'middle',
  'bgWhite',
  'absoluteFill',
  'absolute',
  'borderThin',
  'row',
  'stretch',
  'round1',
  'round0',
  'shadow',
] as const;
type TCommonroperty = typeof commons[number];
export type TCommonPropStyle = {
  [key in TCommonroperty]?: boolean;
};

export const addCommonStyle = (quickComponentInstact, cStyles = commonStyles) => {
  if (!quickComponentInstact.addProps) return;
  for (let key in cStyles) {
    quickComponentInstact.addProps(key, {
      style: cStyles[key],
    });
  }
};
