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
        className="relative bg-gris p-4 h-full overflow-auto "
      >
        <button
          onClick={closeModal}
          className="bg-slate-400 text-black p-2 rounded absolute top-4 right-4"
        >
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
