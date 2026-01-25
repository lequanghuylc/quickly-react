import React from 'react';
import Head from 'next/head';
// @ts-ignore - react-native-web types
import { ScrollView } from 'react-native';
import { Col, Row, Text, Grid } from '@/components/base';
import { COLOR } from '@/components/base/tokens';

export default function Home() {
  return (
    <>
      <Head>
        <title>shadcn/ui - Reimplemented with quickly-react</title>
        <meta
          name="description"
          content="shadcn/ui design system reimplemented using quickly-react library"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Col flex1 style={{ backgroundColor: COLOR.WHITE }}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <Col
            p4
            style={{
              background: `linear-gradient(135deg, ${COLOR.PRIMARY_500} 0%, ${COLOR.PRIMARY_400} 100%)`,
              minHeight: 400,
            }}
            middle
          >
            <Col gap={3} style={{ maxWidth: 800, width: '100%' }}>
              <Text
                h1
                bold
                center
                style={{ color: COLOR.WHITE, fontSize: 48, lineHeight: 56 }}
              >
                quickly-react
              </Text>
              <Text
                lg
                center
                style={{ color: COLOR.WHITE, opacity: 0.9, fontSize: 20 }}
              >
                shadcn/ui Reimplemented
              </Text>
              <Text
                base
                center
                style={{ color: COLOR.WHITE, opacity: 0.8, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
                mt2
              >
                The shadcn/ui design system reimplemented using quickly-react.
                All components are built from the original Figma design system.
              </Text>
              <Row middle gap={3} mt4 style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="/primitives" style={{ textDecoration: 'none' }}>
                  <Col
                    round1
                    ph4
                    pv2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      cursor: 'pointer',
                    }}
                  >
                    <Text base medium style={{ color: COLOR.PRIMARY_500 }}>
                      View Primitives
                    </Text>
                  </Col>
                </a>
                <a
                  href="https://www.figma.com/design/0hsqGRQdxhz4yMZpDxhuaf/-shadcn-ui---Design-System--Community-?node-id=4-463&p=f&t=d8SvAqCkyh8Rxa4w-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <Col
                    round1
                    ph4
                    pv2
                    middle
                    style={{
                      backgroundColor: 'transparent',
                      borderWidth: 1,
                      borderColor: COLOR.WHITE,
                      cursor: 'pointer',
                    }}
                  >
                    <Text base medium style={{ color: COLOR.WHITE }}>
                      View Figma Design
                    </Text>
                  </Col>
                </a>
              </Row>
            </Col>
          </Col>

          {/* Features Section */}
          <Col p4 gap={4} style={{ maxWidth: 1200, width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Col gap={2} mb4>
              <Text h2 bold center>
                shadcn/ui Reimplemented
              </Text>
              <Text base center style={{ color: COLOR.GREYSCALE_600, maxWidth: 700, marginLeft: 'auto', marginRight: 'auto' }}>
                This is the shadcn/ui design system reimplemented using quickly-react.
                All components are built from the original Figma design and styled via props.
              </Text>
            </Col>

            <Grid xs="100%" md="1:1:1" margin={-2} mt4>
              <Col
                margin={2}
                p4
                round2
                style={{
                  backgroundColor: COLOR.WHITE,
                  borderWidth: 1,
                  borderColor: COLOR.GREYSCALE_300,
                }}
              >
                <Text h4 bold mb2>
                  🎨 shadcn/ui Design System
                </Text>
                <Text base style={{ color: COLOR.GREYSCALE_600 }}>
                  All components are recreated from the original{' '}
                  <a
                    href="https://www.figma.com/design/0hsqGRQdxhz4yMZpDxhuaf/-shadcn-ui---Design-System--Community-?node-id=4-463&p=f&t=d8SvAqCkyh8Rxa4w-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: COLOR.PRIMARY_500, textDecoration: 'underline' }}
                  >
                    shadcn/ui Figma design system
                  </a>
                  , ensuring pixel-perfect accuracy and design consistency.
                </Text>
              </Col>

              <Col
                margin={2}
                p4
                round2
                style={{
                  backgroundColor: COLOR.WHITE,
                  borderWidth: 1,
                  borderColor: COLOR.GREYSCALE_300,
                }}
              >
                <Text h4 bold mb2>
                  ⚡ Built with quickly-react
                </Text>
                <Text base style={{ color: COLOR.GREYSCALE_600 }}>
                  Reimplemented using quickly-react, a library that enables styling via props.
                  No StyleSheet needed—just use props like <code style={{ backgroundColor: COLOR.GREYSCALE_100, padding: '2px 4px', borderRadius: 3 }}>p4</code>, <code style={{ backgroundColor: COLOR.GREYSCALE_100, padding: '2px 4px', borderRadius: 3 }}>round2</code>, <code style={{ backgroundColor: COLOR.GREYSCALE_100, padding: '2px 4px', borderRadius: 3 }}>gap={8}</code>.
                </Text>
              </Col>

              <Col
                margin={2}
                p4
                round2
                style={{
                  backgroundColor: COLOR.WHITE,
                  borderWidth: 1,
                  borderColor: COLOR.GREYSCALE_300,
                }}
              >
                <Text h4 bold mb2>
                  🔄 Component System
                </Text>
                <Text base style={{ color: COLOR.GREYSCALE_600 }}>
                  All shadcn/ui components are reimplemented with ID references from Figma,
                  making them reusable and easy to import from JSON. Reference components
                  by their original Figma ID for consistency.
                </Text>
              </Col>
            </Grid>

            {/* Pages Section */}
            <Col gap={3} mt6>
              <Text h3 bold center>
                Explore the Components
              </Text>
              <Text base center style={{ color: COLOR.GREYSCALE_600 }}>
                Browse through all the components and design tokens from the Figma design system
              </Text>

              <Grid xs="100%" sm="50%" md="1:1:1:1" margin={-2} mt4 initial="md">
                <a href="/primitives" style={{ textDecoration: 'none' }}>
                  <Col
                    margin={2}
                    p4
                    round2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      borderWidth: 1,
                      borderColor: COLOR.GREYSCALE_300,
                      cursor: 'pointer',
                      minHeight: 120,
                    }}
                  >
                    <Text h4 bold mb1>
                      Primitives
                    </Text>
                    <Text sm center style={{ color: COLOR.GREYSCALE_600 }}>
                      Basic UI components
                    </Text>
                  </Col>
                </a>

                <a href="/components" style={{ textDecoration: 'none' }}>
                  <Col
                    margin={2}
                    p4
                    round2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      borderWidth: 1,
                      borderColor: COLOR.GREYSCALE_300,
                      cursor: 'pointer',
                      minHeight: 120,
                    }}
                  >
                    <Text h4 bold mb1>
                      Components
                    </Text>
                    <Text sm center style={{ color: COLOR.GREYSCALE_600 }}>
                      Complex components
                    </Text>
                  </Col>
                </a>

                <a href="/colors" style={{ textDecoration: 'none' }}>
                  <Col
                    margin={2}
                    p4
                    round2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      borderWidth: 1,
                      borderColor: COLOR.GREYSCALE_300,
                      cursor: 'pointer',
                      minHeight: 120,
                    }}
                  >
                    <Text h4 bold mb1>
                      Colors
                    </Text>
                    <Text sm center style={{ color: COLOR.GREYSCALE_600 }}>
                      Color palette
                    </Text>
                  </Col>
                </a>

                <a href="/typography" style={{ textDecoration: 'none' }}>
                  <Col
                    margin={2}
                    p4
                    round2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      borderWidth: 1,
                      borderColor: COLOR.GREYSCALE_300,
                      cursor: 'pointer',
                      minHeight: 120,
                    }}
                  >
                    <Text h4 bold mb1>
                      Typography
                    </Text>
                    <Text sm center style={{ color: COLOR.GREYSCALE_600 }}>
                      Text styles
                    </Text>
                  </Col>
                </a>

                <a href="/icons" style={{ textDecoration: 'none' }}>
                  <Col
                    margin={2}
                    p4
                    round2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      borderWidth: 1,
                      borderColor: COLOR.GREYSCALE_300,
                      cursor: 'pointer',
                      minHeight: 120,
                    }}
                  >
                    <Text h4 bold mb1>
                      Icons
                    </Text>
                    <Text sm center style={{ color: COLOR.GREYSCALE_600 }}>
                      Icon library
                    </Text>
                  </Col>
                </a>

                <a href="/cover" style={{ textDecoration: 'none' }}>
                  <Col
                    margin={2}
                    p4
                    round2
                    middle
                    style={{
                      backgroundColor: COLOR.WHITE,
                      borderWidth: 1,
                      borderColor: COLOR.GREYSCALE_300,
                      cursor: 'pointer',
                      minHeight: 120,
                    }}
                  >
                    <Text h4 bold mb1>
                      Cover
                    </Text>
                    <Text sm center style={{ color: COLOR.GREYSCALE_600 }}>
                      Cover designs
                    </Text>
                  </Col>
                </a>
              </Grid>
            </Col>

            {/* Footer */}
            <Col mt8 p4 round2 style={{ backgroundColor: COLOR.GREYSCALE_50 }} middle>
              <Text base center style={{ color: COLOR.GREYSCALE_600 }}>
                shadcn/ui reimplemented with{' '}
                <a
                  href="https://github.com/lequanghuylc/quickly-react"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: COLOR.PRIMARY_500, textDecoration: 'underline' }}
                >
                  quickly-react
                </a>
                {' '}• Original design from{' '}
                <a
                  href="https://www.figma.com/design/0hsqGRQdxhz4yMZpDxhuaf/-shadcn-ui---Design-System--Community-?node-id=4-463&p=f&t=d8SvAqCkyh8Rxa4w-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: COLOR.PRIMARY_500, textDecoration: 'underline' }}
                >
                  shadcn/ui Figma
                </a>
              </Text>
            </Col>
          </Col>
        </ScrollView>
      </Col>
    </>
  );
}
