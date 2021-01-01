import React from "react";

const Book = (props) => {
  const ImageURL = props.data.volumeInfo.imageLinks.thumbnail;
  const Title = props.data.volumeInfo.title;
  const Authors = props.data.volumeInfo.authors;
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src={ImageURL} style={{ width: "100", height: "150" }} />
          <span className="card-title">{Title}</span>
        </div>
        <div className="card-content">
          <p>{Authors}</p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
};

export default Book;
