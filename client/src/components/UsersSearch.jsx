
// interface InputProps {
//   placeholder?: string;
//   type?: string;
//   children?: ReactNode;
// }
const UsersSearch = () => {
  return (
    <>
      <p className="font-mono my-2 text-xl mx-12">Users:</p>
      <input placeholder="Search users here..." className="mx-12 p-2 mb-3 rounded" />
    </>
  );
};

export default UsersSearch;
