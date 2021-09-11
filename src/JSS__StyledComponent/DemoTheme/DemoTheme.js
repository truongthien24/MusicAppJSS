import React, {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import { configDarkTheme } from './DarkTheme';
import { DivStyle } from './Div';
import { configLightTheme } from './LightTheme';

export default function DemoTheme() {
    
    const [theme, setTheme] = useState(configDarkTheme);

    const handleChange = (event) => {
        {event.target.value == "1" ? setTheme(configDarkTheme) :  setTheme(configLightTheme)} 
    }

    return (
        <ThemeProvider theme={theme}>
            <DivStyle>
                hahahaa
            </DivStyle>
            <select onChange={handleChange}>
                <option value="1">Dark theme</option>
                <option value="2">Light theme</option>
            </select>
        </ThemeProvider>
    )
}
