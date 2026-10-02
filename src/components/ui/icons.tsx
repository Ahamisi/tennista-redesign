import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function EyeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M24 10c8.2 0 14.6 6.4 18.2 12.2a3 3 0 010 3.6C38.6 31.6 32.2 38 24 38S9.4 31.6 5.8 25.8a3 3 0 010-3.6C9.4 16.4 15.8 10 24 10zm0 6.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zm0 4a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
    </svg>
  );
}

export function MissionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M22 4h3v16h-3z" />
      <path d="M25 5h14l-4 5 4 5H25z" />
      <path d="M4 44l14-22 6 9 5-8 15 21H4z" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M21 6a15 15 0 1010.6 25.6l8.2 8.2 3.2-3.2-8.2-8.2A15 15 0 0021 6zm0 6a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
  );
}

export function DevelopIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M22 4h4l1 5.2a14 14 0 014.6 2.7l5-2.2 2.8 2.8-2.2 5a14 14 0 012.7 4.6L44 23v4l-5.1 1a14 14 0 01-2.7 4.6l2.2 5-2.8 2.8-5-2.2a14 14 0 01-4.6 2.7L26 44h-4l-1-5.1a14 14 0 01-4.6-2.7l-5 2.2-2.8-2.8 2.2-5A14 14 0 018.1 28L3 27v-4l5.1-1a14 14 0 012.7-4.6l-2.2-5 2.8-2.8 5 2.2A14 14 0 0121 9.1L22 4zm2 12a8 8 0 100 16 8 8 0 000-16z" />
      <circle cx="24" cy="24" r="3.2" />
    </svg>
  );
}

export function LeadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" aria-hidden focusable="false" {...props}>
      <circle cx="16" cy="14" r="4" />
      <circle cx="32" cy="14" r="4" />
      <path d="M8 34c0-5 3.6-8 8-8s8 3 8 8v4H8v-4zm16 4v-4c0-2.2.6-4.2 1.6-6 1.2-1.2 2.8-2 4.4-2 4.4 0 8 3 8 8v4H24z" />
      <path d="M6 20h6v2.4H6zm30 0h6v2.4h-6zM7.2 16.6l4.2 4.2-1.7 1.7-4.2-4.2zm31.3 0l1.7 1.7-4.2 4.2-1.7-1.7z" />
    </svg>
  );
}

export function ArrowRight(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  );
}

export function ChevronDown(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 9.5l6 6 6-6" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Icon>
  );
}

export function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54v-2.2c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.87h2.78l-.45 2.91h-2.33V22c4.78-.76 8.45-4.92 8.45-9.94z" />
    </svg>
  );
}

export function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.64.41 1.36.46 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 01-1.16 1.77c-.55.56-1.11.9-1.77 1.16-.64.24-1.36.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 01-1.77-1.16 4.9 4.9 0 01-1.16-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.46-2.43A4.9 4.9 0 013.68 3.68 4.9 4.9 0 015.45 2.52c.64-.24 1.36-.41 2.43-.46C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.9-.19-1.39-.32-1.71a2.9 2.9 0 00-.69-1.06 2.9 2.9 0 00-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.05-.05-1.37-.06-4.04-.06zm0 3.07a5.13 5.13 0 110 10.26 5.13 5.13 0 010-10.26zm0 1.8a3.33 3.33 0 100 6.66 3.33 3.33 0 000-6.66zm6.54-2.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable="false" {...props}>
      <path d="M20.45 2H3.55A1.55 1.55 0 002 3.55v16.9A1.55 1.55 0 003.55 22h16.9A1.55 1.55 0 0022 20.45V3.55A1.55 1.55 0 0020.45 2zM8.34 18.34h-2.8V9.75h2.8v8.59zM6.94 8.58a1.62 1.62 0 110-3.25 1.62 1.62 0 010 3.25zm11.4 9.76h-2.79v-4.5c0-1.08-.39-1.81-1.35-1.81-.74 0-1.18.5-1.37.98-.07.17-.09.41-.09.65v4.68h-2.8s.04-7.6 0-8.59h2.8v1.22a2.78 2.78 0 012.52-1.39c1.84 0 3.08 1.2 3.08 3.78v4.98z" />
    </svg>
  );
}
