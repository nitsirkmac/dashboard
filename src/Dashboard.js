import Sidebar from "./Sidebar"
import Reviews from "./Reviews"
import AvgRating from "./AvgRating"
import SentAnalysis from "./SentAnalysis"
import WebVisitors from "./WebVisitors"

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Reviews />
            <AvgRating />
            <SentAnalysis />
            <WebVisitors />
        </div>
    )
}

export default Dashboard