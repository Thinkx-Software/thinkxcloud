import React from "react";
import Fade from "react-reveal/Fade";
function SharedCards() {
  return (
    <section className="flex flex-col lg:flex-row  items-center lg:justify-center w-full lg:px-10 py-12 ">
      <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-black rounded-lg md:mx-1">
        <h5 className="font-bold text-base">Planet</h5>
        <h3 className="pb-4 flex justify-center font-bold border-b border-gray-300">
          <span className="text-xl mt-6 mr-1">shs</span>
          <span className="line-through">120,000</span>
          <span className="text-3xl">100,000</span>
          <span className="text-xl mt-6 mr-1">/year</span>
        </h3>
        <p className="pt-4 pb-4 bg-yellow-900 text-white border-b border-gray-300 font-bold">
          Save upto 20%
        </p>

        <ul className="text-sm font-bold">
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            2 GB Disk Space SSD
          </li>

          <li className="pt-4 bg-red-700 pb-4 text-white border-b border-gray-300 font-bold">
            Free SSl
          </li>
          <li className="pt-3 pb-4 border-b border-gray-300 font-bold">
            100 Email Accounts
          </li>

          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            1 Website
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            3 sub domains
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            24/7 support
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            includes cpanel
          </li>
        </ul>
        <div className=" uppercase text-center m-2">
          <h1
            className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white"
          >
            <a href="http://thinkxcloud.com/billing/cart.php?a=add&pid=20">
              Check Out
            </a>
          </h1>
        </div>
      </article>
      <article class="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg md:mx-1">
        <h5 class="font-bold text-3xl">Star</h5>
        <h2 class="flex justify-center pb-4 font-bold border-b border-gray-200">
          <span className="text-3xl mt-6 mr-1">shs</span>
          <span className="line-through">240,000</span>
          <span className="text-3xl">200,000</span>
          <span className="text-xl mt-6 mr-1">/year</span>
        </h2>
        <p className="pt-4 pb-4 bg-yellow-900 text-white border-b border-gray-300 font-bold">
          Save upto 20%
        </p>
        <ul class="text-sm font-bold">
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            5 GB Disk Space SSD
          </li>

          <li className="pt-4 bg-red-700 pb-4 text-white border-b border-gray-300 font-bold">
            Free SSl
          </li>
          <li className="pt-3 pb-4 border-b border-gray-300 font-bold">
            150 Email Accounts
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            3 Websites
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            5 sub domians
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            24/7 support
          </li>
          <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
            includes cpanel
          </li>
        </ul>
        <div className=" uppercase text-center m-2">
          <h1
            className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white"
          >
            <a href="http://thinkxcloud.com/billing/cart.php?a=add&pid=21">
              Check Out
            </a>
          </h1>
        </div>
      </article>
      <Fade left cascade>
        <article
          className="lg:w-custom w-4/5 mb-10 px-6 py-12 lg:-mt-6 text-white text-center rounded-lg bg-gray-800 md:mx-1"
          style={{
            backgroundImage:
              "linear-gradient('90deg, #a3a8f0 0%, #696fdd 100%')",
          }}
        >
          <h5 className="font-bold text-base ">Galaxy</h5>
          <h2 className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center">
            <span className="text-xl mt-6 mr-1">shs</span>

            <span className="line-through">600,000</span>
            <span className="text-3xl">300,000</span>
            <span className="text-xl mt-6 mr-1">/year</span>
          </h2>
          <p className="pt-4 pb-4 bg-yellow-900 text-white border-b border-gray-300 font-bold">
            Save upto 50%
          </p>

          <ul className=" text-sm font-bold">
            <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
              8 GB Disk Space SSD
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
              Free Domain Name
            </li>
            <li className="pt-3 pb-4 border-b border-gray-300 font-bold">
              200 Email Accounts
            </li>
            <li className="pt-4 bg-red-700 pb-4 text-white border-b border-gray-300 font-bold">
              Free SSl
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
              3 Websites
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
              5 sub domians
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
              24/7 support
            </li>
            <li className="pt-4 pb-4 border-b border-gray-300 font-bold">
              includes cpanel
            </li>
          </ul>
          <div className=" uppercase text-center m-2">
            <h1
              className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white"
            >
              <a href="http://thinkxcloud.com/billing/cart.php?a=add&pid=23">
                Check Out
              </a>
            </h1>
          </div>
        </article>
      </Fade>
    </section>
  );
}

export default SharedCards;
