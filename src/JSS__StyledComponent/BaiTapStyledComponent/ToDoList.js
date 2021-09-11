import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import { ToDoListDefaultTheme } from '../DemoTheme/ToDoListDefaultTheme';
import { Container } from '../Container/Container';
import { DropDown } from '../Component/Dropdown';
import { ToDoListDarkTheme } from '../DemoTheme/ToDoListDarkTheme';
import { ToDoListLightTheme } from '../DemoTheme/ToDoListLightTheme';
import { ButtonToDoList } from '../Component/Button';

export default function ToDoList(props) {

    const [theme, setTheme] = useState(ToDoListDefaultTheme);

    const handleChange = (value) => {
        if(value.target.value == "dark") {
            setTheme(ToDoListDarkTheme)
        }
        else if (value.target.value == "light") {
            setTheme(ToDoListLightTheme)
        }
        else {
            setTheme(ToDoListDefaultTheme)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Container>
                fdsafdasfjla;sf
                <DropDown onChange={handleChange}>
                    <option value="default">Default Theme</option>
                    <option value="dark">Dark Theme</option>
                    <option value="light">Light Theme</option>
                </DropDown>
                <ButtonToDoList type="button" onClick={()=>{
                    alert('Xin chào các bạn !')
                }}>Nhấn vô đê</ButtonToDoList>
            </Container>
        </ThemeProvider>
    )
}
