import { makeStyles } from 'tss-react/mui';

export default makeStyles()((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        color: 'rgba(0,183,255, 1)',
    },
    image: {
        marginLeft: '15px',
    },

    //mobile responsive
    [theme.breakpoints.down('md')]: {
        mainContainer: {
            flexDirection: "column-reverse",
        }
    }
}));