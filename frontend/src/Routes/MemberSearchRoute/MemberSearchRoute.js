import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, TopBar, LabelledInput, SearchTitle } from "../../Components/";

import { useRecoilState } from "recoil";
import MemberListAtom from "../../Recoil/MemberList";

const URL = process.env.REACT_APP_API_URL;

export default function MemberSearchRoute() {
  const [memberListState, setMemberListState] = useRecoilState(MemberListAtom);

  const history = useHistory();

  const [memberPolicyNumber, setMemberPolicyNumber] = useState("");
  const [memberCardNumber, setMemberCardNumber] = useState("");

  function searchForMember() {
    setMemberListState({ ...memberListState, isLoading: true });

    const params = {};
    if (memberPolicyNumber) {
      params.policyNumber = memberPolicyNumber;
    }
    if (memberCardNumber) {
      params.memberCardNumber = memberCardNumber;
    }

    axios
      .get(`${URL}/member/member`, { params })
      .then((res) => {
        const { data } = res;
        setMemberListState({ members: data.member, isLoading: false });
      })
      .catch(function (error) {
        if (error.request.status === 400) {
          setMemberListState({ members: [], isLoading: false });
        }
      });

    history.push("/results");
  }

  function resetSearchInputs() {
    setMemberPolicyNumber("");
    setMemberCardNumber("");
  }

  return (
    <>
      <TopBar title={"Member Search"}></TopBar>
      <div className="p-10 space-y-6 h-full w-full flex flex-col items-center">
        {/*Date picker */}
        <div className="flex flex-col space-y-4 w-4/5 sm:w-[540px]">
          <SearchTitle title="Service Date"></SearchTitle>
          <div className="ml-4 space-y-4">
            <LabelledInput inputType="date"></LabelledInput>
          </div>
        </div>
        {/*Search inputs */}
        <div className="flex flex-col space-y-4 w-4/5 sm:w-[540px]">
          <SearchTitle title="Search Using"></SearchTitle>
          <div className="ml-4 space-y-4">
            <LabelledInput
              title="Policy Number"
              inputType="number"
              inputValue={memberPolicyNumber}
              onChangeMethod={setMemberPolicyNumber}
            ></LabelledInput>
            <LabelledInput
              title="Member Card Number"
              inputType="number"
              inputValue={memberCardNumber}
              onChangeMethod={setMemberCardNumber}
            ></LabelledInput>
          </div>
        </div>
        {/*Buttons */}
        <div className="flex space-x-4 justify-between w-4/5 sm:w-[540px]">
          <Button
            className="w-2/4"
            text={"Search"}
            onClick={searchForMember}
          ></Button>
          <Button
            className="w-2/4"
            text={"Reset"}
            onClick={resetSearchInputs}
          ></Button>
        </div>
      </div>
    </>
  );
}
