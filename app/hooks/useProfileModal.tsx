import { create } from "zustand";

interface ITelegramUser {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  photo_url: string;
  auth_date: number;
  hash: string;
}

interface ProfileModalStore {
  isOpen: boolean;
  onOpen: (user: ITelegramUser) => void;
  onClose: () => void;
  user: ITelegramUser;
}

const useProfileModal = create<ProfileModalStore>((set) => ({
  isOpen: false,
  onOpen: (user: ITelegramUser) => set({ isOpen: true, user: user }),
  onClose: () => set({ isOpen: false }),
  user: {} as ITelegramUser
}));

export default useProfileModal;