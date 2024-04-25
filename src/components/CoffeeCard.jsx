import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, photourl } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
        console.log("delete confirmed");
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photourl} alt="Album" />
        </figure>
        <div className="card-body flex">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className=" flex flex-col justify-center items-end mb-8">
            <button className="btn hover:bg-purple-700 text-white rounded-b-none w-20">
              View
            </button>
            <Link to={`/update-coffee/${_id}`}>
              <button className="btn hover:bg-purple-700 text-white rounded-none w-20">
                Edit
              </button>
            </Link>
            <button
              onClick={() => {
                handleDelete(_id);
              }}
              className="btn hover:bg-purple-700 text-white rounded-t-none w-20"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
