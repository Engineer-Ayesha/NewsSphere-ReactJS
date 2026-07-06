import React from "react";
function NewsItem(props) {
  return (
    <div>
      <div className="card my-2">
        <span className="badge bg-danger position-absolute top-0 end-0 m-2">
          {props.source}
        </span>
        <img
          src={
            props.imageUrl || "https://placehold.co/600x400?text=No+News+Image"
          }
          onError={(e) => {
            e.target.src = "https://placehold.co/600x400?text=No+News+Image";
          }}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {props.author} on {new Date(props.publishDate).toGMTString()}
            </small>
          </p>
          <a
            href={props.newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
export default NewsItem;
