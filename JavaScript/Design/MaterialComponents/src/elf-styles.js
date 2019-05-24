export const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    },
    backDiv3: {
        backgroundColor: '#ddf3ff'
    },
    paperLion: {
        flexGrow: 1,
        padding: theme.spacing.unit,
        textAlign: 'center',
        color: theme.palette.primary.dark
    },
    elfTypography: {
        // fontSize: theme.spacing.unit * 2
        fontSize: '1rem',
        fontWeight: '400',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        lineHeight: '1.5em'
    }
});
