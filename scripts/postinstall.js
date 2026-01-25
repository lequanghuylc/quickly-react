#!/usr/bin/env node

/**
 * Postinstall script to copy quickly-react.mdc rule to .cursor/rules/
 * This helps Cursor and other AI agents understand how to use quickly-react
 */

const fs = require('fs');
const path = require('path');

// Find the package directory (works when installed as dependency or local)
const packageDir = __dirname.replace(/[\\/]scripts$/, '');
const sourceFile = path.join(packageDir, 'quickly-react.mdc');
const projectRoot = process.cwd();
const targetDir = path.join(projectRoot, '.cursor', 'rules');
const targetFile = path.join(targetDir, 'quickly-react.mdc');

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
  // Silently exit if source doesn't exist (might be during build or in different context)
  process.exit(0);
}

// Only proceed if we're in a project directory (not the library's own directory)
// Check if we're in node_modules (installed as dependency) or have package.json with different name
const isInNodeModules = projectRoot.includes('node_modules');
const packageJsonPath = path.join(projectRoot, 'package.json');

if (!isInNodeModules && fs.existsSync(packageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    // If this is the quickly-react package itself, skip
    if (packageJson.name === 'quickly-react') {
      process.exit(0);
    }
  } catch (e) {
    // If we can't read package.json, continue anyway
  }
}

try {
  // Create .cursor/rules directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Copy the rule file
  fs.copyFileSync(sourceFile, targetFile);
  console.log('✓ quickly-react: Rule file installed to .cursor/rules/quickly-react.mdc');
} catch (error) {
  // Don't fail the install if rule copy fails
  // Silently exit - this is non-critical
  process.exit(0);
}
