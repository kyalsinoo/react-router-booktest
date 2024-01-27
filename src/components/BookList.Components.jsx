import React from "react";

const BookListComponents = ({ data }) => {
  console.log(data);
  return (
    <div className=" w-full p-4 border border-blue-400 rounded-lg ">
      <div>
        <img
        className="w-[256px] h-[298px] object-cover  rounded-lg mb-4"
          src={data.imgs}
          alt="img.jpg"
        />
      </div>
      <div className="mb-2">
        <h1 className="text-lg font-bold">{data.book}</h1>
        <h2 className="text-base text-gray-400">{data.author}</h2>
      </div>
      <div>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default BookListComponents;