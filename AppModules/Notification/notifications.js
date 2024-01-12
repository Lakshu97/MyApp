import notifee from '@notifee/react-native';

const showNotification = async data => {
  await notifee.displayNotification({
    title: data.title,
    body: data.body,
  });
};

export default showNotification;
