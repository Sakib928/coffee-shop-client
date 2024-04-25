import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photourl } =
    coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;

    const updatedCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photourl,
    };
    console.log(updatedCoffee);

    // send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  console.log(coffee);
  return (
    <div>
      <div className="p-24">
        <h1 className="text-3xl font-extrabold mb-8">
          Update for Coffee : {name}
        </h1>
        <form onSubmit={handleUpdate}>
          {/* single row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Coffee Name :
                <input
                  defaultValue={name}
                  type="text"
                  name="name"
                  className="grow"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Available Quantity :
                <input
                  defaultValue={quantity}
                  type="text"
                  name="quantity"
                  className="grow"
                />
              </label>
            </div>
          </div>
          {/* single row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Supplier :
                <input
                  defaultValue={supplier}
                  type="text"
                  name="supplier"
                  className="grow"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Taste :
                <input
                  defaultValue={taste}
                  type="text"
                  name="taste"
                  className="grow"
                />
              </label>
            </div>
          </div>
          {/* single row */}
          <div className="md:flex gap-4 mb-8">
            <div className="form-control md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Category :
                <input
                  defaultValue={category}
                  type="text"
                  name="category"
                  className="grow"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="input input-bordered flex items-center gap-2">
                Details :
                <input
                  defaultValue={details}
                  type="text"
                  name="details"
                  className="grow"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full">
            <label className="input input-bordered flex items-center gap-2">
              Photo URL :
              <input
                defaultValue={photourl}
                type="text"
                name="photourl"
                className="grow"
              />
            </label>
          </div>
          <input
            type="submit"
            value="UPDATE COFFEE"
            className="btn mt-4 btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
