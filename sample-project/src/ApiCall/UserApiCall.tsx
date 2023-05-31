import useUserApi from "./Hook/useUserApi";

const UserApiCall = () => {
  const { users, error, isLoading } = useUserApi();

  return (
    <>
      <div>
        <h1>API CALL</h1>
        {isLoading && <div className="spiner-border"></div>}
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Company ID</th>
                  <th>Company Name</th>
                  <th>User Type</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.userName}</td>
                    <td>{item.companyID}</td>
                    <td>{item.companyName}</td>
                    <td>{item.userType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};
export default UserApiCall;
