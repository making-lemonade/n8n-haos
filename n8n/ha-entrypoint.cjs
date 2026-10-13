const fs = require("node:fs");
const { spawn } = require("node:child_process");

const optionsPath = "/data/options.json";
const dataPath = "/home/node/.n8n";
let options = {};

try {
  options = JSON.parse(fs.readFileSync(optionsPath, "utf8"));
} catch (error) {
  if (error.code !== "ENOENT") {
    console.error(`Unable to read Home Assistant options: ${error.message}`);
    process.exit(1);
  }
}

const entries = options.environment ?? [];
if (!Array.isArray(entries)) {
  console.error('The Home Assistant "environment" option must be a list of NAME=value strings.');
  process.exit(1);
}

for (const entry of entries) {
  if (typeof entry !== "string") {
    console.error("Every environment entry must be a string in NAME=value format.");
    process.exit(1);
  }

  const line = entry.trim();
  if (line === "" || line.startsWith("#")) continue;

  const separator = line.indexOf("=");
  if (separator < 1) {
    console.error("Invalid environment entry. Use NAME=value.");
    process.exit(1);
  }

  const name = line.slice(0, separator).trim();
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)) {
    console.error(`Invalid environment variable name: ${name}`);
    process.exit(1);
  }

  process.env[name] = line.slice(separator + 1);
}

const [command, ...args] = process.argv.slice(2);
if (!command) {
  console.error("No n8n command was provided.");
  process.exit(1);
}

try {
  fs.mkdirSync(dataPath, { recursive: true });
  fs.chownSync(dataPath, 1000, 1000);
  process.setgid(1000);
  process.setuid(1000);
} catch (error) {
  console.error(`Unable to prepare n8n's persistent data directory: ${error.message}`);
  process.exit(1);
}

const child = spawn(command, args, {
  env: process.env,
  stdio: "inherit",
});

for (const signal of ["SIGINT", "SIGTERM", "SIGHUP"]) {
  process.on(signal, () => {
    if (!child.killed) child.kill(signal);
  });
}

child.on("error", (error) => {
  console.error(`Unable to start n8n: ${error.message}`);
  process.exit(1);
});

child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal ? 1 : 0);
});
