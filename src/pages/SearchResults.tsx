import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { User, Calendar, Folder } from 'lucide-react';

// Mock data based on the provided HTML
const MOCK_RESULTS = [
    {
        id: 1,
        title: 'Home',
        excerpt: 'Precision, Full – Fledged Intelligent Manufacturing Technology About Centre Advance Manufacturing Centre (AMC) has been established in collaboration with eminentIndustry partners like SIEMENS and Carl Zeiss. The centre is…',
        link: '/',
        date: null,
        author: null,
        category: null,
        image: null
    },
    {
        id: 2,
        title: 'Industrial Services',
        excerpt: 'Dimensional Testing and Calibration | Coordinate Measurement (CMM) | 3D Scanning Dimensional Testing and Calibration ASF offers Dimensional Testing & Calibration Services from NABL accredited facility to ensure reliable,…',
        link: '#',
        date: null,
        author: null,
        category: null,
        image: null
    },
    {
        id: 3,
        title: 'Vision Based Inspection System of Rocker Arm Assembly',
        excerpt: 'For Ghaziabad Precision Products (GPP) Outcome: Design and development of vision based inspection system using LabVIEW interface for inspection and testing of Rocker Arm assembly of various automotive engines….',
        link: '#',
        date: 'September 11, 2019',
        author: 'admin',
        category: 'Case Studies / Projects',
        image: 'https://amc.akgecskills.in/wp-content/uploads/2019/09/pock-1200x810.png'
    },
    {
        id: 4,
        title: 'Preliminary studies for Life Extension of Pichora Missile Launcher beams',
        excerpt: 'For 7 BRD Outcome: Conducted preliminary study for life extension of Pichora Missile launcher beams and developed testing and repair plan for the same. Submitted EOI for carrying out…',
        link: '#',
        date: 'September 11, 2019',
        author: 'admin',
        category: 'Case Studies / Projects',
        image: 'https://amc.akgecskills.in/wp-content/uploads/2019/09/case.jpg'
    },
    {
        id: 5,
        title: 'Competency Development on Industrial Automation & Robotics',
        excerpt: 'For Indian Railways, MCF Raebareli Outcome: Troubleshoot robotic welding related problems Develop applications on robotics line…',
        link: '#',
        date: 'September 11, 2019',
        author: 'admin',
        category: 'Case Studies / Projects',
        image: 'https://amc.akgecskills.in/wp-content/uploads/2019/09/modi.jpg'
    },
    {
        id: 6,
        title: 'Contact Us',
        excerpt: 'Contact Us AKGEC – AMC, Advanced Manufacturing Centre Ajay Kumar Garg Engineering College 27th Km Stone, Delhi-Hapur Bypass Road, P.O. Adhyatmik Nagar, Ghaziabad – 201009 Phone number +91 9910249199,…',
        link: '#',
        date: null,
        author: null,
        category: null,
        image: null
    },
    {
        id: 7,
        title: 'Training Programs',
        excerpt: 'Training Programs AKGEC – SIEMENS, Advanced Manufacturing Centre offers Industrial Training Programs on Measurement Technologies, Computer Integrated Manufacturing (Milling/Turning/CAD &CAM), Workshop on Advance Manufacturing, Vocational Training Program on Flexible…',
        link: '#',
        date: null,
        author: null,
        category: null,
        image: null
    },
    {
        id: 8,
        title: 'Scanning & 3D Printing of Combat Vehicle',
        excerpt: 'For 7 BRD, IAF Outcome: 3 D scanning and modelling of OSA-K combat vehicle (10 X 3 X 5 mts) and develop a scaled down (1:10) 3D printed model….',
        link: '#',
        date: 'September 11, 2019',
        author: 'admin',
        category: 'Case Studies / Projects',
        image: 'https://amc.akgecskills.in/wp-content/uploads/2019/09/truck.jpg'
    },
    {
        id: 9,
        title: 'Dash Board – Ultrasonic Welding',
        excerpt: 'For Delta Robotics Outcome: Proof of Concept for Ultrasonic welding of critical parts in an upcoming vehicle dashboard…',
        link: '#',
        date: 'September 11, 2019',
        author: 'admin',
        category: 'Case Studies / Projects',
        image: 'https://amc.akgecskills.in/wp-content/uploads/2019/09/robo.jpg'
    },
    {
        id: 10,
        title: 'Productivity Enhancement through Automation',
        excerpt: 'For Micromatic Grinding Outcome: Integration of Robot with CNC grinding machine for automatic loading and unloading of workpiece. The cycle time of the process was reduced from 163 sec…',
        link: '#',
        date: 'September 11, 2019',
        author: 'admin',
        category: 'Case Studies / Projects',
        image: 'https://amc.akgecskills.in/wp-content/uploads/2019/09/robo1.jpg'
    }
];

const CATEGORIES = [
    'Case Studies / Projects',
    'Events',
    'News',
    'Success Stories'
];

const ARCHIVES = [
    'September 2019',
    'July 2019',
    'June 2019'
];

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const category = searchParams.get('category');
    const date = searchParams.get('date');

    const filteredResults = MOCK_RESULTS.filter(result => {
        const matchesQuery = query
            ? result.title.toLowerCase().includes(query.toLowerCase()) || result.excerpt.toLowerCase().includes(query.toLowerCase())
            : true;
        const matchesCategory = category ? result.category === category : true;

        let matchesDate = true;
        if (date) {
            const parts = date.split(' ');
            if (parts.length >= 2) {
                const month = parts[0];
                const year = parts[1];
                matchesDate = !!(result.date && result.date.includes(month) && result.date.includes(year));
            }
        }

        return matchesQuery && matchesCategory && matchesDate;
    });

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* Search Header Section */}
            <div className="bg-[#f7f7f7] py-8 border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        <form className="relative max-w-full">
                            <label className="sr-only">Search for:</label>
                            <input
                                type="search"
                                className="w-full bg-white border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none focus:border-[#029896]"
                                placeholder="Search …"
                                defaultValue={query}
                            />
                            <button type="submit" className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-[#029896]">
                                <span className="sr-only">Search</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">

                    {/* Main Content */}
                    <div className="w-full md:w-3/4">
                        <header className="mb-8">
                            <h1 className="text-3xl font-normal text-gray-800">
                                Search Results for: <span className="font-bold">{query || category || date || 'All'}</span>
                            </h1>
                        </header>

                        <div className="space-y-12">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((result) => (
                                    <article key={result.id} className="flex flex-col gap-4">
                                        <header>
                                            <h2 className="text-2xl font-semibold text-[#029896] hover:text-[#566E95] hover:underline">
                                                <Link to={result.link}>{result.title}</Link>
                                            </h2>
                                        </header>

                                        {result.image && (
                                            <div className="w-full">
                                                <Link to={result.link}>
                                                    <img
                                                        src={result.image}
                                                        alt={result.title}
                                                        className="w-auto max-w-full h-auto border border-gray-200 p-1"
                                                        style={{ maxHeight: '400px' }}
                                                    />
                                                </Link>
                                            </div>
                                        )}

                                        <div className="text-gray-600 leading-relaxed">
                                            <p>{result.excerpt}</p>
                                        </div>

                                        {result.date && (
                                            <footer className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-2 border-t border-gray-100 pt-2">
                                                <div className="flex items-center gap-1">
                                                    <User size={14} />
                                                    <span className="sr-only">Author</span>
                                                    <span className="text-[#029896] hover:underline cursor-pointer">{result.author}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className="sr-only">Posted on</span>
                                                    <Link to="#" className="text-[#029896] hover:underline">
                                                        <time dateTime={result.date}>{result.date}</time>
                                                    </Link>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Folder size={14} />
                                                    <span className="sr-only">Categories</span>
                                                    <Link to={`/search?category=${encodeURIComponent(result.category || '')}`} className="text-[#029896] hover:underline">{result.category}</Link>
                                                </div>
                                            </footer>
                                        )}
                                    </article>
                                ))
                            ) : (
                                <p className="text-gray-600">No results found.</p>
                            )}
                        </div>

                        {/* Pagination */}
                        {filteredResults.length > 0 && (
                            <nav className="mt-12 flex gap-2" aria-label="Posts navigation">
                                <span aria-current="page" className="px-3 py-2 bg-gray-200 text-gray-600 border border-gray-300">1</span>
                                <a href="#" className="px-3 py-2 bg-white text-[#029896] border border-gray-300 hover:bg-gray-100">2</a>
                                <a href="#" className="px-3 py-2 bg-white text-[#029896] border border-gray-300 hover:bg-gray-100">Next page</a>
                            </nav>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4 space-y-8">
                        {/* Categories Widget */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-2 mb-4">
                                Categories
                            </h2>
                            <ul className="space-y-2">
                                {CATEGORIES.map((cat, idx) => (
                                    <li key={idx} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                                        <Link to={`/search?category=${encodeURIComponent(cat)}`} className="text-[#029896] hover:text-[#566E95] hover:underline text-sm">
                                            {cat}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Archives Widget */}
                        <section>
                            <h2 className="text-lg font-bold text-gray-800 uppercase border-b-2 border-gray-200 pb-2 mb-4">
                                Archives
                            </h2>
                            <ul className="space-y-2">
                                {ARCHIVES.map((arch, idx) => (
                                    <li key={idx} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                                        <Link to={`/search?date=${encodeURIComponent(arch)}`} className="text-[#029896] hover:text-[#566E95] hover:underline text-sm">
                                            {arch}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>

                </div>
            </div>
        </div>
    );
};

export default SearchResults;
