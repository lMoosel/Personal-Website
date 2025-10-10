import fs from "fs/promises"
import { ClientAnalyticsWrapper } from '../../components/cookies';

const DB_PATH = "./data/WebsiteStats.json"

export async function getData() {
    const raw = await fs.readFile(DB_PATH, "utf-8")
    let data = JSON.parse(raw)

    return data
}


export default async function AnalyticsPage() {
    const data = await getData();

    return (
        <div>
            <div>
                <div>{data.pageViews} OF PAGE VIEWS</div>
                <div>Views by Device:
                    <ol>
                        <li>Desktop: {data.viewsByDevice.Desktop}</li>
                        <li>Mobile: {data.viewsByDevice.Mobile}</li>
                        <li>Tablet: {data.viewsByDevice.Tablet}</li>
                    </ol>
                </div>
                <div>Views by Location:
                    <ol>
                        <li>Country 1: {data.viewsByLocation.USA}</li>
                        <li>Country 2: {data.viewsByLocation.Canada}</li>
                        <li>Country 3: {data.viewsByLocation.Other}</li>
                    </ol>
                </div>
                <div>Average Time on Site: {data.averageTimeOnSite}</div>
            </div>
            <ClientAnalyticsWrapper {...data}/>
        </div>
    )
}