import React from "react";
import Details from "./Details";

const BookDetails = (props) => {
  console.log(props.books);
  //const book = props.location.state;
  //   componentDidMount = () => {
  //     const data = this.props.location.state;
  //   };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <Details data={props.books} />;
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
