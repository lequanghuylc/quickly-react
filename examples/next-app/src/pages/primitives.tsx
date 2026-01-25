import React, { useState } from 'react';
// @ts-ignore - react-native-web types
import { ScrollView } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { COLOR } from '@/components/base/tokens';
import {
  AccordionItem,
  Button,
  Checkbox,
  Divider,
  MenuItem,
  MenuSectionTitle,
  Input,
  Tabs,
  TabCard,
  Textarea,
  Avatar,
  Menubar,
  Switch,
  NavigationMenu,
  NavigationMenuContentItem,
  Poster,
  RadioButton,
  Collapsible,
  ScrollListItem,
  Palette,
  InlineCode,
  TableItem,
} from '@/components/primitives';

export default function PrimitivesPage() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('option1');

  const SectionBox = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <Col
      p4
      mb4
      round1
      style={{
        backgroundColor: COLOR.WHITE,
        borderWidth: 1,
        borderColor: COLOR.GREYSCALE_300,
      }}
    >
      <Text lg bold mb3>
        {title}
      </Text>
      {children}
    </Col>
  );

  return (
    <Col flex1 style={{ backgroundColor: COLOR.GREYSCALE_50 }}>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Col p4 style={{ backgroundColor: COLOR.PRIMARY_500 }}>
          <Text lg bold style={{ color: COLOR.WHITE }}>
            Primitives
          </Text>
          <Text base style={{ color: COLOR.WHITE, opacity: 0.8 }} mt1>
            UI components from Figma
          </Text>
        </Col>

        <Col p4>
          {/* Accordion Item */}
          <SectionBox title="Accordion Item">
            <AccordionItem
              title="Is it accessible"
              content="Yes. It adheres to the WAI-ARIA design pattern."
            />
          </SectionBox>

          {/* Button */}
          <SectionBox title="Button">
            <Col gap={3}>
              <Button label="Continue" variant="default" />
              <Button label="Continue" variant="primary" />
              <Button label="Destructive" variant="destructive" />
              <Button label="Cancel" variant="outline" />
              <Button label="Subtle" variant="subtle" />
              <Button label="Ghost" variant="ghost" />
              <Button label="Link" variant="link" />
              <Button label="Login with Email" variant="primary" icon="✉" />
              <Row gap={2}>
                <Button label="" icon="+" iconOnly />
                <Button label="" icon="+" iconOnly circle />
              </Row>
              <Button label="Loading..." variant="primary" loading />
            </Col>
          </SectionBox>

          {/* Checkbox */}
          <SectionBox title="Checkbox">
            <Col gap={3}>
              <Checkbox
                label="Accept terms and condition"
                checked={checkboxChecked}
                onToggle={setCheckboxChecked}
              />
              <Checkbox
                label="Accept terms and condition"
                description="You agree to our Terms of Service and Privacy Policy."
                checked={checkboxChecked}
                onToggle={setCheckboxChecked}
              />
            </Col>
          </SectionBox>

          {/* Section Items */}
          <SectionBox title="Section Items">
            <Col gap={2}>
              <Divider />
              <MenuSectionTitle title="Section Title" />
              <MenuItem label="Menu Item" icon="⇤" keyboardShortcut="⌘⇧B" secondaryIcon="→" />
              <MenuItem label="Menu Item" icon="⇤" keyboardShortcut="⌘⇧B" />
            </Col>
          </SectionBox>

          {/* Input */}
          <SectionBox title="Input">
            <Col gap={3}>
              <Input label="Email" placeholder="Enter your email address" />
              <Input
                label="Email"
                placeholder="Enter your email address"
                buttonLabel="Continue"
                onButtonPress={() => {}}
              />
              <Input label="Email" placeholder="Email" error="This field is required" />
            </Col>
          </SectionBox>

          {/* Tabs */}
          <SectionBox title="Tabs">
            <Col gap={3}>
              <Tabs items={['Tab 1', 'Tab 2', 'Tab 3']} />
              <TabCard title="Tab Card Title" content="This is the content of the tab card." />
            </Col>
          </SectionBox>

          {/* Textarea */}
          <SectionBox title="Textarea">
            <Textarea
              label="Description"
              placeholder="Enter your description here..."
              rows={4}
            />
          </SectionBox>

          {/* Avatar */}
          <SectionBox title="Avatar">
            <Row gap={2}>
              <Avatar name="John Doe" size={40} />
              <Avatar name="Jane Smith" size={48} />
              <Avatar name="AB" size={56} />
            </Row>
          </SectionBox>

          {/* Menubar */}
          <SectionBox title="Menubar">
            <Menubar items={['File', 'Edit', 'View', 'Help']} />
          </SectionBox>

          {/* Switch */}
          <SectionBox title="Switch">
            <Col gap={3}>
              <Switch label="Enable notifications" checked={switchChecked} onToggle={setSwitchChecked} />
              <Switch checked={switchChecked} onToggle={setSwitchChecked} />
            </Col>
          </SectionBox>

          {/* Navigation Menu */}
          <SectionBox title="Navigation Menu">
            <NavigationMenu
              items={['Overview', 'Analytics', 'Reports']}
              content={[
                { title: 'Dashboard', description: 'View your main dashboard' },
                { title: 'Settings', description: 'Configure your preferences' },
              ]}
            />
          </SectionBox>

          {/* Poster */}
          <SectionBox title="Poster">
            <Poster
              title="Featured Content"
              description="This is a description of the featured content."
            />
          </SectionBox>

          {/* Radio Button */}
          <SectionBox title="Radio Button">
            <Col gap={2}>
              <RadioButton
                label="Option 1"
                checked={radioValue === 'option1'}
                onPress={() => setRadioValue('option1')}
              />
              <RadioButton
                label="Option 2"
                checked={radioValue === 'option2'}
                onPress={() => setRadioValue('option2')}
              />
              <RadioButton
                label="Option 3"
                checked={radioValue === 'option3'}
                onPress={() => setRadioValue('option3')}
              />
            </Col>
          </SectionBox>

          {/* Collapsible */}
          <SectionBox title="Collapsible">
            <Collapsible trigger="Click to expand">
              <Text base style={{ color: COLOR.GREYSCALE_700 }}>
                This is the collapsible content. It can contain any React elements.
              </Text>
            </Collapsible>
          </SectionBox>

          {/* Scroll List Item */}
          <SectionBox title="Scroll List Item">
            <Col round1 style={{ borderWidth: 1, borderColor: COLOR.GREYSCALE_300, overflow: 'hidden' }}>
              <ScrollListItem title="Item 1" subtitle="Subtitle for item 1" icon="📄" />
              <ScrollListItem title="Item 2" subtitle="Subtitle for item 2" icon="📁" />
              <ScrollListItem title="Item 3" subtitle="Subtitle for item 3" icon="🔍" />
            </Col>
          </SectionBox>

          {/* Palette */}
          <SectionBox title="Palette">
            <Palette
              colors={[
                { name: 'Primary', value: COLOR.PRIMARY_500 },
                { name: 'Secondary', value: COLOR.SECONDARY_500 },
                { name: 'Success', value: COLOR.SUCCESS },
                { name: 'Error', value: COLOR.ERROR },
                { name: 'Warning', value: COLOR.WARNING },
                { name: 'Info', value: COLOR.INFO },
              ]}
            />
          </SectionBox>

          {/* Inline Code */}
          <SectionBox title="Inline Code">
            <Row gap={2} flexWrap="wrap">
              <InlineCode code="const x = 1;" />
              <InlineCode code="function test() {}" />
              <InlineCode code="<Component />" />
            </Row>
          </SectionBox>

          {/* Table Item */}
          <SectionBox title="Table Item">
            <Col round1 style={{ borderWidth: 1, borderColor: COLOR.GREYSCALE_300, overflow: 'hidden' }}>
              <TableItem cells={['Name', 'Email', 'Role']} header />
              <TableItem cells={['John Doe', 'john@example.com', 'Admin']} />
              <TableItem cells={['Jane Smith', 'jane@example.com', 'User']} />
              <TableItem cells={['Bob Johnson', 'bob@example.com', 'Editor']} />
            </Col>
          </SectionBox>
        </Col>
      </ScrollView>
    </Col>
  );
}
