
function DropDownMenu() {
    return (
        <div className="bg-[url(/images/menu.svg)] bg-no-repeat bg-center h-full max-h-full block pl-15 group">
            <nav className="hidden group-hover:block absolute right-0 top-full mt-0 bg-transparent">
                <ul className="bg-white w-33 justify-center text-center">
                    <li className="border-dashed border border-zinc-300 py-3 w-full hover:bg-slate-100"><a>Home</a></li>
                    <li className="border-dashed border border-zinc-300 py-3 w-full hover:bg-slate-100"><a>Menu</a></li>
                    <li className="border-dashed border border-zinc-300 py-3 w-full hover:bg-slate-100"><a>About</a></li>
                    <li className="border-dashed border border-zinc-300 py-3 w-full hover:bg-slate-100"><a>Reserve</a></li>
                    <li className="border-dashed border border-zinc-300 py-3 w-full hover:bg-slate-100"><a>Catering</a></li>
                </ul>
            </nav>
        </div>
    )
}

function Header() {
    return (
        <div className="w-full flex grow-0 border-b-3 justify-between items-center relative"> 
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
            <div className="bg-[url(/images/LandingExample_BGIMG.png)] bg-no-repeat bg-cover w-full flex flex-grow min-h-[45vh] justify-center items-center text-5xl font-bold text-white">
                <a>Casa del Essen</a>
            </div>
            <div className="h-1/4 grid grid-cols-[auto_1fr] gap-4 p-10 ">
                <div className="h-full w-full flex">
                    <img className="p-4 rounded-full" src="/images/CasaDelEssen_Logo_sm.png"/>
                </div>
                <div>
                    <h2 className="font-semibold">About Us</h2> 
                    <br/>
                    <a>Casa del Essen is a restaurant that combines traditional and contemporary elements in its food and atmosphere. The menu reflects influences from different culinary regions, offering dishes that highlight a range of ingredients and preparations. The space is arranged to accommodate both smaller groups and larger gatherings, with a layout designed for open seating as well as more private areas. Textures, colors, and patterns are used throughout the interior to create a consistent design language that connects the dining area with the kitchen and bar.</a>
                </div>
            </div>
            <div className="relative h-auto p-4 ">
                    <a className="relative left-41 font-semibold">Critic Review</a> 
                    <br/>
                    <a className="relative left-41">Casa del Essen was one of the restaurants I visited in the past 5 years. They made me food and I ate it. If I was having dinner at Casa del Essen I would order food again! 1 out of 1 stars!</a>
                    <br/>
                    <a className="relative font-extralight text-sm text-slate-600 absolute left-64">-Anonymous</a>
            </div>
            <div className="bg-slate-200">
                <ul className="grid grid-cols-2 gap-4 p-10 text-slate-600 justify-items-center h-[20vh]">
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
