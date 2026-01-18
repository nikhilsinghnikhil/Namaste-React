import contactImg from "../assets/contactImg.png";
const Contact = () => {
    return (
        
       <div className="min-h-screen bg-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div>
                <img 
                    src={contactImg}
                    alt = "Contact Banner"
                    className="w-full h-[250px] object-cover rounded-lg border"
                    />
            </div>

            <div className=" lg:col-span-2 space-y-6">
                <select className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-500 focus:outline-none focus:ring-1 focus:ring-red-400">
                    <option>How can we help you?*</option>
                    <option>Order Issue</option>
                    <option>Order Issue</option>
                    <option>Order Issue</option>
                    <option>I want to share a Feedback</option>
                    <option>Others</option>
                </select>

                 <input
            type="email"
            placeholder="Email Address*"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400"
          />

          {/* Mobile */}
          <input
            type="text"
            placeholder="Mobile Number (optional)"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400"
          />

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Type text*"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400"
          ></textarea>

          {/* Button */}
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition cursor-pointer">
            Submit feedback
          </button>
            </div>
            
        {/* RIGHT INFO SECTION */}
        <div className="space-y-6">

          {/* Safety Card */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Report a Safety Emergency
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              We are committed to the safety of everyone using our platform.
            </p>
            <a
              href="#"
              className="text-red-500 font-medium hover:underline"
            >
              Report here
            </a>
          </div>

          {/* Live Order Card */}
          <div className="border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-2">
              Issue with your live order?
            </h3>
            <p className="text-gray-600 text-sm">
              Click on the <span className="font-medium">Support</span> or
              <span className="font-medium"> Online ordering help</span> section
              in your app to connect to our customer support team.
            </p>
          </div>

        </div>
        </div>
        
       </div>
    )
}

export default Contact;