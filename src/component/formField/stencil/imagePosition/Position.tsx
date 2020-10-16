import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    outer: {
        width: 130,
        height: 100,
        borderStyle: 'solid',
        borderWidth: 5
    },
    horizontalInner: {
        width: 70,
        height: 33,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 28,
        borderStyle: 'solid',
        borderWidth: 3
    },
    verticalInner: {
        width: 38,
        height: 58,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 17,
        borderStyle: 'solid',
        borderWidth: 3
    }
});

const Horizontal: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.outer}>
            <div className={classes.horizontalInner} />
        </div>
    );
};

const Vertical: React.FC<{}> = () => {
    const classes = useStyles();
    return (
        <div className={classes.outer}>
            <div className={classes.verticalInner} />
        </div>
    );
};

const horizontal = <Horizontal />;

const vertical = <Vertical />;

export { horizontal, vertical };