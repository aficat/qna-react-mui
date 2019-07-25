import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class MenuBar extends Component {
    render() {
        return (
            <AppBar position="static" color="default" style={{ alignItems: "center" }} >
                <Toolbar disableGutters={true}>
                    <Typography variant="h5" color="default" style={{ paddingTop: 18, paddingBottom: 18 }}>
                        Q&A APPLICATION
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}

MenuBar = observer(MenuBar);
export default MenuBar;