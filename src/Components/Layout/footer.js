import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <div className={classes.footerWrap}>
                <div className={classes.newsLetterContent}>
                    <div>
                        <h4 style={{ margin: 0 }}>Subscribe to our newsletter</h4>
                        To get tips about how to be a better manager
                    </div>
                    <div>
                        <input type="text" placeholder="Your Email" style={{ color: "#2B879E" }}></input>
                        {/* <TextField id="outlined-basic" label="Your Email" variant="outlined" size="small"  style={{backgroundColor:"white" , height:"2em"}} /> */}
                        <button style={{ backgroundColor: "white", color: "#2B879E", boxShadow: "none", padding: "2px 16px", border: "none", borderRadius: "2px", margin: "2px" }}>Send </button>

                    </div>
                </div>

                &copy; {new Date().getFullYear()} Easy Realty System

            </div>


        </footer>
    );
}

const useStyles = makeStyles({
    footerWrap: {
        display: "flex",
        flexDirection: "column",
    },
    newsLetterContent:
    {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "2%",
        paddingLeft: "10%",
        paddingRight: "10%",
        backgroundColor: "#2B879E",
        color: "white",
    },
    copy: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
export default Footer;
