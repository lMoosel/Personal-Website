
function DropDownMenu() {
    return (
        <nav className="">
            <ul>
                {/*
                <li><a>Home</a></li>
                <li><a>Menu</a></li>
                <li><a>About</a></li>
                <li><a>Reserve</a></li>
                <li><a>Catering</a></li
                */}
                <li><a>TODO</a></li>
            </ul>
        </nav>
    )
}

function Header() {
    return (
        <div className="w-full flex border-b-3 justify-between items-center"> 
            <div id="logo-container">
                <img src="/images/CasaDelEssen_Logo.png" className="w-1/16"/>
            </div>
            <DropDownMenu></DropDownMenu> 
        </div>
    )
}

export default async function HomePage() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header></Header>
            <div className="bg-[url(/images/LandingExample_BGIMG.png)] bg-no-repeat bg-cover w-full flex flex-grow justify-center items-center text-5xl font-bold text-white">
                <a>Casa del Essen</a>
            </div>
            <div className="h-1/4 grid grid-cols-[auto_1fr] gap-4 p-10">
                <div className="h-full w-full flex">
                    <img className="p-4 rounded-full" src="/images/CasaDelEssen_Logo_sm.png"/>
                </div>
                <div>
                    <h2>About Us</h2> 
                    <br/>
                    <a>Casa del Essen is a restaurant that combines traditional and contemporary elements in its food and atmosphere. The menu reflects influences from different culinary regions, offering dishes that highlight a range of ingredients and preparations. The space is arranged to accommodate both smaller groups and larger gatherings, with a layout designed for open seating as well as more private areas. Textures, colors, and patterns are used throughout the interior to create a consistent design language that connects the dining area with the kitchen and bar.</a>
                </div>
            </div>
            <div className="bg-slate-200">
                <ul className="grid grid-cols-2 gap-4 p-10 text-slate-600 justify-items-center">
                    <li className="font-thin text-center"><a>About Us</a></li>
                    <li className="font-thin text-center"><a>Menu</a></li>
                    <li className="font-thin text-center"><a>Careers</a></li>
                    <li className="font-thin text-center"><a>Contact</a></li>
                    <li className="font-thin text-center"><a>Location</a></li>
                    <li className="font-thin text-center"><a>Reviews</a></li>
                </ul>
            </div>
        </div>
    )
}

export const getConfig = async () => {
    return {
        render: 'static',   
    } as const;
};
