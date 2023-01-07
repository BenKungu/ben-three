import { Route, Routes, BrowserRouter } from "react-router-dom";
import AllMeetups from "./componenents/apages/AllMeetups";
import NewMeetup from "./componenents/apages/NewMeetup";
import Favorites from "./componenents/apages/Favorites";
import Layout from "./componenents/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<AllMeetups />} />

          <Route path="/new-meetup" element={<NewMeetup />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
