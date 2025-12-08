

export default function Vision() {
    return (
        <section className="pb-6 px-6 bg-white">
            <div className="text-center border bg-[#6A1B9A]/90 rounded-2xl py-20 md:w-[80%] mx-auto block md:flex items-center justify-center">
                <div className='md:ml-15 w-full md:w-[50%] block'>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 text-[#C2185B]"
                            viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M12 2.00005C12.5523 2.00005 13 2.44776 13 3.00005C12.9999 3.5523 12.5522 4.00005 12 4.00005C7.58172 4.00005 4 7.58177 4 12C4.00004 16.4183 7.58174 20 12 20C16.4182 20 19.9999 16.4183 20 12C20 11.4478 20.4477 11 21 11C21.5523 11 22 11.4478 22 12C21.9999 17.5229 17.5228 22 12 22C6.47717 22 2.00004 17.5229 2 12C2 6.4772 6.47715 2.00005 12 2.00005ZM12 6.00005C12.5523 6.00005 13 6.44776 13 7.00005C12.9999 7.5523 12.5522 8.00005 12 8.00005C9.79085 8.00005 7.99999 9.79091 7.99999 12C8.00004 14.2092 9.79088 16 12 16C14.2091 16 15.9999 14.2092 16 12C16 11.4478 16.4477 11 17 11C17.5523 11 18 11.4478 18 12C17.9999 15.3137 15.3137 18 12 18C8.68631 18 6.00004 15.3137 6 12C6 8.68634 8.68629 6.00005 12 6.00005ZM17.6562 2.10063C18.0468 1.71011 18.6807 1.71011 19.0713 2.10063C19.4614 2.49111 19.4615 3.12425 19.0713 3.51469L18.3633 4.22075L18.3642 4.22173C17.9737 4.61225 17.9737 5.24526 18.3642 5.63579C18.7548 6.02618 19.3878 6.02627 19.7783 5.63579L20.4853 4.92876C20.8759 4.53845 21.5089 4.53832 21.8994 4.92876C22.2899 5.31921 22.2897 5.95228 21.8994 6.34282L19.7783 8.46489C19.5909 8.6523 19.3363 8.75677 19.0713 8.75688H16.6572L12.707 12.7071C12.3165 13.0974 11.6834 13.0975 11.293 12.7071C10.9025 12.3166 10.9026 11.6836 11.293 11.293L15.2422 7.3438V4.92876C15.2422 4.66362 15.3477 4.40922 15.5351 4.22173L17.6562 2.10063Z">
                            </path>
                    </svg>
                    <h2 className="text-3xl font-bold text-black">Our Vision</h2>
                    </div>
                    <p className="text-lg md:w-[60%] w-[80%] mx-auto text-white text-justify leading-relaxed">
                        A Nigeria where every girl and woman enjoys equitable access to health,
                        dignity, and lifelong well-being.
                    </p>
                </div>
                <div className="border-l hidden md:block w-[1%] ml-3 h-80 my-auto border-gray-700 pt-8"> </div>
                <div className="border-t md:hidden h-[1%] mt-3 w-70 mx-auto border-gray-700 pt-8"> </div>
                <div className="md:w-[50%] block md:mr-15">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            className="w-8 h-8 text-[#C2185B]"
                            viewBox="0 0 24 24" 
                            fill="currentColor">
                                <path 
                                    d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z">
                                    </path>
                        </svg>
                        <h2 className="text-3xl font-bold text-black">Our Mission</h2>
                    </div>
                    <p className="text-lg w-[80%] mx-auto text-white text-justify leading-relaxed">
                        To empower girls and women through health education, livelihood support, digital inclusion, and community-driven programs that promote reproductive health, mental well-being, economic resilience, and gender equity, ensuring that every woman has the tools, knowledge, and opportunities to live a healthy, dignified, and self-sufficient life.
                    </p>
                </div>
            </div>
        </section>
    );
}