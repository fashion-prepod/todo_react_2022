export const User = ({ firstName, lastName }) => {
  return (
    <div style={{ border: "2px solid salmon" }}>
      <div>{firstName}</div>
      <div>{lastName}</div>
    </div>
  );
};
