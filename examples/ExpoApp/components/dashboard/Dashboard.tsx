import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Col, Row, Text, Grid } from '@/components/base';
import { DashboardLayout, SidebarItem } from './DashboardLayout';
import { StatCard } from './StatCard';
import { COLOR } from '@/components/base/tokens';

export interface DashboardProps {
  /** Optional initial active sidebar item */
  initialActiveItem?: string;
}

export function Dashboard({ initialActiveItem = 'overview' }: DashboardProps) {
  const [activeItem, setActiveItem] = useState<string>(initialActiveItem);

  const sidebarItems: SidebarItem[] = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'users', label: 'Users', icon: '👥' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  const handleSidebarItemPress = (item: SidebarItem) => {
    setActiveItem(item.id);
  };

  // Mock stats data - in real app, this would come from API
  const stats = [
    {
      id: 'revenue',
      title: 'Total Revenue',
      value: '$45,231',
      subtitle: '+20.1% from last month',
      accentColor: COLOR.SUCCESS,
    },
    {
      id: 'users',
      title: 'Active Users',
      value: '2,350',
      subtitle: '+180 new users',
      accentColor: COLOR.PRIMARY_500,
    },
    {
      id: 'orders',
      title: 'Orders',
      value: '1,234',
      subtitle: '+12% from last month',
      accentColor: COLOR.WARNING,
    },
    {
      id: 'conversion',
      title: 'Conversion Rate',
      value: '3.2%',
      subtitle: '+0.5% from last month',
      accentColor: COLOR.INFO,
    },
  ];

  return (
    <DashboardLayout
      sidebarItems={sidebarItems}
      activeSidebarItem={activeItem}
      onSidebarItemPress={handleSidebarItemPress}
    >
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <Text h4 bold mb4>
          {sidebarItems.find((item) => item.id === activeItem)?.label || 'Dashboard'}
        </Text>
        
        {activeItem === 'overview' && (
          <Col gap={16}>
            <Text h5 semiBold mb2>
              Statistics
            </Text>
            <Grid xs="1:1" md="1:1:1:1" gap={16}>
              {stats.map((stat) => (
                <StatCard
                  key={stat.id}
                  title={stat.title}
                  value={stat.value}
                  subtitle={stat.subtitle}
                  accentColor={stat.accentColor}
                />
              ))}
            </Grid>
          </Col>
        )}

        {activeItem === 'analytics' && (
          <Col gap={16}>
            <Text h5 semiBold mb2>
              Analytics Overview
            </Text>
            <Row gap={16} flexWrap="wrap">
              <StatCard
                title="Page Views"
                value="12,345"
                subtitle="Last 30 days"
                accentColor={COLOR.PRIMARY_500}
                style={{ flex: 1, minWidth: 200 }}
              />
              <StatCard
                title="Bounce Rate"
                value="42.3%"
                subtitle="Below average"
                accentColor={COLOR.WARNING}
                style={{ flex: 1, minWidth: 200 }}
              />
            </Row>
          </Col>
        )}

        {activeItem === 'users' && (
          <Col gap={16}>
            <Text h5 semiBold mb2>
              User Management
            </Text>
            <Row gap={16} flexWrap="wrap">
              <StatCard
                title="Total Users"
                value="8,234"
                subtitle="+234 this week"
                accentColor={COLOR.SUCCESS}
                style={{ flex: 1, minWidth: 200 }}
              />
              <StatCard
                title="New Users"
                value="156"
                subtitle="Today"
                accentColor={COLOR.INFO}
                style={{ flex: 1, minWidth: 200 }}
              />
            </Row>
          </Col>
        )}

        {activeItem === 'settings' && (
          <Col gap={16}>
            <Text h5 semiBold mb2>
              Settings
            </Text>
            <Col p4 round2 bgWhite>
              <Text bmedium>
                Configure your dashboard settings here.
              </Text>
            </Col>
          </Col>
        )}
      </ScrollView>
    </DashboardLayout>
  );
}
