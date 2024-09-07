import useMeetingsModal from "@/app/hooks/useMeetingsModal";
import Modal from "./modal";
import { getMeetings } from "@/app/lib/data";

const MeetingsModal = async () => {
  const { onClose, isOpen } = useMeetingsModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }  

  const meetings = await getMeetings();

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="Meetings"
      description="Your meetings"
    >
      <div>
        {meetings.map((meeting: any) => {
          return (
            <div key={meeting.id} className="flex flex-col items-center">
              <h1 className="text-3xl text-center font-medium mt-4">
                {meeting.title}
              </h1>
              <h4 className="text-blue-400 text-xl text-center">
                {meeting.description}
              </h4>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
 
export default MeetingsModal;