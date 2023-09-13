import { PhotoMock } from "../mockdata/PhotoMock";
import { ContentMock } from "../mockdata/ContentMock";

const ProductBox = () => {
  return (
    <>
      <div>
        {PhotoMock.map((index) => (
          <div key={index}>
            <img src={PhotoMock[index]} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div>
        {ContentMock.map((content) => (
          <div>
            <p>{content.title}</p>
            <p>{content.price}</p>
            <p>{content.address}</p>
            <span>{content.likes}</span>
            <span>{content.chats}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductBox;
