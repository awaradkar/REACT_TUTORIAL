import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish({ dish }) {
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

function RenderComments({ comments }) {
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
            {cmnt.author},
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "2-digit"
            }).format(new Date(Date.parse(cmnt.date)))}
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

const DishDetail = props => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  else return <div />;
};

export default DishDetail;
