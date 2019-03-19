import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingsNav from './SettingsNav';
import { Switch, Route, Redirect } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import AccountPage from './AccountPage';
import PhotosPage from './PhotosPage'

const SettingsDashboard = () => {
        return(
            <Grid>
                <Grid.Column width={12}>
                    <Switch>
                        <Redirect exact from='/settings' to='/settings/basics'/>
                        <Route path='/settings/basics' component={BasicPage}/>
                        <Route path='/settings/about' component={AboutPage}/>
                        <Route path='/settings/account' component={AccountPage}/>
                        <Route path='/settings/photos' component={PhotosPage}/>
                    </Switch>
                </Grid.Column>
                <Grid.Column width={4}>
                    <SettingsNav/>
                </Grid.Column>
            </Grid>
        )
}

export default SettingsDashboard;