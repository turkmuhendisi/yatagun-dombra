import { Analytics } from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react";
import MusicLandingPage from "./pages/music-page/MusicLandingPage";

function App() {
    return (
        <>
            <MusicLandingPage />
            <Analytics /> {/* Vercel Analytics in here */}
            <SpeedInsights /> {/* Vercel Speed Insights in here */}
        </>
    );
}

export default App;
