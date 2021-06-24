import User from '../User/User';

function Users({ data, setData, searchTerm }) {
  return (
    <div>
      <User data={data} setData={setData} searchTerm={searchTerm} />
    </div>
  );
}

export default Users;
