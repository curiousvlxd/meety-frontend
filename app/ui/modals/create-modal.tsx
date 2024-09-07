import useCreateModal from "@/app/hooks/useCreateModal";
import Modal from "./modal";



const CreateModal = () => {
  const { onClose, isOpen } = useCreateModal();

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
      description="Your meetings"
    >
      <div>
        meetings
      </div>
    </Modal>
  );
}
 
export default CreateModal;