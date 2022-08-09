import React from "react";
import { Link } from "react-router-dom";
import { TopBar, MenuText } from "../../Components";

export default function MenuRoute() {
  return (
    <>
      <TopBar title={"Menu"} isMenu={true}></TopBar>
      <div className="p-10">
        <div className="flex flex-col space-y-4">
          <Link className="w-max rounded-md overflow-hidden" to="/search">
            <MenuText text="Member Search"></MenuText>
          </Link>
          <Link className="w-max rounded-md overflow-hidden" to="/results">
            <MenuText text="Search Results"></MenuText>
          </Link>
        </div>
      </div>
    </>
  );
}
