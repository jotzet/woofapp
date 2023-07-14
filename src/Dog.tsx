import React, { useEffect, useState } from "react";

function Dog(props: { breed: string }) {
  //zczytywanie obrazka z API
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(
          `https://dog.ceo/api/breed/${props.breed}/images`
        );
        const data = await response.json();
        const [firstImage] = data.message;
        setImage(firstImage);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    fetchImage();
  }, [props.breed]);

  return (
    <div className="dog-result">
      {image && <img className="img-dog" src={image} alt="Dog" />}
      <h3 className="title">{props.breed}</h3>
      <p className="dog-p">
        This is a magnificent canine known for its distinct characteristics and
        unique temperament. With a rich history and an undeniable charm, this
        breed captivates all who encounter it. These dogs possess a loyal and
        loving nature. It brings joy, laughter, and unwavering devotion to their
        homes.
      </p>
    </div>
  );
}

export default Dog;
