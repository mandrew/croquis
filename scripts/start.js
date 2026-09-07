const fs = require('fs');
const path = require('path');
const {spawn} = require('child_process');

const cacheDirectory = path.join(__dirname, '..', '.cache');
const lockFile = path.join(cacheDirectory, 'dev-server.pid');

function processIsRunning(processId) {
  try {
    process.kill(processId, 0);
    return true;
  } catch (error) {
    return error.code === 'EPERM';
  }
}

if (fs.existsSync(lockFile)) {
  const existingProcessId = Number(fs.readFileSync(lockFile, 'utf8'));

  if (Number.isInteger(existingProcessId) && processIsRunning(existingProcessId)) {
    console.error(`Croquis is already running (PID ${existingProcessId}). Stop it before starting another watcher.`);
    process.exit(1);
  }

  fs.unlinkSync(lockFile);
}

fs.mkdirSync(cacheDirectory, {recursive: true});
fs.writeFileSync(lockFile, String(process.pid));

const executable = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const developmentServer = spawn(
  executable,
  [
    'concurrently',
    '--kill-others-on-fail',
    'eleventy --serve --quiet',
    'npm run css -- --watch'
  ],
  {stdio: 'inherit'}
);

function removeLock() {
  if (fs.existsSync(lockFile)) {
    fs.unlinkSync(lockFile);
  }
}

developmentServer.once('exit', exitCode => {
  removeLock();
  process.exitCode = exitCode || 0;
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, () => developmentServer.kill(signal));
}