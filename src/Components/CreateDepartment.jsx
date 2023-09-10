import { useForm } from "react-hook-form";
import { usePostDepartmentsMutation } from "../redux/features/department.service";
import { useNavigate } from "react-router-dom";

const CreateDepartment = () => {
  const navigate = useNavigate()
  const [postDepartments] = usePostDepartmentsMutation()
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (e) => {
    postDepartments({...e, DepartmentShortName: e.DepartmentName, DepartmentStatus: false})
    reset()
    navigate('/')
  };
  return (
    <div className="hero">
      <div className="hero-content mt-12">
        <div className="rounded-md flex-shrink-0 shadow-2xl lg:w-[700px] bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Department Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Department Name"
                    //   value={user?.displayName}
                    {...register("DepartmentName")}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Department Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Department Details"
                    //   value={user?.email}
                    {...register("DepartmentDetails")}
                    required
                    className="input input-bordered"
                  />
                </div>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-blue-500 text-white"
                  value="Add a Department"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
