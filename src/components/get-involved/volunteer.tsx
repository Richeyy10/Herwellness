

export default function GetInvolvedPage() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <header className="text-center mb-16">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">Get Involved & Make a Difference</h1>
        <p className="text-md md:text-xl text-gray-600 max-w-3xl mx-auto">
          Your time, resources, and support help us empower girls and women in our communities.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white text-center p-8 rounded-xl shadow-lg border-t-4 border-[#6A1B9A] transform hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer With Us</h2>
          <p className="text-gray-600 text-justify mb-6">
            Become part of a community passionate about improving girls’ and women’s lives. Whether you’re a student, professional, or advocate, there’s a role for you.
          </p>
          <h3 className="text-lg font-semibold text-gray-700 text-justify mb-3">Volunteer roles include:</h3>
          <ul className="list-disc list-inside text-gray-600 text-justify mb-8 space-y-1">
            <li>Outreach support</li>
            <li>Social media volunteers</li>
            <li>Research & M&E</li>
            <li>Community mobilization</li>
            <li>Health education facilitators</li>
          </ul>
          <button className="w-[70%] md:w-[200px] bg-[#6A1B9A] hover:bg-[#6A1B9A]/80 text-white text-sm font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md">
            Sign Up as a Volunteer
          </button>
        </div>
        <div className="bg-white text-center p-8 rounded-xl shadow-lg border-t-4 border-[#C2185B] transform hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Partner With Us</h2>
          <p className="text-gray-600 text-justify mb-6">
            We collaborate with schools, CSOs, donors, and private organizations to expand our reach and impact. If your mission aligns with ours, we’d love to collaborate.
          </p>
          <div className="mb-20"></div>
          <button className="w-[70%] md:w-[200px] bg-[#C2185B] hover:bg-[#C2185B]/80 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md">
            Become a Partner
          </button>
        </div>
        <div className="bg-white text-center p-8 rounded-xl shadow-lg border-t-4 border-[#6A1B9A] transform hover:shadow-xl transition duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Donate</h2>
          <p className="text-gray-600 text-justify mb-6">
            Your support helps us put a Non-reusable pad into a girl’s hands, run mental health sessions, or organize community health outreach. Every contribution counts.
          </p>
          <div className="mb-20"></div>
          <button className="w-[70%] md:w-[200px] bg-[#6A1B9A] hover:bg-[#6A1B9A]/80 text-white font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md">
            Donate Now
          </button>
        </div>

      </div>
    </div>
  )
};