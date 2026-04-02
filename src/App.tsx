import { Analytics } from "@vercel/analytics/react"
import {SpeedInsights} from "@vercel/speed-insights/react";
import MusicLandingPage from "./pages/music-page/MusicLandingPage";

function App() {
    const isProduction = import.meta.env.PROD;

    return (
        <>
            <MusicLandingPage />
            {isProduction ? <Analytics /> : null}
            {isProduction ? <SpeedInsights /> : null}
        </>
    );
}

export default App;
