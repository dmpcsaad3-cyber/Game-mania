# OmniCraft 3D Game Studio

A full-featured no-code 3D platformer and mystery adventure game creator with realistic lighting, dynamic weather systems, customizable companions, and branching narrative trees.

---

## 📱 Android APK Build & GitHub Actions Workflow

This project is configured with an automated **GitHub Actions CI/CD workflow** that compiles the 3D game engine and produces an installable **Android APK (`.apk`)** for your phone.

### 🚀 1. How to Build & Download the APK via GitHub Actions

1. **Push your repository to GitHub**:
   ```bash
   git add .
   git commit -m "Configure GitHub Actions APK build"
   git push origin main
   ```

2. **Trigger the Workflow on GitHub**:
   - Open your repository on GitHub.
   - Click the **Actions** tab at the top.
   - In the left sidebar, click **"Build Android APK"**.
   - Click the **"Run workflow"** button (default build type: `debug`).
   - The workflow will automatically:
     - Install Node.js dependencies
     - Build the Vite 3D web application
     - Sync Capacitor Android native project
     - Set up Java 17 and Android SDK
     - Compile `app-debug.apk` using Gradle (`./gradlew assembleDebug`)
     - Upload the APK as a downloadable artifact: **`OmniCraft-3D-Studio-APK`**

3. **Download & Install on Your Phone**:
   - Once the action finishes (~2 minutes), click on the completed run.
   - Scroll down to the **Artifacts** section and download **`OmniCraft-3D-Studio-APK`**.
   - Transfer the `.apk` to your Android phone (or download it directly from your phone's browser).
   - In your phone's **Files** or **Downloads** app, tap the APK file.
   - If prompted, enable **"Install unknown apps"** in your phone settings.
   - Tap **Install** to launch OmniCraft 3D Studio natively on your device!

---

## ⚡ 2. Instant Phone Installation (No Waiting / PWA)

You can also install OmniCraft 3D on your phone instantly right now through your mobile browser:

- **Android (Chrome / Samsung Internet)**:
  1. Open the app URL in your mobile browser.
  2. Tap the browser menu (**⋮**).
  3. Tap **"Install app"** or **"Add to Home Screen"**.
- **iOS (Safari)**:
  1. Tap the **Share** button.
  2. Tap **"Add to Home Screen"**.

The game will launch in standalone fullscreen with on-screen touch joystick and action buttons.

---

## 💻 3. Local APK Build (Android Studio)

If you have Android Studio or the Android SDK installed on your computer:

```bash
# Build web assets and compile APK
npm run build:apk
```

The compiled APK will be generated at:
```
android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🎮 Mobile Controls

- **360° Analog Joystick**: Move character freely in 3D space.
- **Jump**: Leap across floating platforms and trampolines.
- **Strike (F)**: Melee combat strike against patrolling enemies.
- **Dash (Shift)**: Sprint burst to cross wide gaps.
- **Crouch (C)**: Squeeze under laser tripwires and low clearance obstacles.
- **Grip**: Climb onto platform ledges.
