import { View, ViewProps } from 'react-native';
import { QuickComponent, IStyleProps } from 'quickly-react';
import { addCommonStyle, TCommonPropStyle } from './addCommonStyle';

const quickComponent = new QuickComponent();
quickComponent.tagName = 'Row';
const defaultRow = quickComponent.addProps('defaultRow', {
  style: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

quickComponent.setupDefaultProps([defaultRow], {
  shouldDetectStyleProps: true,
});
addCommonStyle(quickComponent);

export interface IRowProps extends ViewProps, IStyleProps, TCommonPropStyle {
  flex1?: boolean;
}

const Row: React.FC<IRowProps> = quickComponent.make(View);

export default Row;
