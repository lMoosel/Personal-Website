import { ClientAnalyticsWrapper } from '../../components/cookies';

export default async function AnalyticsPage() {
    return (
        <div>
            <div>
                <div># OF PAGE VIEWS</div>
                <div>Views by Device:
                    <ol>
                        <li>Desktop: #</li>
                        <li>Mobile: #</li>
                        <li>Tablet: #</li>
                    </ol>
                </div>
                <div>Views by Location:
                    <ol>
                        <li>Country 1: #</li>
                        <li>Country 2: #</li>
                        <li>Country 3: #</li>
                    </ol>
                </div>
                <div>Average Time on Site: ##:##</div>
            </div>
            <ClientAnalyticsWrapper/>
        </div>
    )
}