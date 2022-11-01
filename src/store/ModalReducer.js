const defaultState = {
  modalState: {
    isOpen: false,
    modalData: {},
  },
}

const OPEN_MODAL = "OPEN_MODAL"
const CLOSE_MODAL = "CLOSE_MODAL"

export const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalState: { isOpen: true, modalData: action.payload },
      }
    case CLOSE_MODAL:
      return {
        ...state,
        modalState: { isOpen: false, modalData: {} },
      }

    default:
      return state
  }
}

export const openModalAction = (payload) => ({ type: OPEN_MODAL, payload })
export const closeModalAction = (payload) => ({ type: CLOSE_MODAL, payload })
