import React from 'react';
import Form from './Form';
import SingleForm from './../../component/layout/SingleForm';
import LockIcon from '@material-ui/icons/LockOutlined';
import Button from './../../component/Button';
import Grid from '@material-ui/core/Grid';

const Page: React.FC<{}> = () => {
    return (
        <SingleForm icon={<LockIcon />} title="Sign in">
            <Form/>
            <Grid container direction='row' spacing={6}>
                <Grid item xs>
                <Button
                    fullWidth
                    outlined
                    secondary
                    text="Forgot password?" />
                </Grid>
                <Grid item xs>
                    <Button
                        fullWidth
                        outlined
                        secondary
                        text="Create organization" />
                </Grid>
            </Grid>
        </SingleForm>
    );
}

export default Page;