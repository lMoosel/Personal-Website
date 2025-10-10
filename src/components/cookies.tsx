'use client';

import { statsObj } from '@/types';
import { CookiesProvider } from 'react-cookie';
import { useCookies } from "react-cookie";
import { updateRecord } from 'data/WebsiteStats';

interface CookieValues {
    hasConsented: boolean;
    hasVisited: boolean;
    location?: string;
    deviceType?: string;
    sessionStart?: number
}

export const ClientAnalyticsWrapper = (data:statsObj) => {
    return(
        <CookiesProvider>
            <ClientAnalytics {...data}/>
        </CookiesProvider>
    )
}
const ClientAnalytics = (data:statsObj) => {
    const [cookies, setCookie] = useCookies<keyof CookieValues>(['hasConsented', 'hasVisited', 'location', 'deviceType', 'sessionStart']);

    const getUserData = () => {
        let userAgent = window.navigator.userAgent
        let device = "";
        let now = new Date(Date.now())

        if (/Mobi|Android/i.test(userAgent)) {
            device = "Mobile";
            data["viewsByDevice"].Mobile++
            updateRecord("viewsByDevice", data["viewsByDevice"])
        } else if (/Tablet|iPad/i.test(userAgent)) {
            device = "Tablet";
            data["viewsByDevice"].Tablet++
            updateRecord("viewsByDevice", data["viewsByDevice"])
        } else {
            device = "Desktop";
            data["viewsByDevice"].Desktop++
            updateRecord("viewsByDevice", data["viewsByDevice"])
        }

        setCookie('location', 'TODO: Get location data', { path: '/' });
        setCookie('deviceType', device, { path: '/' });
        setCookie('sessionStart', `${now.getHours()}:${now.getMinutes()} on ${now.getDate()}/${now.getMonth()}/${now.getFullYear()}`, { path: '/' });
    }

    if(!cookies.hasVisited) {
        console.log("New Visit Detected")
        updateRecord("pageViews", data["pageViews"]+1)
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