import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  render() {
    const dish = this.props.dishDetail;

    if (dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h2> Comments </h2>
            {dish.comments &&
              dish.comments.map(k => {
                return (
                  <div
                    className="icon-text-container"
                    style={{
                      borderWidth: "medium",
                      border: "2px solid #0188cc",
                      borderRadius: "9px",
                      marginTop: "10px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginBottom: "10px"
                    }}
                  >
                    <p>{k.comment}</p>
                    <p>
                      --{k.author} &nbsp;&nbsp; {k.date}
                    </p>
                  </div>
                );
              })}
            ;
          </div>
        </div>
      );
    else return <div />;
  }
}

export default DishDetail;
