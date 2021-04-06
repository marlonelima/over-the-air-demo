# over-the-air-update
An application with over-the-air (OTA) updates using Expo.

Async over-the-air update demonstration using Expo without app store.

Easy peasy lemon squeezy!

[CLICK HERE TO DOWNLOAD](https://github.com/marlonelima/over-the-air-demo/releases/download/over-the-air-demo/over-the-air-marlonelima.apk)
<br><br>

Execute `yarn add expo-updates`
<br>
Then `import * as Updates from 'expo-updates';`


```javascript
try {
  const update = await Updates.checkForUpdateAsync();
  if (update.isAvailable) {
    await Updates.fetchUpdateAsync();
    // ... notify user of update ...
    await Updates.reloadAsync();
  }
} catch (e) {
  // handle or log error
}
````
