import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(10),
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        width: theme.spacing(9),
        height: theme.spacing(9)
    }
}));

interface Props {
    icon: JSX.Element,
    title: string,
    children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ icon, title, children }) => {
    const classes = useStyles();
    return (
        <Container component='main' maxWidth='sm'>
            <Paper className={classes.paper}>
                <Avatar className={classes.avatar} variant="rounded">
                    {icon}
                </Avatar>
                <Typography component="h1" variant="h4" color="textPrimary" paragraph>
                    {title}
                </Typography>
                {children}
            </Paper>
        </Container>
    );
};

export default Layout;