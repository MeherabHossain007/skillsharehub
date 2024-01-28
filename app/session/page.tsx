"use client";
import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import Link from "next/link";

export default function Session() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "64a82deb3d63491fb4d57a401beb4096",
    channel: "test",
    token: null, // enter your channel token as a string
  }; 

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      {/* <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} /> */}
      <Link href={"https://meet.google.com/ygu-qtgz-zog"}>Join Now</Link>
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}
