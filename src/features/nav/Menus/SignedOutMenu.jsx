import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = ({SignInMenu, Register}) => {
    return (
        <Menu.Item position="right">
            <Button basic inverted onClick={SignInMenu} content="Login" />
            <Button basic inverted onClick={Register} content="Register" style={{ marginLeft: '0.5em' }} />
        </Menu.Item>
    )
}

export default SignedOutMenu;