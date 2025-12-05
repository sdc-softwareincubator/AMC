import { MapPin, Phone as PhoneIcon, Printer } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="fotterwrap" className="bg-[#22252c] border-t-4 border-yellow-400 text-[#c4c4c4] pt-[25px] pb-[15px] font-sans relative">
            <div className="container mx-auto px-4 relative max-w-[1200px]">
                {/* Mobile Layout  */}
                <div className="md:hidden relative pr-14">
                    <div className="flex flex-col -mx-3">
                        {/* Main Content Row */}
                        <div className="flex flex-col md:flex-row">
                            {/* Left and Middle Columns Container */}
                            <div className="flex-1 flex flex-col md:flex-row">
                                {/* Column 1 - Address and Contact */}
                                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                                    <ul id="menu-useful-links" className="menu list-none">
                                        <li className="menu-item footadd1 text-sm leading-5 pl-5 relative mb-[15px] text-white">
                                            <div className="flex items-start gap-2 mb-1">
                                                <MapPin size={16} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                                                <div>
                                                    <span className="text-white">AKGEC - AMC, Advanced Manufacturing Centre</span><br />
                                                    Ajay Kumar Garg Engineering College<br />
                                                    27th Km Stone, Delhi-Hapur Bypass Road,<br />
                                                    P.O. Adhyatmik Nagar, Ghaziabad - 201009
                                                </div>
                                            </div>
                                        </li>
                                        <li className="menu-item footadd2 text-sm leading-5 pl-5 relative mb-[15px]">
                                            <a 
                                                href="tel:+919910249199" 
                                                className="flex items-start gap-2 text-[15px] text-white no-underline"
                                            >
                                                <PhoneIcon size={16} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                                                <span>+91 9910249199, +91 8743879879<br />
                                                1800-3000-6292 (toll free)</span>
                                            </a>
                                        </li>
                                        <li className="menu-item footadd3 text-sm leading-5 pl-5 relative mb-2.5">
                                            <div className="flex items-start gap-2 text-[15px] text-white">
                                                <Printer size={16} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                                                <div>
                                                    <span>Fax : +91-120-2762607, +91-120-2762606</span><br />
                                                    <span>6582886</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Column 2 - Menu and Follow Us */}
                                <div className="w-full md:w-1/2 px-3">
                                    {/* Navigation Links */}
                                    <ul id="menu-footer-menu" className="menu list-none mb-4">
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="#about" 
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="#training" 
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                Training Programs
                                            </a>
                                        </li>
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="#services" 
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                Services
                                            </a>
                                        </li>
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="#projects" 
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                Projects
                                            </a>
                                        </li>
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="#certification" 
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                Certification
                                            </a>
                                        </li>
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="https://www.akgecskills.in/app/registration/" 
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                Registration
                                            </a>
                                        </li>
                                        <li className="menu-item mb-2">
                                            <a 
                                                href="#gallery" 
                                                className="block text-[15px] text-white no-underline"
                                            >
                                                Photo Gallery
                                            </a>
                                        </li>
                                    </ul>

                                    {/* Follow Us Section */}
                                    <div>
                                        <h4 className="font-['Oswald',sans-serif] text-xl mb-3 mt-0 font-medium leading-tight text-white">Follow Us</h4>
                                        <ul className="flex list-none gap-2">
                                            <li>
                                                <a 
                                                    href="https://facebook.com/" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="w-9 h-9 p-1.5 m-0 inline-flex items-center justify-center bg-[#1877f2] rounded"
                                                    title="Facebook"
                                                >
                                                    <img src="/Images/facebook.jpeg" alt="Facebook" className="w-6 h-6" />
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="https://twitter.com/" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="w-9 h-9 p-1.5 m-0 inline-flex items-center justify-center bg-[#1da1f2] rounded"
                                                    title="Twitter"
                                                >
                                                    <img src="/Images/twitter.jpeg" alt="Twitter" className="w-6 h-6" />
                                                </a>
                                            </li>
                                            <li>
                                                <a 
                                                    href="https://linkedin.com/" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className="w-9 h-9 p-1.5 m-0 inline-flex items-center justify-center bg-[#0077b5] rounded"
                                                    title="LinkedIn"
                                                >
                                                    <img src="/Images/linkedin.jpeg" alt="LinkedIn" className="w-6 h-6" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - For screens md (756px) and above */}
                <div className="hidden md:flex flex-col md:flex-row -mx-3 md:-mx-4">
                    {/* Column 1 - Address and Contact (Increased width) */}
                    <div className="w-full md:w-5/12 px-3 md:px-4 md:border-r md:border-gray-600 md:pr-8">
                        <ul id="menu-useful-links" className="menu list-none">
                            <li className="menu-item footadd1 text-sm leading-5 pl-5 relative mb-2.5 text-white">
                                <div className="flex items-start gap-2 mb-1">
                                    <MapPin size={16} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                                    <div>
                                        <span className="text-white">AKGEC - AMC, Advanced Manufacturing Centre</span><br />
                                        Ajay Kumar Garg Engineering College<br />
                                        27th Km Stone, Delhi-Hapur Bypass Road,<br />
                                        P.O. Adhyatmik Nagar, Ghaziabad - 201009
                                    </div>
                                </div>
                            </li>
                            <li className="menu-item footadd2 text-sm leading-5 pl-5 relative mb-[15px]">
                                <a 
                                    href="tel:+919910249199" 
                                    className="flex items-start gap-2 text-[15px] text-white no-underline"
                                >
                                    <PhoneIcon size={16} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                                    <span>+91 9910249199, +91 8743879879<br />
                                    1800-3000-6292 (toll free)</span>
                                </a>
                            </li>
                            <li className="menu-item footadd3 text-sm leading-5 pl-5 relative mb-2.5">
                                <div className="flex items-start gap-2 text-[15px] text-white">
                                    <Printer size={16} className="flex-shrink-0 mt-0.5 text-yellow-400" />
                                    <div>
                                        <span>Fax : +91-120-2762607, +91-120-2762606</span><br />
                                        <span>6582886</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Column 2 - Menu Left (Decreased width) */}
                    <div className="w-full md:w-2/12 px-3 md:px-4">
                        <ul id="menu-footer-menu-left" className="menu list-none">
                            <li className="menu-item">
                                <a 
                                    href="#about" 
                                    className="block text-[15px] text-white no-underline"
                                >
                                    About Us
                                </a>
                            </li>
                            <li className="menu-item">
                                <a 
                                    href="#training" 
                                    className="block text-[15px] text-white no-underline"
                                >
                                    Training Programs
                                </a>
                            </li>
                            <li className="menu-item">
                                <a 
                                    href="#services" 
                                    className="block text-[15px] text-white no-underline"
                                >
                                    Services
                                </a>
                            </li>
                            <li className="menu-item">
                                <a 
                                    href="#projects" 
                                    className="block text-[15px] text-white no-underline"
                                >
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Menu Right (Decreased width) */}
                    <div className="w-full md:w-2/12 px-3 md:px-4 md:border-r md:border-gray-600 md:pr-8">
                        <ul id="menu-footer-menu-right" className="menu list-none">
                            <li className="menu-item">
                                <a 
                                    href="#certification" 
                                    className="block text-[15px] text-white no-underline"
                                >
                                    Certification
                                </a>
                            </li>
                            <li className="menu-item">
                                <a 
                                    href="https://www.akgecskills.in/app/registration/" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-[15px] text-white no-underline"
                                >
                                    Registration
                                </a>
                            </li>
                            <li className="menu-item">
                                <a 
                                    href="#gallery" 
                                    className="block text-[15px] text-white no-underline"
                                >
                                    Photo Gallery
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 - Follow Us */}
                    <div>
                        <h4 className="font-['Oswald',sans-serif] text-2xl mb-2 mt-0 font-medium leading-tight text-[#c4c4c4]">Follow Us</h4>
                        <ul className="flex list-none gap-0">
                            <li>
                                <a 
                                    href="https://facebook.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-9 h-9 py-1.5 m-0 inline-flex items-center justify-center"
                                    title="Facebook"
                                >
                                    <img src="/Images/facebook.jpeg" alt="Facebook" className="w-6 h-6 rounded" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://twitter.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-9 h-9 py-1.5 m-0 inline-flex items-center justify-center"
                                    title="Twitter"
                                >
                                    <img src="/Images/twitter.jpeg" alt="Twitter" className="w-6 h-6 rounded" />
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="https://linkedin.com/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-9 h-9 py-1.5 m-0 inline-flex items-center justify-center"
                                    title="LinkedIn"
                                >
                                    <img src="/Images/linkedin.jpeg" alt="LinkedIn" className="w-6 h-6 rounded" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Row */}
                <div className="mt-3 pt-3 border-t border-gray-600">
                    <p className="pt-0 text-sm text-[#c4c4c4]">
                        © 2019 copyright. All right reserved. AKGEC Skills
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

