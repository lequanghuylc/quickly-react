import { TStyle } from '../types';
import { addMarginPaddingStyles } from './addUnitStyles';

export interface ICommonStyle {
    [name: string]: TStyle;
}
export interface ITokens {
    borderColor: string;
    textColorPrimary: string;
    textColorSecondary: string;
    textColorTertiary: string;
    bgColorPrimary: string;
    bgColorSecondary: string;
    mainColor: string;
    unit?: number;
}

export const commonStyles = (tokens?: ITokens): ICommonStyle => {
    return {
        width100p: {
            width: '100%',
        },
        middle: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        colorWhite: {
            color: 'white',
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
            borderColor: tokens?.borderColor || '#D1D1D6',
        },
        stretch: {
            alignItems: 'stretch',
        },
        round1: {
            borderRadius: 8,
        },
        round0: {
            borderRadius: 4,
        },
        round1_5: {
            borderRadius: 12,
        },
        round2: {
            borderRadius: 16,
        },
        row: {
            flexDirection: 'row',
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.12,
            shadowRadius: 9.46,
            elevation: 9,
        },
        primary: {
            color: tokens?.textColorPrimary || 'black',
        },
        secondary: {
            color: tokens?.textColorSecondary || '#8E8E93',
        },
        tertiary: {
            color: tokens?.textColorTertiary || '#FFFFFF',
        },
        bgPrimary: {
            backgroundColor: tokens?.bgColorPrimary || '#F9F9F9',
        },
        bgSecondary: {
            backgroundColor: tokens?.bgColorSecondary || '#F2F2F7',
        },
        colorMain: {
            color: tokens?.mainColor || 'black',
        },
        bgMain: {
            backgroundColor: tokens?.mainColor || 'black',
        }
    }
};

const commons = [
    // script generateMarginPaddingKeys

    //0
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
    //1
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
    //2
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
    //3
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
    //5
    'm5',
    'mv5',
    'mh5',
    'ml5',
    'mt5',
    'mb5',
    'mr5',
    'p5',
    'pv5',
    'ph5',
    'pl5',
    'pt5',
    'pb5',
    'pr5',
    //4
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
    //6
    'm6',
    'mv6',
    'mh6',
    'ml6',
    'mt6',
    'mb6',
    'mr6',
    'p6',
    'pv6',
    'ph6',
    'pl6',
    'pt6',
    'pb6',
    'pr6',
    //7
    'm7',
    'mv7',
    'mh7',
    'ml7',
    'mt7',
    'mb7',
    'mr7',
    'p7',
    'pv7',
    'ph7',
    'pl7',
    'pt7',
    'pb7',
    'pr7',
    //8
    'm8',
    'mv8',
    'mh8',
    'ml8',
    'mt8',
    'mb8',
    'mr8',
    'p8',
    'pv8',
    'ph8',
    'pl8',
    'pt8',
    'pb8',
    'pr8',
    //9
    'm9',
    'mv9',
    'mh9',
    'ml9',
    'mt9',
    'mb9',
    'mr9',
    'p9',
    'pv9',
    'ph9',
    'pl9',
    'pt9',
    'pb9',
    'pr9',

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
    'round1_5',
    'round2',
    'shadow',
    'primary',
    'secondary',
    'tertiary',
    'bgPrimary',
    'bgSecondary',
    'colorMain',
    'bgMain',
] as const;
type TCommonroperty = typeof commons[number];
export type TCommonPropStyle = {
    [key in TCommonroperty]?: boolean;
};

export const addCommonStyles = (quickComponentInstact: any, cStyles : Array<ICommonStyle>, tokens : ITokens) => {
    if (!quickComponentInstact.addProps) return;
    const initialCommonStyles = Object.assign({}, commonStyles(tokens));
    addMarginPaddingStyles(initialCommonStyles, tokens.unit);
    const styleArray = [initialCommonStyles, ...cStyles];
    styleArray.forEach(style => {
        for (let key in style) {
            quickComponentInstact.addProps(key, {
                style: style[key],
            });
        }
    })
};
