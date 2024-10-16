import { useState } from "react";
import contact from "../../Images/Contact-Us.png";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className="flex flex-wrap mt-32 mx-auto mb-32 justify-evenly overflow-y-hidden">
      <div className="contact-left">
        <img src={contact} alt="" />
      </div>
      <div className="p-3 m-3 rounded ">
        <h1 className="font-bold text-3xl">Contact us</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input className="p-3 m-3 rounded shadow-md border-[#aabcca] border-solid border-2 width-[70vh]" type="text" placeholder="Name" required />
          <input className="p-3 m-3 rounded shadow-md border-[#aabcca] border-solid border-2 width-[70vh]" type="email" placeholder="Email" required />
          <textarea className="p-3 m-3 rounded shadow-md border-[#aabcca] border-solid border-2 width-[70vh]" placeholder="Type your Message here..." required></textarea>
          <button className="py-3 px-4 bg-blue-400 shadow-lg text-white cursor-pointer border-none rounded hover:bg-green-600 " type="submit">Submit</button>
          {message && <span>Thanks for contacting FoodPlaza, We will reply ASAP.</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;