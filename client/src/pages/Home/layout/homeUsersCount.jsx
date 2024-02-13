import useUsersCount from "../hooks/UsersCount.hook";

const UsersCount = () => {
  const { usersCount, reservationsCount } = useUsersCount();
  return (
    <>
      <div className="flex flex-col capitalize text-right text-6xl gap-12 tracking-wider">
        <span className="font-montserrat font-bold">
          {usersCount}
          <br />
          <span className="font-raleway font-thin text-5xl">
            registered customers
          </span>
        </span>
        <span className="font-montserrat font-bold">
          {reservationsCount}
          <br />
          <span className="font-raleway font-thin text-5xl">
            reservations done
          </span>
        </span>
      </div>
    </>
  );
};

export default UsersCount;
