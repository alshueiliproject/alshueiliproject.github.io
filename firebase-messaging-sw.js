// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBZkcQ3UdXxEYDsUwajL_yYkZTtawnb2JE",
  authDomain: "maonah-application.firebaseapp.com",
  projectId: "maonah-application",
  storageBucket: "maonah-application.appspot.com",
  messagingSenderId: "736387267996",
  appId: "1:736387267996:web:fdbd72acbb905dece1dc59"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  const promiseChain = clients
    .matchAll({
      type: "window",
      includeUncontrolled: true
    })
    .then(windowClients => {
      for (let i = 0; i < windowClients.length; i++) {
        const windowClient = windowClients[i];
        windowClient.postMessage(payload);
      }
    })
    .then(() => {
      return registration.showNotification("New Message");
    });
  return promiseChain;
});
self.addEventListener('notificationclick', function (event) {
  console.log('notification received: ', event)
});


