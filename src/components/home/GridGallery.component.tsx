import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function GridGallery({ images }: { images: string[] }) {
  const [imagesShownArray, setImagesShownArray] = useState<boolean[]>(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index: number, isVisible: boolean) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:grid-cols-2 sm:grid-cols-2">
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible: boolean) =>
              imageVisibleChange(index, isVisible)
            }
          >
            <GridGalleryCard
              imageUrl={imageUrl}
              show={imagesShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({
  imageUrl,
  show,
}: {
  imageUrl: string;
  show: boolean;
}) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <img src={imageUrl} alt="" />
    </div>
  );
}
