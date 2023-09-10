import {
  useDeleteDepartmentsMutation,
  useGetDepartmentsQuery,
} from "../redux/features/department.service";
import UpdateDepartment from "./UpdateDepartment";

const AllDepartment = () => {
  const { data, isError, isSuccess, isLoading } = useGetDepartmentsQuery();
  const fetchDepartments = useGetDepartmentsQuery();
  const [deleteDepartments] = useDeleteDepartmentsMutation();
  const departments = data && data[0].Data;

  const handledeleteDepartments = (id) => {
    deleteDepartments(id);
    fetchDepartments.refetch();
  };

  if (isSuccess) {
    return (
      <>
        <div className=" min-h-screen pt-20 bg-teal">
          <div className="overflow-x-auto w-11/12 mx-auto bg-white">
            <table className="table border">
              {/* head */}
              <thead>
                <tr className="font-semibold">
                  <th>Department Name </th>
                  <th>Department Details</th>
                  <th>Created On</th>
                  <th>Department Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {departments?.map((i, index) => (
                  <tr key={index} className="mb-3 ">
                    <td className="font-semibold">{i.DepartmentName}</td>
                    <td>
                      <p className="font-semibold">{i.DepartmentDetails}</p>
                    </td>
                    <td>
                      <p className="text-sm">{i.createdAt}</p>
                    </td>
                    <td>{i.DepartmentStatus ? "True" : "False"}</td>
                    <td>
                      <button
                        className="btn bg-blue-500 mr-5 text-white"
                        onClick={() =>
                          document
                            .getElementById(`my_modal_${i._id}`)
                            .showModal()
                        }
                      >
                        Update
                      </button>
                      {/* Update Modal */}

                      <dialog
                        key={i._id}
                        id={`my_modal_${i._id}`}
                        className="modal"
                      >
                        <UpdateDepartment id={i._id} DepartmentName={i.DepartmentName} DepartmentDetails={i.DepartmentDetails} createdAt={i.createdAt}></UpdateDepartment>
                      </dialog>

                      <button
                        onClick={() => handledeleteDepartments(i._id)}
                        className="btn btn-error text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  } else if (isLoading) {
    return <p>Data is loading...</p>;
  } else if (isError) {
    return <p>Error..</p>;
  }
};

export default AllDepartment;
