import UserRow from "./user-row";

function UsersTable({ users = [] }) {
   if (!users.length) {
      return <div>No users were founda</div>;
   }

   return (
      <table className="table">
         <thead>
            <tr>
               <th>#</th>
               <th>Name</th>
               <th>Username</th>
               <th>Mail</th>
               <th>Address</th>
               <th>Company</th>
            </tr>
         </thead>
         <tbody>
            {users.map((user, index) => (
               <UserRow key={user.id} user={user} index={index} />
            ))}
         </tbody>
      </table>
   );
}

export default UsersTable;
