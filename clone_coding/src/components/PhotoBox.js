import React from "react";
import { PhotoMock } from "../mockdata/PhotoMock";

const PhotoBox = () => {
  return (
    <>
      {PhotoMock.map((photo) => (
        <S.Img data={photo} />
      ))}
    </>
  );
};

export default PhotoBox;
