export const navigationItems = [{ to: '/', label: 'Home' }] as const;

export function isActivePath(currentPath: string, to: string): boolean {
    return to === '/' ? currentPath === '/' : currentPath.startsWith(to);
}
