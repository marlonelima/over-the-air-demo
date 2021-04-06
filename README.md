# over-the-air-update
An application with over-the-air (OTA) updates using Expo.

Async over-the-air update demonstration using Expo without app store.

Easy peasy lemon squeezy!

[DOWNLOAD DEMO](https://github.com/marlonelima/over-the-air-demo/releases/download/over-the-air-demo/over-the-air-marlonelima.apk)
<br><br>

 `yarn add expo-updates`
<br><br>
Then `import * as Updates from 'expo-updates'`

<br>

At the first version, you should run `expo publish` and then `expo build`. Every time you change javascript files, you may run `expo publish` again and the new version will be available in app. If has SDK changes, you should generate a new build by running `expo build`.

Updates are managed by Expo server.
<br><br>

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
