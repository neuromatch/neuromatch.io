import Typography from 'typography';
import moragaTheme from 'typography-theme-moraga';

// override those of theme
moragaTheme.headerFontFamily = ['Rubik'];
moragaTheme.bodyFontFamily = ['Rubik'];
moragaTheme.googleFonts = [
  {
    name: 'Rubik',
    styles: [
      300, 400, 600,
    ],
  },
  {
    name: 'Rubik',
    styles: [
      300, 400, 600,
    ],
  },
];

const typography = new Typography(moragaTheme);

export default typography;
export const { rhythm } = typography;
