import React from "react";
import { withStyles } from "@material-ui/core/styles";
import workStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/workStyle.js";
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Danger from "components/Typography/Danger.js";

import blog6 from "assets/img/examples/blog6.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import blog7 from "assets/img/examples/blog7.jpg";

class GenNews extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <>
              <GridItem xs={12} sm={4} md={4}>
                <Card blog>
                  <CardHeader image>
                    <a href="#pablo">
                      <img src={this.props.img} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: "url(" + this.props.img + ")",
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                  <CardBody>
                    
                    <h4 className={classes.cardTitle}>
                      <a href={this.props.link}>
                        {this.props.title}
                      </a>
                    </h4>
                    <p className={classes.description}>
                      {this.props.biliner}
                      <a href={this.props.link}> Read More </a>
                    </p>
                  </CardBody>
                </Card>
              </GridItem>
    </>

        )
    }
}
export default withStyles(workStyle)(GenNews)