import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';
import {
  Input,
  SearchBox,
  Dropdown,
  Accordion,
  Card,
  InfoBox,
  ExpandableParagraph,
  Button,
  IconButton,
  Checkbox,
  Switch,
  Tooltip,
  Slider,
  ImageCarousel,
  Badge,
  Divider,
  Chip,
  Progress,
} from '@/components/ui';

export default function ComponentsScreen() {
  const [inputVal, setInputVal] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [dropdownVal, setDropdownVal] = useState<string | null>(null);
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <Col flex1 bgSecondary>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <Text h4 bold center mb4>
          UI Components
        </Text>
        <Text bmedium secondary center mb4>
          Essential UI elements built with quickly-react
        </Text>

        <DemoSection title="Input & SearchBox">
          <Input
            placeholder="Placeholder"
            label="Input"
            value={inputVal}
            onChangeText={setInputVal}
          />
          <SearchBox
            placeholder="Search…"
            value={searchVal}
            onChangeText={setSearchVal}
            onClear={() => setSearchVal('')}
          />
        </DemoSection>

        <DemoSection title="Dropdown">
          <Dropdown
            label="Choose option"
            options={[
              { id: 'a', label: 'Option A' },
              { id: 'b', label: 'Option B' },
              { id: 'c', label: 'Option C' },
            ]}
            value={dropdownVal}
            onSelect={setDropdownVal}
          />
        </DemoSection>

        <DemoSection title="Accordion">
          <Accordion
            items={[
              { id: '1', title: 'Section 1', content: 'Content for section 1.' },
              { id: '2', title: 'Section 2', content: 'Content for section 2.' },
            ]}
          />
        </DemoSection>

        <DemoSection title="Card">
          <Card title="Card title" subtitle="Optional subtitle">
            <Text bmedium>Card body content goes here.</Text>
          </Card>
        </DemoSection>

        <DemoSection title="InfoBox">
          <InfoBox variant="info" title="Info" message="This is an info message." />
          <InfoBox variant="success" title="Success" message="Operation completed." />
          <InfoBox variant="warning" title="Warning" message="Please review this." />
          <InfoBox variant="error" title="Error" message="Something went wrong." />
        </DemoSection>

        <DemoSection title="Expandable Paragraph">
          <ExpandableParagraph
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
            maxLength={80}
          />
        </DemoSection>

        <DemoSection title="Button & Icon Button">
          <Row gap={8} flexWrap="wrap">
            <Button title="Primary" onPress={() => {}} variant="primary" />
            <Button title="Secondary" onPress={() => {}} variant="secondary" />
            <Button title="Outline" onPress={() => {}} variant="outline" />
          </Row>
          <Row gap={8} flexWrap="wrap" mt2>
            <IconButton icon="favorite" onPress={() => {}} />
            <IconButton icon="share" onPress={() => {}} />
            <IconButton icon="settings" onPress={() => {}} />
          </Row>
        </DemoSection>

        <DemoSection title="Checkbox & Switch">
          <Row gap={24} flexWrap="wrap">
            <Checkbox label="Checkbox" checked={false} onToggle={() => {}} />
            <Checkbox label="Checked" checked onToggle={() => {}} />
          </Row>
          <Row gap={24} flexWrap="wrap" mt2>
            <Switch label="Switch off" value={false} onValueChange={() => {}} />
            <Switch label="Switch on" value onValueChange={() => {}} />
          </Row>
        </DemoSection>

        <DemoSection title="Tooltip">
          <Tooltip text="Tooltip message">
            <Col ph4 pv2 round1 middle style={{ backgroundColor: COLOR.GREYSCALE_200 }}>
              <Text bmedium>Press me for tooltip</Text>
            </Col>
          </Tooltip>
        </DemoSection>

        <DemoSection title="Slider">
          <Slider value={sliderVal} onValueChange={setSliderVal} min={0} max={100} step={10} />
        </DemoSection>

        <DemoSection title="Badge, Divider, Chip, Progress">
          <Row gap={8} flexWrap="wrap">
            <Badge label="Default" />
            <Badge label="Primary" variant="primary" />
            <Badge label="Success" variant="success" />
          </Row>
          <Divider style={{ marginVertical: 16 }} />
          <Row gap={8} flexWrap="wrap">
            <Chip label="Chip" onPress={() => {}} />
            <Chip label="Selected" selected onPress={() => {}} />
          </Row>
          <Progress value={0.6} style={{ marginTop: 16 }} />
        </DemoSection>
      </ScrollView>
    </Col>
  );
}

function DemoSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Col mb4 p4 round2 bgWhite>
      <Text h5 bold mb3>
        {title}
      </Text>
      <Col gap={12}>{children}</Col>
    </Col>
  );
}
