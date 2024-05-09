import React from "react";

function Trainers({ trainersRef }) {
  const trainersImgs = [
    "https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674059548485-808fc674463a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534872850130-5355701fcc89?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const tainersCard = trainersImgs.map((v, i) => {
    return (
      <div key={i} className="sm:w-[30%]  mt-4 relative">
        <h1 className="text-[#c0c1c4] text-center border-b-4 border-jaggyellow mb-2">
          Invest in yourself at the gym.
        </h1>
        <img className="object-cover object-center" src={v} alt="GymTrainee" />
        <button className="bg-jaggyellow rounded-md p-[2px_5px] absolute bottom-0 right-0">
          Read More
        </button>
      </div>
    );
  });
  return (
    <div
      ref={trainersRef}
      className="max-w-[100svw] bg-[#0e0c22] flex justify-evenly sm:flex-row flex-col p-4"
    >
      {tainersCard}
      {/* <div className="sm:w-[30%]  mt-4 relative">
        <h1 className="text-[#c0c1c4] text-center border-b-4 border-jaggyellow mb-2">
          Invest in yourself at the gym.
        </h1>
        <img
          className="object-cover object-center"
          src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="GymTrainee"
        />
        <button className="bg-jaggyellow rounded-md p-[2px_5px] absolute bottom-0 right-0">
          Read More
        </button>
      </div>
      <div className="sm:w-[30%]  mt-4 relative">
        <h1 className="text-[#c0c1c4] text-center border-b-4 border-jaggyellow mb-2">
          Your body's sanctuary: the gym.
        </h1>
        <img
          className="object-cover object-center"
          src="https://plus.unsplash.com/premium_photo-1674059548485-808fc674463a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="GymTrainee"
        />
        <button className="bg-jaggyellow rounded-md p-[2px_5px] absolute bottom-0 right-0">
          Read More
        </button>
      </div>
      <div className="sm:w-[30%]  mt-4 relative">
        <h1 className="text-[#c0c1c4] text-center border-b-4 border-jaggyellow mb-2">
          Gym time: your path to progress.
        </h1>
        <img
          className="object-cover object-center"
          src="https://images.unsplash.com/photo-1534872850130-5355701fcc89?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <button className="bg-jaggyellow rounded-md p-[2px_5px] absolute bottom-0 right-0">
          Read More
        </button>
      </div> */}
    </div>
  );
}

export default Trainers;
