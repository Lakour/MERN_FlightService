import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/storage';
import _ from 'lodash';

//from: https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/

//manages the selected theme
//knows if theme is loaded correctly or has issues
export const useTheme = () => {
  const themes = getFromLS('all-themes');
  const [theme, setTheme] = useState(themes.data.light);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = mode => {
    setToLS('theme', mode)
    setTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(themes.data, 'font'));
    return allFonts;
  }

  useEffect(() =>{
    const localTheme = getFromLS('theme');

    // localTheme ? setTheme(localTheme) : setTheme(themes.data.seaWave);
    localTheme ? setTheme(localTheme) : setTheme(themes.data.light);

    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode, getFonts };
};