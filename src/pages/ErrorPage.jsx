import error from "/assets/ticketpage/error.jpg";
import { Link } from "react-router";

function ErrorPage() {
  return (
    <div className="py-[30px] px-10 xl:px-40">
      <img
        src={error}
        alt={"Ticket Pending Confirmation"}
        className="size-[100px] xl:size-[253px] mx-auto"
        data-aos="zoom-out"
      />
      <div className="text-center mt-[30px]" data-aos="fade-up">
        <p className="font-jakarta font-medium text-[18px] xl:text-[22px] text-[#555555] mb-[10px]">
          Uh-oh!
        </p>
        <p className="font-jakarta font-medium text-[16px] xl:text-[20px] text-[#555555]">
          Something went wrong. Please try again
        </p>
      </div>
      <div className=" max-w-[430px] w-full mx-auto mt-[70px] flex flex-col gap-[37px]">
        <Link
          data-aos="fade-up"
          to={"/"}
          className="text-[#EE5128] font-jakarta font-semibold text-[18px] text-center mx-auto"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
