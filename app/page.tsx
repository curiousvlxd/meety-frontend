"use client";

import useCreateModal from "./hooks/useCreateModal";
import useInvitationsModal from "./hooks/useInvitationsModal";
import useMeetingsModal from "./hooks/useMeetingsModal";
import Header from "./ui/header/header";
import InvitationsModal from "./ui/modals/invitations-modal";
import MeetingsModal from "./ui/modals/meetings-modal";
import ProfileModal from "./ui/modals/profile-modal";

export default function Home() {
  const meetingsModal = useMeetingsModal();
  const invitationsModal = useInvitationsModal();
  const createMeeting = useCreateModal();

  return (
    <main className="
      w-full
      min-h-[100vh]
      bg-background
      p-[30px]
      lg:py-[100px]
      lg:px-[100px]
    ">
      
      <Header />

      <div
        className="
          w-full
          flex
          justify-between
          items-center
          flex-col
          mt-4
        "
      >
        <div
          className="flex w-full mt-8"
        >
          <div className="
            w-full
            gap-[60px]
            grid
            sm:grid-cols-2
            grid-cols-1
          ">

            <div
              onClick={() => invitationsModal.onOpen()}
            >

              <h4
                className="uppercase font-medium"
              >
                invitations
              </h4>
              <div
                className="
                  bg-white
                  rounded-md
                  p-[24px]
                  flex
                  items-center
                  cursor-pointer
                  hover:opacity-[.7]
                "
              >
                <h4
                  className="p-10 w-[20px] h-[20px] rounded-full bg-red-100 flex items-center justify-center text-2xl lg:text-4xl"
                >
                  📑
                </h4>
                <div className="ml-2">
                  <h1 className="font-medium text-xl lg:text-2xl">
                    History
                  </h1>
                  <h5 className="opacity-[.7]">
                    Check all the invitations
                  </h5>
                </div>
              </div>
            </div>

            <div
              onClick={() => meetingsModal.onOpen()}
            >

              <h4
                className="uppercase font-medium"
              >
                meetings
              </h4>
              <div
                className="
                  bg-white
                  rounded-md
                  p-[24px]
                  flex
                  items-center
                  cursor-pointer
                  hover:opacity-[.7]
                "
              >
                <h4
                  className="p-10 w-[20px] h-[20px] rounded-full bg-green-100 flex items-center justify-center text-2xl lg:text-4xl"
                >
                  🗒️
                </h4>
                <div className="ml-2">
                  <h1 className="font-medium text-xl lg:text-2xl">
                    History
                  </h1>
                  <h5 className="opacity-[.7]">
                    Check all the meetings
                  </h5>
                </div>
              </div>
            </div>

            <div
              onClick={() => createMeeting.onOpen()}
            >

              <h4
                className="uppercase font-medium"
              >
                meeting
              </h4>
              <div
                className="
                  bg-white
                  rounded-md
                  p-[24px]
                  flex
                  items-center
                  cursor-pointer
                  hover:opacity-[.7]
                "
              >
                <h4
                  className="p-10 w-[20px] h-[20px] rounded-full bg-purple-100 flex items-center justify-center text-2xl lg:text-4xl"
                >
                  ➕
                </h4>
                <div className="ml-2">
                  <h1 className="font-medium text-xl">
                    New meeting
                  </h1>
                  <h5 className="opacity-[.7]">
                    Schedule a meeting
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="
          w-full min-h-[70vh]
          flex
          items-center
          justify-center
          flex-col
          rounded-md
          mt-[24px]
        ">
        </div>
      </div>
      <ProfileModal />
      <MeetingsModal />
      <InvitationsModal />
    </main>
  );
}
