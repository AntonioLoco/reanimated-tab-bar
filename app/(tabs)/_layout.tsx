import { Tabs } from 'expo-router';
import TabBar from '@components/TabBar';
import AddModal from '@components/AddModal';
import { useState } from 'react';
import { Ionicons, Octicons } from '@expo/vector-icons';

export default function TabLayout() {
  const [addModal, setAddModal] = useState(false);
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false
        }}
        sceneContainerStyle={{
          backgroundColor: '#f2f2f4'
        }}
        tabBar={(props) => (
          <TabBar
            {...props}
            onPressAddButton={() => {
              setAddModal(true);
            }}
          />
        )}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: (props) => <Octicons name={'home'} size={props.size} color={props.color} />
          }}
        />

        <Tabs.Screen
          name="wardrobe"
          options={{
            tabBarIcon: (props) => <Ionicons name={props.focused ? 'bookmark' : 'bookmark-outline'} size={props.size} color={props.color} />
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: (props) => <Octicons name={props.focused ? 'person-fill' : 'person'} size={props.size} color={props.color} />
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: (props) => (
              <Ionicons name={props.focused ? 'settings-sharp' : 'settings-outline'} size={props.size} color={props.color} />
            )
          }}
        />
      </Tabs>
      <AddModal visible={addModal} onDismiss={() => setAddModal(false)} onRequestClose={() => setAddModal(false)} />
    </>
  );
}
