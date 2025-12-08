

export default function ContactForm() {
    return (
        <div className="w-full pb-20 bg-white">
            <form className="w-[90%] md:w-[50%] mx-auto p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Us</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]" required />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A1B9A]" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="bg-[#6A1B9A] text-white px-6 py-2 rounded-lg hover:bg-[#6A1B9A]/80 transition">Submit</button>
                </div>
            </form>
        </div>
    );
};