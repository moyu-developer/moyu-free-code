declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.json';
declare module '*.less';
declare module '*.css';
declare module '*.less';
declare module '*.json';
declare module '*.sass';
declare module '*.scss';

export interface CustomSetterFormItemProps<T = any> {
  value?: T;
  onChange?: (value: T) => void
}
