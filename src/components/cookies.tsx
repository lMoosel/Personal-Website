'use client';

import { CookiesProvider } from 'react-cookie';
import { useCookies } from "react-cookie";

interface CookieValues {
    hasConsented: boolean;
    hasVisited: boolean;
    location?: string;
    deviceType?: string;
    sessionStart?: number
}




export const ClientAnalyticsWrapper = () => {
    return(
        <CookiesProvider>
            <ClientAnalytics/>
        </CookiesProvider>
    )
}
const ClientAnalytics = () => {
    const [cookies, setCookie] = useCookies<keyof CookieValues>(['hasConsented', 'hasVisited', 'location', 'deviceType', 'sessionStart']);

    const getUserData = () => {
        let userAgent = window.navigator.userAgent
        let device = "";

        if (/Mobi|Android/i.test(userAgent)) {
            device = "Mobile";
        } else if (/Tablet|iPad/i.test(userAgent)) {
            device = "Tablet";
        } else {
            device = "Desktop";
    }
        setCookie('location', 'TODO: Get location data', { path: '/' });
        setCookie('deviceType', device, { path: '/' });
        setCookie('sessionStart', Date.now(), { path: '/' });
    }

    return (
            <div>
                {!cookies.hasConsented && !cookies.hasVisited &&
                <div>
                    <a>This website uses cookies to enhance the user experience.</a>
                    <div className="flex space-x-4">
                        <button className='border-1 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 hover:outline-2' onClick={() => 
                            {
                                setCookie('hasConsented', true, { path: '/' });
                                setCookie('hasVisited', true, { path: '/' });
                                getUserData(); 
                            }}>
                            Accept
                        </button>
                        <button className='border-1 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 hover:outline-2' onClick={() => 
                            {setCookie('hasConsented', false, { path: '/' });
                            setCookie('hasVisited', true, { path: '/' });
                            }}>
                            Decline
                        </button>
                    </div>
                </div>
                }
                {cookies.hasConsented && 
                <div>
                    {cookies.hasVisited ? <a>Welcome Back!</a> : <a>Welcome New Visitor!</a>}
                    <div><a>We see you are from: {cookies.location}</a></div>
                    <div><a>We see you are using a: {cookies.deviceType}</a></div>
                    <div><a>You have been on this site since: {cookies.sessionStart}</a></div>
                    <button className='border-1 p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 hover:outline-2' onClick={() => getUserData()}>Refresh Cookies</button>
                </div>
                }
                
            </div>
    )
}