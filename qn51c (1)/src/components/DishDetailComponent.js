import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
  }

  renderDish() {
    const dish = this.props.dishDetail;
    console.log(dish);
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    if (comments.length > 0) {
      var reviews = comments.map(cmnt => {
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
            key={cmnt.id}
          >
            <p className="m-1">{cmnt.comment}</p>
            <div className="mb-3">
              {cmnt.author}, {cmnt.date}
            </div>
          </div>
        );
      });

      return (
        <div>
          <h2>Comments</h2>
          {reviews}
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    if (this.props.dishDetail != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">{this.renderDish()}</div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dishDetail.comments)}
          </div>
        </div>
      );
    else return <div />;
  }
}

export default DishDetail;
