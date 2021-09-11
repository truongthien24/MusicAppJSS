import styled from 'styled-components';
import React from 'react';

export const Link = ({className, children,...restprops}) => (
    <a className={className} {...restprops}>
        {children}
    </a>
)

export const StyledLink = styled(Link)`
    color: white;
    background-color: red;
`