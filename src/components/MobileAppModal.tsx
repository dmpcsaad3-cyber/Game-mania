import React, { useState } from 'react';
import { 
  Smartphone, 
  Download, 
  GitBranch, 
  Terminal, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  X, 
  AlertCircle,
  Play,
  Cpu,
  Layers,
  Sparkles
} from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface MobileAppModalProps {
  onClose: () => void;
}

export const MobileAppModal: React.FC<MobileAppModalProps> = ({ onClose }) => {
  const { isInstallable, isInstalled, isMobile, isIOS, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'workflow' | 'install_phone' | 'local'>('workflow');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const gitPushCommand = `git add .
git commit -m "Configure GitHub Actions APK build"
git push origin main`;

  const localBuildCommand = `npm run build:apk`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-emerald-500 flex items-center justify-center text-white shadow-lg">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
                <span>Android APK & Phone Setup</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-mono font-semibold">
                  GitHub CI/CD Ready
                </span>
              </h2>
              <p className="text-xs text-slate-400">Automated GitHub Actions workflow to build .apk for your phone</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 bg-slate-950/40 px-6 pt-2 space-x-2">
          <button
            onClick={() => setActiveTab('workflow')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'workflow'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub Actions Workflow (APK)</span>
          </button>
          <button
            onClick={() => setActiveTab('install_phone')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'install_phone'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Direct Phone Install (Instant)</span>
          </button>
          <button
            onClick={() => setActiveTab('local')}
            className={`pb-2.5 px-3 text-xs font-semibold flex items-center space-x-2 border-b-2 transition-all ${
              activeTab === 'local'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal / Gradle Build</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-slate-200 text-sm">
          {activeTab === 'workflow' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-cyan-300 text-xs">Workflow File Generated</h4>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Your GitHub Actions workflow is saved at <code className="bg-slate-900 px-1.5 py-0.5 rounded text-cyan-200 border border-slate-700">.github/workflows/build-apk.yml</code> and configured with Capacitor + Gradle.
                  </p>
                </div>
              </div>

              {/* Step 1 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-bold text-xs text-slate-100">
                  <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">1</span>
                  <span>Push Changes to your GitHub Repository</span>
                </div>
                <p className="text-xs text-slate-400 pl-7">
                  Commit and push your project files (including the <code className="text-slate-300">android/</code> directory and GitHub workflow) to GitHub:
                </p>
                <div className="pl-7">
                  <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-xs text-emerald-400">
                    <pre>{gitPushCommand}</pre>
                    <button
                      onClick={() => copyToClipboard(gitPushCommand, 'git')}
                      className="absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                      title="Copy command"
                    >
                      {copiedKey === 'git' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-bold text-xs text-slate-100">
                  <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">2</span>
                  <span>Trigger "Run workflow" or Auto-Trigger on Push</span>
                </div>
                <div className="pl-7 space-y-1.5 text-xs text-slate-300">
                  <p>1. Open your repository on GitHub in your web browser.</p>
                  <p>2. Click on the <strong>Actions</strong> tab at the top.</p>
                  <p>3. In the left sidebar, click <strong>"Build Android APK"</strong>.</p>
                  <p>4. Click <strong>"Run workflow"</strong> dropdown button and select <strong>"Run workflow"</strong> (Build Type: debug).</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2 font-bold text-xs text-slate-100">
                  <span className="w-5 h-5 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[10px]">3</span>
                  <span>Download APK and Install on Your Android Phone</span>
                </div>
                <div className="pl-7 space-y-2 text-xs text-slate-300">
                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="flex items-center space-x-2 text-amber-400 font-semibold mb-1">
                      <Download className="w-4 h-4" />
                      <span>Download Artifact</span>
                    </div>
                    <p className="text-slate-400">
                      When the GitHub Action completes green (~2 mins), click into the run, scroll to the <strong>Artifacts</strong> section at the bottom, and click <strong>OmniCraft-3D-Studio-APK</strong>.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-950 rounded-xl border border-slate-800">
                    <div className="flex items-center space-x-2 text-cyan-400 font-semibold mb-1">
                      <Smartphone className="w-4 h-4" />
                      <span>Installing on Android</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-slate-400">
                      <li>Transfer or download the <code className="text-slate-200">.apk</code> file onto your phone.</li>
                      <li>Tap the file in your phone's <strong>Downloads</strong> or <strong>Files</strong> app.</li>
                      <li>If asked, enable <em>"Allow from this source / Install unknown apps"</em> in Android Settings.</li>
                      <li>Tap <strong>Install</strong> to enjoy the native 3D platformer game engine!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'install_phone' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 flex items-start space-x-3">
                <Smartphone className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-indigo-300 text-xs">Instant Mobile Installation (PWA / WebAPK)</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    You can also install OmniCraft 3D Studio directly to your phone's home screen right now without downloading APK files or waiting for GitHub Actions!
                  </p>
                </div>
              </div>

              {isInstalled ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center space-x-3 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>OmniCraft 3D is already installed in standalone fullscreen mode on this device!</span>
                </div>
              ) : isInstallable ? (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                  <p className="text-xs text-slate-300">Your browser supports direct 1-tap installation:</p>
                  <button
                    onClick={install}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all hover:scale-[1.01]"
                  >
                    <Download className="w-4 h-4" />
                    <span>Install OmniCraft 3D on Phone</span>
                  </button>
                </div>
              ) : isIOS ? (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2">
                  <h4 className="font-bold text-amber-400">iOS Safari Installation Instructions</h4>
                  <p className="text-slate-300">1. Tap the <strong>Share</strong> button (square with arrow) in Safari.</p>
                  <p className="text-slate-300">2. Scroll down and tap <strong>Add to Home Screen</strong>.</p>
                  <p className="text-slate-300">3. Tap <strong>Add</strong> in the top-right corner to launch with native fullscreen 3D controls.</p>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-2.5">
                  <h4 className="font-bold text-cyan-300">Android Chrome / Mobile Browser Instructions:</h4>
                  <ol className="list-decimal pl-4 space-y-1.5 text-slate-300">
                    <li>Open this URL on your phone's <strong>Google Chrome</strong> or <strong>Samsung Internet</strong>.</li>
                    <li>Tap the <strong>three dots menu (⋮)</strong> in the top-right corner.</li>
                    <li>Tap <strong>"Install app"</strong> or <strong>"Add to Home Screen"</strong>.</li>
                    <li>The app will install as an Android WebAPK with its custom 3D icon and offline support!</li>
                  </ol>
                </div>
              )}

              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800 text-xs text-slate-400">
                <span className="text-slate-300 font-semibold block mb-1">Mobile Features Included:</span>
                • On-screen analog touch joystick with 360-degree precision<br />
                • Touch action buttons for Jump, Combat Strike, Dash, Crouch, and Grip<br />
                • Fullscreen landscape/portrait auto-adaptation
              </div>
            </div>
          )}

          {activeTab === 'local' && (
            <div className="space-y-4">
              <p className="text-xs text-slate-300">
                If you have Android Studio or the Android SDK installed locally on your machine, you can also compile the APK locally in one command:
              </p>

              <div className="relative rounded-xl bg-slate-950 border border-slate-800 p-3 font-mono text-xs text-cyan-300">
                <pre>{localBuildCommand}</pre>
                <button
                  onClick={() => copyToClipboard(localBuildCommand, 'local')}
                  className="absolute top-2 right-2 p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors"
                  title="Copy command"
                >
                  {copiedKey === 'local' ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="space-y-2 text-xs text-slate-400">
                <p>This script executes:</p>
                <code className="block p-2 rounded bg-slate-950 border border-slate-800 text-slate-300">
                  1. vite build (bundles React app into dist/)<br />
                  2. cap sync android (updates web assets in android/app/src/main/assets)<br />
                  3. cd android && ./gradlew assembleDebug (builds app-debug.apk)
                </code>
                <p className="pt-1">
                  The compiled APK will be located at:
                  <br />
                  <code className="text-cyan-300">android/app/build/outputs/apk/debug/app-debug.apk</code>
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-xs text-slate-400">
          <span>App ID: <code className="text-slate-300 font-mono">com.omnicraft.gamestudio</code></span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
