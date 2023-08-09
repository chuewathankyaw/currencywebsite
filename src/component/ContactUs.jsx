import { useForm } from "react-hook-form";

export const Contactus = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const handleSaveData = (data) => {
    // Data contains the form fields submitted by the user
    console.log("dataa", data);
  };

  return (
    <div className="my-10 ss:my-20 ">
      <div className="text-[#13263E] ml-10 ss:ml-24">
        <h1 className="text-[25px] ss:text-[36px] font-bold">Contact Us</h1>
        <p className="text-[16px] ss:text-[20px] font-medium">
          Your voice and thoughts are important to us.
        </p>
      </div>
      <div className="mt-10 ss:mt-20">
        <div className="sm:bg-[#13263E]  flex flex-col sm:flex-row  relative ">
          <form
            onSubmit={handleSubmit(handleSaveData)}
            className="flex flex-col gap-5 items-center sm:items-start sm:basis-8/12 w-full bg-white sm:pl-24	py-10"
          >
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[a-zA-Z0-9 ]{3,20}$/,
                  message:
                    "3-20 characters and shouldn't include special character!",
                },
              })}
              type="text"
              name="name"
              placeholder="Please Enter your name"
              className="bg-[#F2F0F0] py-3 w-[15rem] ss:w-[25rem] sm:w-[20rem] md:w-[25rem] border  rounded-md px-1 placeholder:text-sm"
            />
            <input
              type="email"
              {...register("email", {
                required: "Email Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              name="email"
              placeholder="Please Enter your Email"
              style={{ fontSize: "14px", color: "gray" }}
              className="bg-[#F2F0F0] py-3 w-[15rem] ss:w-[25rem] sm:w-[20rem] md:w-[25rem] border  rounded-md px-1 placeholder:text-sm"
            />
            <select
              {...register("type")}
              name="type"
              defaultValue="" // Set the default value here
              style={{ fontSize: "14px", color: "gray" }}
              className="bg-[#F2F0F0] py-3 w-[15rem] ss:w-[25rem] sm:w-[20rem] md:w-[25rem] border  rounded-md px-1 placeholder:text-sm"
            >
              <option value="" disabled>
                Please choose
              </option>
              <option value="request">Request</option>
              <option value="feedback">Feedback</option>
              <option value="suggestion">Suggestion</option>
            </select>
            <textarea
              className="bg-[#F2F0F0] py-1 w-[15rem] ss:w-[25rem] sm:w-[20rem] md:w-[25rem] h-[10rem] border  rounded-md px-1 placeholder:text-sm"
              type="text"
              {...register("content")}
              placeholder="Write a comment..."
              name="content"
            />
            <button
              type="submit"
              className="py-2 bg-gray-500 hover:bg-[#FF543E]   text-white rounded w-[10rem] duration-500"
            >
              Send
            </button>
          </form>

          <div className="hidden sm:block absolute right-[5rem] lg:right-[8rem] top-[5rem] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0060749956983!2d96.12367147469901!3d16.826054718734163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195c18b45f149%3A0x6487e3091f30ffb0!2sITVisionHub!5e0!3m2!1sen!2ssg!4v1690877957864!5m2!1sen!2ssg"
              className="sm:w-[350px] md:w-[450px] lg:w-[550px] "
              height="350"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="sm:hidden flex items-center bg-[#13263E] p-5 ss:p-10 mx-10 rounded-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0060749956983!2d96.12367147469901!3d16.826054718734163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c195c18b45f149%3A0x6487e3091f30ffb0!2sITVisionHub!5e0!3m2!1sen!2ssg!4v1690877957864!5m2!1sen!2ssg"
              className="w-full sm:w-[350px] md:w-[450px] lg:w-[550px] "
              height="350"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};


