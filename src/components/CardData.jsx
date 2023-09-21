import React from "react";

const CardData = ({ picturesData }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-lg-4 g-4 m-2">
      {picturesData.map((item, index) => {
        const img = item.urls.regular;
        const authorName = `${item.user.first_name} ${item.user.last_name}`;
        return (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={img}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{authorName}</h5>
                <p className="card-text">{item.alt_description}</p>
              </div>
              <div className=" card-footer text-center">
                <a
                  href={`${item.links.html}`}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Original picture
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardData;
