function UsersList({ users = [] }) {
   if (!users.length) {
      return <div>No users were founda</div>;
   }

   return (
      <ul>
         {users.map(({ name }) => (
            <li key={name}>{name}</li>
         ))}
      </ul>
   );
}

export default UsersList;
