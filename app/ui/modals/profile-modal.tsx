"use client";

import useProfileModal from "@/app/hooks/useProfileModal";
import Modal from "./modal";

const ProfileModal = () => {
  const { onClose, isOpen, user } = useProfileModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }  

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
      title="Profile"
      description="Your profile information"
      photo_url={user.photo_url}
    >
      <div>
        <h1 className="text-3xl text-center font-medium mt-4">
          {user.first_name} {user.last_name}
        </h1>

        <h4 className="text-blue-400 text-xl text-center">
          @{user.username}
        </h4>
      </div>
    </Modal>
  );
}
 
export default ProfileModal;