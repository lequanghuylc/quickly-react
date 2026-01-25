import { ScrollView } from 'react-native';
import { Col, Row, Text } from '@/components/base';
import { LoginForm } from '@/components/auth/LoginForm';
import { RegisterForm } from '@/components/auth/RegisterForm';
import { Dashboard } from '@/components/dashboard/Dashboard';

export default function ExploreScreen() {
  return (
    <Col flex1 bgSecondary>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Auth Section */}
        <Col p4 gap={16}>
          <Text h4 bold center mb2>
            Auth
          </Text>
          <Row gap={24} flexWrap="wrap" style={{ width: '100%', justifyContent: 'center', alignItems: 'flex-start' }}>
            <LoginForm />
            <RegisterForm />
          </Row>
        </Col>

        {/* Dashboard Section */}
        <Col mt4 style={{ height: 600, overflow: 'hidden' }}>
          <Text h4 bold center mb4 p4>
            Dashboard
          </Text>
          <Col flex1>
            <Dashboard />
          </Col>
        </Col>
      </ScrollView>
    </Col>
  );
}
