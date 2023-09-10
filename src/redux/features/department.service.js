import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const departmentService = createApi({
    reducerPath: "Department",
    tagTypes: ["Department"],
    baseQuery: fetchBaseQuery({
        baseUrl: "https://employeeleave.devsujon.com/api/v1",
        prepareHeaders: (headers) => {
            // Add the bearer token to the Authorization header
            headers.set('Authorization', `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNjc2M2ZjYTY1MWJjNTk4Mzc3MTFkMCIsImlhdCI6MTY5NDI0OTgzMSwiZXhwIjoxNjk0ODU0NjMxfQ.wx9GzfCsqwwdABj3d359D0Ag0aU8I4eroBE3q_vwN3k`);
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getDepartments: builder.query({
            query: () => '/Department/DepartmentList/1/500/0',
            providesTags: ["Department"],
        }),
        postDepartments: builder.mutation({
            query: (departmentInfo) => ({
                headers: {
                    "Content-type": 'application/json'
                },
                url: "/Department/DepartmentCreate",
                method: "POST",
                body: departmentInfo,
            }),
            invalidatesTags: ["Department"],
        }),
        deleteDepartments: builder.mutation({
            query: (id) => ({
                url: `/Department/DepartmentDelete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Department"],
        }),
        updateDepartments: builder.mutation({
            query: ({ id, postBody }) => ({
                url: `/Department/DepartmentUpdate/${id}`,
                method: "PATCH",
                body: postBody,
            }),
            // invalidatesTags: ["Department"],
            async onQueryStarted({ id, postBody }, { dispatch, queryFulfilled }) {
                try {
                    const {data: updateDepartments} = await queryFulfilled
                    const patchResult = dispatch(
                        departmentService.util.updateQueryData("getDepartments", id, (draft) => {
                            Object.assign(draft, updateDepartments)
                        })
                    )
                }
                catch {}
            }

        })
    })
})

export const { useGetDepartmentsQuery, usePostDepartmentsMutation, useDeleteDepartmentsMutation, useUpdateDepartmentsMutation } = departmentService;
export default departmentService
