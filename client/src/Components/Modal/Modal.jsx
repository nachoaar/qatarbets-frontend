const Modal = ({ isOpen, closeModal, children }) => {
  const handleModalContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      onClick={closeModal}
      className={`fixed z-50 inset-0 w-full h-screen p-5 bg-black bg-opacity-50 justify-center items-center ${
        isOpen ? "flex" : "hidden"
      } `}
    >
      <div
        onClick={handleModalContainerClick}
        className="relative bg-rojo p-4 sm:p-8 h-full w-full sm:w-2/5 overflow-auto flex flex-col gap-4"
      >
        <button
          onClick={closeModal}
          className="bg-white text-black p-2 rounded absolute top-4 right-4"
        >
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
