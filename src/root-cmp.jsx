import { Route, Routes } from "react-router-dom";
import { SideBar } from "./cmps/side-bar";
import { Schedule } from "./views/schedule";
import { Sessions } from "./views/sessions";
import { RoomList } from "./views/room-list";
import { UsersList } from "./views/users-list";
import { StudyGroups } from "./views/study-groups";
import { DeviceList } from "./views/device-list";
import { Settings } from "./views/settings";
import { Archive } from "./views/archive";

export default function RootCmp() {
  return (
    <div className="App">
      <SideBar />
      <main className='main-container'>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/rooms-list" element={<RoomList />} />
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/study-groups" element={<StudyGroups />} />
          <Route path="/device-list" element={<DeviceList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/archive" element={<Archive />} />
        </Routes>
      </main>
    </div>
  );
}

