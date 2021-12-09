import React from "react";

export default function Cards(props) {
  return (
    <div className="m-2">
      <div className="card" style={{maxWidth:"20rem",minWidth:"20rem", maxHeight:"34rem",minHeight:"34rem"}}>
        <img src={props.imgLink} style={{width: "100%", maxHeight:"21rem"}}  className=" image card-img-top" alt="..." />
        {/* <Images imgSource={props.imgLink} /> */}
        <div className="card-body">
          <div className="d-flex justify-content-between">
          <h5 className="card-title">{props.heading}</h5>
          <span className="text-secondary">{props.category}</span>
          </div>
          <p className="text-secondary">{props.site}</p>
          <a
            href={props.watch}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Watch
          </a>
        </div>
      </div>
    </div>
  );
}
