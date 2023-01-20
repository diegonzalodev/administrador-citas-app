function Error({ mensaje }) {
  return (
    <div className="bg-red-800 mb-5 p-3 text-center text-white uppercase font-bold">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
