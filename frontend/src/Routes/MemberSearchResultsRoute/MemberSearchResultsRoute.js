import React from "react";
import { useRecoilValue } from "recoil";

import { MemberList, Loading, TopBar } from "../../Components";

import MemberListAtom from "../../Recoil/MemberList/";

export default function MemberSearchResultsRoute() {
  const { members, isLoading } = useRecoilValue(MemberListAtom);

  return (
    <>
      <TopBar title={"Search Results"}></TopBar>
      <div className="p-10 flex justify-center">
        {isLoading ? (
          <Loading />
        ) : members.length === 0 ? (
          <span className="text-2xl font-medium text-white">
            No Search Results...
          </span>
        ) : (
          <MemberList members={members} />
        )}
      </div>
    </>
  );
}
