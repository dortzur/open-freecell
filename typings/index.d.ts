declare module 'react-playing-cards' {
  const RANKS: any;
  const SUITS: any;
  const Card: any;
}

declare interface Hot {
  accept: Function
}

declare interface NodeModule {
  hot: Hot
}

interface Window {
  __DEV_STORE__: Object
}

declare namespace NodeJS {

  interface Global {
    window: Window
  }
}




