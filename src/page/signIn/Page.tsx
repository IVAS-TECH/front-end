import React from 'react';
import Form from './Form';
import SingleForm from './../../component/layout/SingleForm';
import LockIcon from '@material-ui/icons/LockOutlined';
import Button from './../../component/Button';
import Grid from '@material-ui/core/Grid';
import TextArea from './../../component/formControl/TextArea';
import NumberInput from './../../component/formControl/NumberInput';
import CheckboxWithLabel from './../../component/formControl/CheckboxWithLabel';
import createSelect from './../../component/formControl/Select';

enum Test { A = 'A', B = 'B', C = 'C' };

const Select = createSelect<Test>();

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
            <TextArea
                initialRows={4}
                maxSymbolsPerRow={75}
                label="Test"
                value="Malko tekst"
                onValueChange={val => console.log(val)}
                 />

            <NumberInput
                value={9}
                label="Number"
                onValueChange={val => console.log(val)} />

            <CheckboxWithLabel
                checked
                label="Checkbox"
                onToggle={toggle => console.log(toggle)} />

            <Select
                id="some-id"
                value={''}
                onValueChange={v => console.log(v)}
                options={[ Test.A, Test.B, Test.C ]}
                label="Select"
                notSelectedText="Not selected"
                optionText={{
                    [Test.A]: "A t",
                    [Test.B]: "B t",
                    [Test.C]: "C t"
                }}
                error="Required"
            />
        </SingleForm>
    );
}

export default Page;