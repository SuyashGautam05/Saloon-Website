const Email = () => {
  const sendEmail = () => {};
  return (
    <form onSubmit={sendEmail()}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
    </form>
  );
};

export default Email;
