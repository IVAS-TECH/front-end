import React from 'react';
import Form from './Form';
import SingleForm from './../../component/layout/SingleForm';
import LockIcon from '@material-ui/icons/LockOutlined';

const Page: React.FC<{}> = () => (
    <SingleForm icon={<LockIcon />} title="Sign in">
        <Form/>
    </SingleForm>

);
export default Page;