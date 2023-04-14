/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'example/e2e/config.json',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'example/ios/build/Build/Products/Release-iphonesimulator/ReactTestApp.app',
      build: 'scripts/ios_e2e.sh build',
    },
    'android.release': {
      type: 'android.apk',
      binaryPath:
        'example/android/app/build/outputs/apk/release/app-release.apk',
      testBinaryPath:
        'example/android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk',
      build: 'scripts/android_e2e.sh build',
    },
    'android.next.release': {
      type: 'android.apk',
      binaryPath: 'example/android/app/build/outputs/apk/next/app-next.apk',
      testBinaryPath:
        'example/android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk',
      build: 'scripts/android_e2e.sh build',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'E2E_API_30',
      },
    },
  },
  configurations: {
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
    'android.next.emu.release': {
      device: 'emulator',
      app: 'android.next.release',
    },
  },
};
