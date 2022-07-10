import { Routes, Route } from "react-router-dom";
import { Login } from "../views/Login";
import { NewFeed } from "../views/NewFeed";
import { NotFound } from "../views/NotFound";
import { CreatePost } from "../views/CreatePost";
import { InforLand } from "../views/InforLand";
import { Contact } from "../views/Contact";
import { ManagerMember } from "../views/MangerMember";
import { ManagerPost } from "../views/ManagerPost";
import { HomePage } from "../views/HomePage";
import RequireAuth from "./requireAuth";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<NewFeed />} />
      <Route path="/thue-nha-dat" element={<NewFeed />} />
      <Route path="/:id" element={<InforLand />} />
      <Route path="/mua-nha-dat" element={<NewFeed />} />
      <Route path="/thue-phong-tro" element={<NewFeed />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Login />} />

      {/* auth routes */}
      <Route
        path="/manager/posts"
        element={
          <RequireAuth>
            <ManagerPost />
          </RequireAuth>
        }
      />
      <Route
        path="/manager/members"
        element={
          <RequireAuth>
            <ManagerMember />
          </RequireAuth>
        }
      />
      <Route
        path="/manager/create-post"
        element={
          <RequireAuth>
            <CreatePost />
          </RequireAuth>
        }
      />
      <Route
        path="/manager/add-member"
        element={<Login setShowRegister={true} />}
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
