function Alert({ message, type }) {
  return (
    <div
      className={`p-4 mb-4 text-white rounded-lg w-full ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;