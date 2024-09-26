import FieldHolder from "./field_holder";

export default function UserInfo({ user, handleUserChange }) {
  const headerTitle = `Contact Information`;

  return (
    <div className="w-full px-5 py-5 rounded-md border-[1px] border-slate-200 flex flex-col items-center justify-center gap-5 shadow-sm">
      <Header headerTitle={headerTitle} />
      <div className="w-full flex flex-col items-start justify-center gap-4">
        <FieldHolder
          labelTitle="Name"
          labelFor="username"
          value={user.username}
          type={"text"}
          placeholder={"Name"}
          handleChange={handleUserChange}
        />
        <FieldHolder
          labelTitle="Email"
          labelFor="email"
          value={user.email}
          type={"email"}
          placeholder={"email"}
          handleChange={handleUserChange}
        />
        <FieldHolder
          labelTitle="Phone number"
          labelFor="phoneNumber"
          value={user.phoneNumber}
          type={"number"}
          placeholder={"In case we need to reach you"}
          handleChange={handleUserChange}
        />
      </div>
    </div>
  );
}

export function Header({ headerTitle }) {
  return (
    <div className="w-full text-left">
      <h1 className="text-[14px] text-black font-semibold lg:text-[13px]">
        {headerTitle}
      </h1>
    </div>
  );
}
