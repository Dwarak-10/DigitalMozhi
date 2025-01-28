import BodyImg from "../../assets/landing_BodyImg.png";
const LandingBody = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center m-10">
      <div className="text-3xl font-semibold m-4 text-center sm:order-1">
        We create interactive experiences that are engaging
      </div>
      <div className="sm:order-2">
        <img
          src={BodyImg}
          alt="Image"
          className="w-[600px] sm:h-[456px] h-[300px]"
        />
      </div>
    </div>
  );
};

export default LandingBody;
