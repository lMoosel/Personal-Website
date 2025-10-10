declare module 'proper-lockfile' {
  export function lock(path: string, opts?: any): Promise<() => Promise<void>>;
  export function check(path: string, opts?: any): Promise<boolean>;
  export function unlock(path: string, opts?: any): Promise<void>;
  const _default: { lock: typeof lock, check: typeof check, unlock: typeof unlock };
  export default _default;
}
