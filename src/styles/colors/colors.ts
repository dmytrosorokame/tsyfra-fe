import { CSSProperties } from 'react';

export const DEFAULT_COLORS = {
  // Primary
  '--primary5Color': 'rgba(248, 21, 57, 0.05)',
  '--primary10Color': 'rgba(248, 21, 57, 0.10)',
  '--primary25Color': 'rgba(248, 21, 57, 0.25)',
  '--primary50Color': 'rgba(248, 21, 57, 0.50)',
  '--primary75Color': 'rgba(248, 21, 57, 0.75)',
  '--primary100Color': '#F81539',

  // Secondary
  '--secondary5Color': 'rgba(252, 67, 8, 0.05)',
  '--secondary10Color': 'rgba(252, 67, 8, 0.10)',
  '--secondary25Color': 'rgba(252, 67, 8, 0.25)',
  '--secondary50Color': 'rgba(252, 67, 8, 0.50)',
  '--secondary75Color': 'rgba(252, 67, 8, 0.75)',
  '--secondary100Color': '#FC4308',

  // Neutral
  '--neutral100Color': 'rgba(62, 50, 50, 0.05)',
  '--neutral200Color': 'rgba(62, 50, 50, 0.10)',
  '--neutral300Color': 'rgba(62, 50, 50, 0.25)',
  '--neutral400Color': 'rgba(62, 50, 50, 0.50)',
  '--neutral500Color': 'rgba(62, 50, 50, 0.75)',
  '--neutral600Color': '#3E3232',

  // White
  '--whiteColor': '#FFFFFF',

  // Gray
  '--grayColor': '#F5F5F5',

  // Black
  '--black5Color': 'rgba(0, 0, 0, 0.05)',
  '--black10Color': 'rgba(0, 0, 0, 0.10)',
  '--black50Color': 'rgba(0, 0, 0, 0.50)',
  '--black75Color': 'rgba(0, 0, 0, 0.75)',
  '--black100Color': '#000000',

  // Stroke
  '--strokeColor': '#E6E6E6',

  // Gradient
  '--gradientColor': 'linear-gradient(270deg, #F81539 0%, #FC4308 94%)',
} as CSSProperties;
