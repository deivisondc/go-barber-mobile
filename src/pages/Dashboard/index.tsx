import React from 'react';

import { Text, Button } from 'react-native';

import { useAuth } from '../../hooks/Auth';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Dashboard</Text>

      <Button title="Sair" onPress={signOut} />
    </Container>
  );
};

export default Dashboard;
