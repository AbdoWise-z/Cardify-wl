import {create} from "zustand";


export enum ModalType {
  VERIFY_ACCOUNT_MODAL,

  //TODO: add other types
}


interface ModelData {
  email?: string;
}

interface ModalStore {
  type: ModalType | null;
  data: ModelData;
  isOpen: boolean;
  open: (type : ModalType, data?: ModelData) => void;
  close: () => void;
}

export const useModal = create<ModalStore>(
  (set) => ({
    type: null,
    isOpen: false,
    data: {},
    open(type, data = {}) {
      set({
        isOpen: true, type , data
      });
    },
    close() {
      set({
        isOpen: false, type: null, data: {}
      });
    },
  })
);