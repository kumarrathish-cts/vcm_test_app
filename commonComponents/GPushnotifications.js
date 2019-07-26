/* **************************\
Function: configurePushNotification.
Explanation:
Common method to configure the push notifications 
and It has its own handlers to handle notificaiton services
============================
Creator: Jose M  || Date: 2018-10-31
\************************** */

const PushNotification = require("react-native-push-notification");

function configurePushNotification(props,callBack) {
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister(token, error) {
      

      // alert(JSON.stringify(token.token))
      // Clipboard.setString(JSON.stringify(token.token));
      callBack(token.token);
    },

    // (required) Called when a remote or 
    // local notification is opened or received
    onNotification(notification) {
      


      // process the notification

      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
    },

    // ANDROID ONLY: GCM or FCM Sender ID (product_number) 
    // (optional - not required for local notifications, 
    // but is need to receive remote push notifications)
    senderID: "465512559349",

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and 
     * // token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler
     * .requestPermissions() later
     */
    requestPermissions: true
  });
}

export { configurePushNotification };
