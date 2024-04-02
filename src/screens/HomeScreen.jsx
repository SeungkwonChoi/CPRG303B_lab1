import React from 'react';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = () => {
  return (
    <MainLayout>
      <Header title="Home" />
      <ScrollView>
      {/* Your main content */}
      <Text>Welcome to the Home Screen!</Text>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
      {/* Other components */}
    </ScrollView>
  <Footer />
</MainLayout>
  );
};

export default HomeScreen;