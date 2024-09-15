import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const Form = () => {
  const formRef = useRef(null);
  const toast = useToast();
  const [formData, setFormData] = useState({
    email: "",
  });

  function handleForm(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p0afuxa",
        "template_2ebg4cj",
        formRef.current,
        "0qBTu8ki4mgmJoYkv"
      )
      .then(
        (result) => {
          console.log(result);
          toast({
            title: "Mail Sent Successfully",
            description: "We will reach out soon.",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Some error Occured",
            status: "error",
            duration: 2000,
            isClosable: true,
            position: "top-right",
          });
        }
      );
  };

  return (
    <section className="pb-6 Contact flex flex-col items-center pt-44 gap-10">
      <p
        className="text-2xl text-white md:text-4xl font-bold text-center pb-[20px]"
        data-aos="fade-down"
      >
        Get notified when we launch. No spam, ever.
      </p>

      <div className=" w-[40%] relative">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-3 justify-center"
          data-aos="fade-up"
        >
          <MdEmail className="absolute left-3 top-2 text-gray-500" size={40} />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleForm}
            className="text-black focus:outline-none py-3 rounded-md  bg-[#dfe4fc] pl-16 text-xl"
            placeholder="Email"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-bold py-3 px-4 rounded-md text-xl hover:bg-blue-600"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
