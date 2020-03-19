import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class CircularImageCard extends React.Component {
  render() {
    return (
      <Grid style={{height:"25em"}} item xs={12} sm={12} md={12} lg={4} xl={4} >
        <Card style={{ height: "100%", boxShadow:"none"}}>
            <CardContent>
              <img alt={'icon for services'} src={require("../../Assets/imgs/" + this.props.imgThumb)}></img>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center" }}
              >
                {this.props.title}
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                {this.props.detail}
              </Typography>
            </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default CircularImageCard;
