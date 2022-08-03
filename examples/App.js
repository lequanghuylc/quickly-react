import React from 'react';
import { QuickComponent, ThemeProvider, useThemeContext } from './lib';
import { Text, TouchableOpacity, View } from 'react-native';

const qC1 = new QuickComponent();
qC1.addProps('bold', {
  style: {
    fontWeight: 'bold',
  },
})
const body = qC1.addProps('body', {
  rStyle: {
    md: {
      fontSize: 16,
    },
    xs: {
      fontSize: 14,
    }
  },
})
qC1.addProps('h2', {
  rStyle: {
    md: {
      fontSize: 24,
    },
    xs: {
      fontSize: 16,
    }
  },
})
qC1.addProps('colorMain', {
  theme: {
    light: {
      color: 'red',
    },
    dark: {
      color: 'white',
    }
  }
})
qC1.setupDefaultProps([body]);
const NewText = qC1.make(Text);

const qC2 = new QuickComponent();
const col = qC2.addProps('col', {
  theme: {
    light: {
      backgroundColor: 'white',
    },
    dark: {
      backgroundColor: 'black',
    },
  },
  style: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
});
qC2.addProps('middle', {
  props: {
    col: true,
  },
  style: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
qC2.addProps('flex1', {
  props: {
    col: true,
  },
  style: {
    flex: 1,
  },
});
qC2.setupDefaultProps([col]);
const Col = qC2.make(View);

const ChangeThemeButton = () => {
  const [theme, setTheme] = useThemeContext();
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderColor: theme === 'light' ? 'transparent' : 'white',
        borderWidth: 1,
      }}
      onPress={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <NewText bold colorMain>Change Theme: {theme}</NewText>
    </TouchableOpacity>
  );
}

export default function App() {

  return (
    <ThemeProvider initial='light'>
      <div
        style={{
          height: '100vh',
          display: 'flex',
        }}
      >
        <Col flex1 middle>
          <NewText bold colorMain style={{ marginBottom: 20 }}>
            Hello World
          </NewText>
          <ChangeThemeButton />
        </Col>
      </div>
    </ThemeProvider>
  );
}