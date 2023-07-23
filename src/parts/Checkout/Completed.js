import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              alt="completed checkout apartment"
            />
            <p className="text-gray-500">
            Kami akan menginformasikannya melalui email nanti
            setelah transaksi diterima
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
