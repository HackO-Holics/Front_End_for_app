import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { withStyles } from "@material-ui/core/styles";
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
import SectionSimilarStories from "views/BlogPostPage/Sections/SectionSimilarStories";

const useStyles = theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
      });
class GenNews extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.section}>
                <SectionSimilarStories/>
            </div>
        )
    }
}
export default withStyles(useStyles)(GenNews)