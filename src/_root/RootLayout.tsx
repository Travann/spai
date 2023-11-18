import Bottombar from "@/components/shared/Bottombar";
import LeftSiderbar from "@/components/shared/LeftSiderbar";
import RightSiderbar from "@/components/shared/RightSiderbar";
import Topbar from "@/components/shared/Topbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSiderbar />
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <section className="hidden lg:block">
        <RightSiderbar />
      </section>
      <Bottombar />
    </div>
  );
};

export default RootLayout;
