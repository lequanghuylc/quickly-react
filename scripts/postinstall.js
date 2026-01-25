#!/usr/bin/env node

/**
 * Postinstall script to copy quickly-react.mdc rule to .cursor/rules/
 * This helps Cursor and other AI agents understand how to use quickly-react
 */

const fs = require('fs');
const path = require('path');

// Find the package directory (works when installed as dependency or local)
// __dirname will be something like: /path/to/project/node_modules/quickly-react/scripts
const packageDir = path.resolve(__dirname, '..');
const sourceFile = path.join(packageDir, 'quickly-react.mdc');

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
  // Silently exit if source doesn't exist (might be during build or in different context)
  process.exit(0);
}

/**
 * Find the project root by walking up from the package directory
 * When installed via yarn/npm, the package is in node_modules/quickly-react
 * So we walk up from there to find the project root
 */
function findProjectRoot() {
  // Start from the package directory (which is in node_modules when installed)
  let dir = packageDir;
  const root = path.parse(dir).root;
  
  // Walk up the directory tree
  while (dir !== root) {
    // Check if we've reached a directory that contains node_modules
    // The project root is the parent of node_modules
    if (path.basename(dir) === 'node_modules') {
      const projectRoot = path.dirname(dir);
      // Verify it has a package.json
      const packageJsonPath = path.join(projectRoot, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        try {
          const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
          // Make sure it's not the quickly-react package itself
          if (packageJson.name !== 'quickly-react') {
            return projectRoot;
          }
        } catch (e) {
          // If we can't read package.json, use it anyway
          return projectRoot;
        }
      }
    }
    
    // Also check if current directory has package.json and is not quickly-react
    const packageJsonPath = path.join(dir, 'package.json');
    if (fs.existsSync(packageJsonPath)) {
      try {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        // If this is NOT the quickly-react package itself, this might be the project root
        if (packageJson.name !== 'quickly-react') {
          // But make sure we're not still inside node_modules
          if (!dir.includes(path.sep + 'node_modules' + path.sep) && 
              !dir.endsWith(path.sep + 'node_modules')) {
            return dir;
          }
        }
      } catch (e) {
        // If we can't read package.json, continue searching
      }
    }
    
    // Move up one directory
    const parentDir = path.dirname(dir);
    if (parentDir === dir) {
      // Reached filesystem root
      break;
    }
    dir = parentDir;
  }
  
  // Fallback: if we're in node_modules, go up two levels (node_modules -> project root)
  if (packageDir.includes('node_modules')) {
    const parts = packageDir.split(path.sep);
    const nodeModulesIndex = parts.findIndex(part => part === 'node_modules');
    if (nodeModulesIndex > 0) {
      return parts.slice(0, nodeModulesIndex).join(path.sep);
    }
  }
  
  // Last resort: use process.cwd()
  return process.cwd();
}

const projectRoot = findProjectRoot();
const targetDir = path.join(projectRoot, '.cursor', 'rules');
const targetFile = path.join(targetDir, 'quickly-react.mdc');

// Double-check: don't install in quickly-react's own directory
const projectPackageJsonPath = path.join(projectRoot, 'package.json');
if (fs.existsSync(projectPackageJsonPath)) {
  try {
    const packageJson = JSON.parse(fs.readFileSync(projectPackageJsonPath, 'utf8'));
    if (packageJson.name === 'quickly-react') {
      // This is the quickly-react package itself, skip
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
  console.log(`✓ quickly-react: Rule file installed to ${targetFile}`);
} catch (error) {
  // Don't fail the install if rule copy fails
  // Log error for debugging but don't fail
  console.error('quickly-react postinstall error:', error.message);
  process.exit(0);
}
