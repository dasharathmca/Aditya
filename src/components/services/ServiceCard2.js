import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

// import "../../styles/styles.css";

const faces = [
  "http://i.pravatar.cc/300?img=1",
  "http://i.pravatar.cc/300?img=2",
  "http://i.pravatar.cc/300?img=3",
  "http://i.pravatar.cc/300?img=4"
];

const styles = muiBaseTheme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "56.25%"
  },
  content: {
    textAlign: "left",
    padding: muiBaseTheme.spacing.unit * 3
  },
  divider: {
    margin: `${muiBaseTheme.spacing.unit * 3}px 0`
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
  avatar: {
    display: "inline-block",
    border: "2px solid white",
    "&:not(:first-of-type)": {
      marginLeft: -muiBaseTheme.spacing.unit
    }
  }
});

function ServiceCard2({ classes }) {
  return (
    <div className="App">
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={require('../../images/ComboJuice.jpg')}
        />
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
          >
            Combo Juice
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
             1. Fruit Punch  2. Litchee Lover  3. Summer Queen  4. Pineapple Guava Grapes  5. Strawberry Orange
             6. Orange Pineapple  7. Black Grapes with  8. Pomegranate   
          </Typography>
          <Divider className={classes.divider} light />
          {faces.map(face => (
            <Avatar className={classes.avatar} key={face} src={face} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const SrvCard2 = withStyles(styles)(ServiceCard2);

export default SrvCard2;