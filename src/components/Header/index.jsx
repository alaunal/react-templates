import React from 'react';
import { BsGithub } from 'react-icons/bs';

import { WrapperHeader, NavMenu, MenuItem, ContentHeader } from './styles';

const Header = () => {

    return(
        <WrapperHeader>
            <ContentHeader>
                <NavMenu>
                    <MenuItem href="https://github.com/alaunal/" target="_blank"><BsGithub /> alaunal</MenuItem>
                </NavMenu>
            </ContentHeader>
        </WrapperHeader>
    );
};

export default Header;
