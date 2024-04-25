import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photourl = form.photourl.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photourl,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Added coffee successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="p-24">
      <h1 className="text-3xl font-extrabold text-center mb-8">Add a coffee</h1>
      <form onSubmit={handleAddCoffee}>
        {/* single row */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Coffee Name :
              <input type="text" name="name" className="grow" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Available Quantity :
              <input type="text" name="quantity" className="grow" />
            </label>
          </div>
        </div>
        {/* single row */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Supplier :
              <input type="text" name="supplier" className="grow" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Taste :
              <input type="text" name="taste" className="grow" />
            </label>
          </div>
        </div>
        {/* single row */}
        <div className="md:flex gap-4 mb-8">
          <div className="form-control md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Category :
              <input type="text" name="category" className="grow" />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="input input-bordered flex items-center gap-2">
              Details :
              <input type="text" name="details" className="grow" />
            </label>
          </div>
        </div>
        <div className="form-control w-full">
          <label className="input input-bordered flex items-center gap-2">
            Photo URL :
            <input type="text" name="photourl" className="grow" />
          </label>
        </div>
        <input
          type="submit"
          value="ADD COFFEE"
          className="btn mt-4 btn-block"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
