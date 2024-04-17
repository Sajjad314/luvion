import { useEffect, useState } from "react";
import { InstaItems } from "../../interface/home/InstagramItems.interface";
import GridGallery from "./GridGallery.component";
// import { useNavigate } from "react-router-dom";

const Instagram = () => {
  const [instagramItems, setInstagramItems] = useState<InstaItems[]>([]);
  const [images, setImages] = useState<string[]>([]);
  // const navigate = useNavigate();

  const fetchImage = async (id: string) => {
    const mediaURL = `https://graph.instagram.com/${id}?access_token=${
      import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN
    }&fields=media_url,permalink`;

    const res = await fetch(mediaURL);
    const json = await res.json();

    const instaItem: InstaItems = {
      mediaUrl: json.media_url,
      permalink: json.permalink,
    };
    return instaItem;
  };

  const fetchID = async () => {
    const mediaURL = `https://graph.instagram.com/${
      import.meta.env.VITE_INSTAGRAM_USER_ID
    }/media?access_token=${import.meta.env.VITE_INSTAGRAM_ACCESS_TOKEN}`;
    const res = await fetch(mediaURL);
    const json = (await res.json()).data;

    let instaItems: InstaItems[] = [];

    for (let i = 0; i < json.length; i++) {
      let id = json[i].id;
      const item = await fetchImage(id);
      if (item !== undefined) instaItems.push(item);
    }
    if (instaItems.length > 0) setInstagramItems(instaItems);
  };

  useEffect(() => {
    fetchID();
  }, []);

  useEffect(() => {
    let links: string[] = instagramItems.map((items) => items.mediaUrl);
    setImages(links);
  }, [instagramItems]);

  return (
    <div className=" px-20 mt-10 py-10  bg-black flex flex-col gap-10 items-center justify-center">
      <h2 className="text-3xl font-semibold text-white border-b-2 border-white pb-8 m-10 w-auto">
        Instagram
      </h2>
      <div>
        {instagramItems.length > 0 && (
          <div>
            <GridGallery images={images} />
          </div>
        )}
      </div>
      <a
        href="https://www.instagram.com/luvionbarber/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" px-6 py-3 bg-inherit border-2 border-white text-white text-lg font-semibold hover:bg-white hover:text-black">
          Follow us on Instagram
        </button>
      </a>
    </div>
  );
};

export default Instagram;
