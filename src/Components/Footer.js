// Footer component for footer section
const Footer = () => {
  return (
    <div className="m-[10px] text-center mx-0 w-auto py-5 px-3 bg-orange-200 rounded-md shadow-lg">
      Created By
      <i className="px-1 fa-solid fa-heart text-red-700"></i>
      <a className="px-2 text-blue-800 hover:text-orange-600" href="https://www.linkedin.com/in/mayurkhandagale25/" target="_blank">
        Mayur Khandagale
      </a>
      <i className=" px-2 fa-solid fa-copyright"></i>2023
      <strong className="font-bold px-1">
        Food<span>Plaza</span>
      </strong>
    </div>
  );
};

export default Footer;
