import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateDepartmentsMutation } from "../redux/features/department.service";

const UpdateDepartment = ({ id, DepartmentName, DepartmentDetails}) => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {id, DepartmentName, DepartmentDetails}
  });
  const [handleClose, setHandleClose] = useState(false)

  const [updateDepartments, {isSuccess}] = useUpdateDepartmentsMutation()

  const onSubmit = (data) => {
    const {id, ...postBody} = data

    updateDepartments({id, postBody})
    reset()
    setHandleClose(true)
  };

  return (
    <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-body">
          <div className="gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Department Name</span>
              </label>
              <input
                type="text"
                defaultValue={DepartmentName}
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
                defaultValue={DepartmentDetails}
                {...register("DepartmentDetails")}
                required
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
        <div className="modal-action">
          <input
            type="submit"
            className="btn bg-blue-500 text-white"
            value="Add a Department"
          />
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Cancel</button>
          </form>
        </div>
      </form>
    </div>
  );
};

export default UpdateDepartment;
