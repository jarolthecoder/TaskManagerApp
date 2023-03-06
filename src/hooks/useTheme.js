import useLocalStorage from "use-local-storage";


export const useTheme = () => {

  const defaultLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultLight ? 'light' : 'dark');

  const handleSwitchTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
  }


  return {
    theme,
    handleSwitchTheme
  }
}
