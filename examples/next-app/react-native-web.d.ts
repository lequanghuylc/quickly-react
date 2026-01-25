// Type declaration to alias react-native to react-native-web for Next.js
// This allows TypeScript to resolve react-native imports to react-native-web types
declare module 'react-native' {
  export * from 'react-native-web';
  // Re-export default if needed
  import * as RNWeb from 'react-native-web';
  export default RNWeb;
}
