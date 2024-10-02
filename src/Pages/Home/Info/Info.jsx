import room from "../../../assets/room.jpg";

const Info = () => {
  return (
    <div className="bg-gray-500">
      <div className="w-[70%] m-auto">
        <div className="flex items-center p-5">
          <img className="rounded-2xl w-[40%] " src={room} alt="" />
          <div className="ml-5 text-white">
            <p className="text-5xl p-5">
              Find The Best <br />
              Hotels Deals
            </p>
            <div>
              <div className="flex p-5">
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                  maiores. Fuga nulla vitae inventore tenetur ducimus, deserunt
                  eligendi tempore nostrum?
                </p>
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                  maiores. Fuga nulla vitae inventore tenetur ducimus, deserunt
                  eligendi tempore nostrum?
                </p>
              </div>
              <div className="flex p-5">
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                  maiores. Fuga nulla vitae inventore tenetur ducimus, deserunt
                  eligendi tempore nostrum?
                </p>
                <p className="w-[50%]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
                  maiores. Fuga nulla vitae inventore tenetur ducimus, deserunt
                  eligendi tempore nostrum?
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
