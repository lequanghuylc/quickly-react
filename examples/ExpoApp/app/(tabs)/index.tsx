import { ScrollView } from 'react-native';
import { Col, Row, Text, RatioCol, Grid } from '@/components/base';

export default function HomeScreen() {
  return (
    <Col flex1 bgWhite>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Col p4 bgPrimary>
          <Text h3 bold>
            quickly-react
          </Text>
          <Text bmedium secondary mt1>
            UI library showcase — style via props
          </Text>
        </Col>

        {/* Typography */}
        <Col p4>
          <Text h4 bold mb2>
            Typography
          </Text>
          <Col gap={4}>
            <Text h1 bold>h1 Heading</Text>
            <Text h2 bold>h2 Heading</Text>
            <Text h3 bold>h3 Heading</Text>
            <Text h4 bold>h4 Heading</Text>
            <Text h5 semiBold>h5 SemiBold</Text>
            <Text h6 medium>h6 Medium</Text>
            <Text large>large body (16px)</Text>
            <Text bmedium>bmedium default (14px)</Text>
            <Text small>small (12px)</Text>
            <Text xsmall light>xsmall light (10px)</Text>
          </Col>
        </Col>

        {/* Layout: Col & Row */}
        <Col p4>
          <Text h4 bold mb2>
            Layout — Col & Row
          </Text>
          <Row gap={8} mb2>
            <Col flex1 p3 round1 bgSecondary middle>
              <Text center small>flex1</Text>
            </Col>
            <Col flex1 p3 round1 bgSecondary middle>
              <Text center small>flex1</Text>
            </Col>
          </Row>
          <Row gap={8} flexWrap="wrap">
            <Col p2 round0 borderThin middle>
              <Text xsmall>round0</Text>
            </Col>
            <Col p2 round1 borderThin middle>
              <Text xsmall>round1</Text>
            </Col>
            <Col p2 round1_5 borderThin middle>
              <Text xsmall>round1_5</Text>
            </Col>
            <Col p2 round2 borderThin middle>
              <Text xsmall>round2</Text>
            </Col>
          </Row>
        </Col>

        {/* Spacing (margin/padding) */}
        <Col p4>
          <Text h4 bold mb2>
            Spacing — m* & p*
          </Text>
          <Col>
            <Row mb1>
              <Text bmedium>m1,m2,m3: </Text>
              <Col m1 round0 bgSecondary />
              <Col m1 round0 bgSecondary />
              <Col m1 round0 bgSecondary />
            </Row>
            <Col p3 round1 bgSecondary>
              <Text small>p3 padding (unit × 3)</Text>
            </Col>
            <Col mt2 p4 round1 bgPrimary>
              <Text small>mt2 + p4</Text>
            </Col>
          </Col>
        </Col>

        {/* Cards with shadow */}
        <Col p4>
          <Text h4 bold mb2>
            Cards — round & shadow
          </Text>
          <Col gap={12}>
            <Col p4 round2 shadow bgWhite>
              <Text h5 bold>Card with shadow</Text>
              <Text bmedium secondary mt1>
                round2 + shadow + bgWhite
              </Text>
            </Col>
            <Col p4 round2 borderThin>
              <Text h5 bold>Bordered card</Text>
              <Text bmedium secondary mt1>
                borderThin, no shadow
              </Text>
            </Col>
          </Col>
        </Col>

        {/* Grid — flex ratios (stack layout) */}
        <Col p4>
          <Text h4 bold mb2>
            Grid — flex ratios (stack layout)
          </Text>
          <Text bmedium secondary mb2>
            xs="100%" (vertical) → md="1:2" (horizontal 1/3 + 2/3) → lg="1:3" (horizontal 1/4 + 3/4)
          </Text>
          <Grid xs="100%" md="1:2" lg="1:3">
            <Col p3 round1 bgPrimary middle>
              <Text center small>Profile</Text>
            </Col>
            <Col p3 round1 bgSecondary middle>
              <Text center small>Name & Details</Text>
            </Col>
          </Grid>
        </Col>

        {/* Grid — 12 items responsive (percentage-based) */}
        <Col p4>
          <Text h4 bold mb2>
            Grid — 12 items responsive
          </Text>
          <Text bmedium secondary mb2>
            xs="100%" (1/row) → sm="50%" (2/row) → md="33%" (3/row) → lg="25%" (4/row)
          </Text>
          <Text xsmall secondary mb2>
            Using negative margin on Grid and positive margin on items for spacing
          </Text>
          <Grid xs="100%" sm="50%" md="33%" lg="25%" margin={-4}>
            {Array.from({ length: 12 }, (_, i) => (
              <Col
                key={i}
                margin={4}
                p3
                round1
                bgSecondary
                middle
                style={{ minHeight: 60 }}
              >
                <Text center small bold>
                  {i + 1}
                </Text>
              </Col>
            ))}
          </Grid>
        </Col>

        {/* RatioCol */}
        <Col p4>
          <Text h4 bold mb2>
            RatioCol — aspect ratio
          </Text>
          <Col width="100%">
            <RatioCol ratio={16 / 9} width="100%" round1 overflow="hidden">
              <Col flex1 middle bgMain>
                <Text colorWhite bold>
                  16 : 9
                </Text>
              </Col>
            </RatioCol>
          </Col>
        </Col>

        {/* Theme-aware (bgTheme) */}
        <Col p4>
          <Text h4 bold mb2>
            Theme-aware tokens
          </Text>
          <Col gap={8}>
            <Col p3 round1 bgTheme>
              <Text bmedium>bgTheme — adapts to light/dark</Text>
            </Col>
            <Col p3 round1 bgTheme2>
              <Text bmedium>bgTheme2</Text>
            </Col>
          </Col>
        </Col>

        {/* Inline style props */}
        <Col p4>
          <Text h4 bold mb2>
            Inline style props
          </Text>
          <Text bmedium marginTop={12} textAlign="center">
            marginTop=12, textAlign=center
          </Text>
          <Text small color="#1955A6" mt2>
            color="#1955A6" (brand)
          </Text>
        </Col>
      </ScrollView>
    </Col>
  );
}
