import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");
  const open = setOpenName;
  const close = () => setOpenName("");
  return (
    <ModalContext.Provider
      value={{
        open,
        openName,
        close,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function OpenModal({ children, opens: OpenModalName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(OpenModalName) });
}
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  if (name !== openName) return null;

  return createPortal(
    <main className="bg-black/50 fixed inset-0 flex m-auto">
      <div className="bg-white w-screen h-[110px] flex text-black">
        <div className="flex justify-between w-full items-center px-6 ">
          <button onClick={() => close()}>
            <img src="/icon-close.svg" />
          </button>
          {cloneElement(children)}
        </div>
      </div>
    </main>,
    document.body
  );
}
Modal.Window = Window;
Modal.OpenModal = OpenModal;

export default Modal;
