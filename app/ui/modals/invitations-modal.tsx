import useInvitationsModal from "@/app/hooks/useInvitationsModal";
import Modal from "./modal";

const InvitationsModal = () => {
  const { onClose, isOpen } = useInvitationsModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }  

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="Meetings"
      description="Your invitations"
    >
      <div>
        invitations
      </div>
    </Modal>
  );
}
 
export default InvitationsModal;