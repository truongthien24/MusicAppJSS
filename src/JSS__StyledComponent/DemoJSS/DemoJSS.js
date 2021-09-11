import React from 'react'
import { Button, ButtonSmall, Img } from '../Component/Button'
import { StyledLink, Link } from '../Component/Link'
import { TextField } from '../Component/TextField'
export default function DemoJSS(props) {
    
    return (
        <div>
            <Button>Nhấn vào đây</Button>
            <Button primary>Nhấn vào đây</Button>
            <ButtonSmall>Nhấn vào đây</ButtonSmall>
            <Img src="https://picsum.photos/id/20/300/300"/>
            <Img src="https://picsum.photos/id/20/300/300" style={{width: '30px'}}/>
            <StyledLink id="thiendeptrai" name="fdjafkd;à" href="#">Đây là styled link</StyledLink>
            <TextField inputColor="violet"/>
            <TextField inputColor="green"/>
        </div>
    )
}
