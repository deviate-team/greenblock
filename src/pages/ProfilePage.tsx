import { IUserProfile } from "@/interfaces/user";
import { userService } from "@/services/user.services";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [user, setUser] = useState<IUserProfile | null>(null);

  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const response = await userService.getUserProfile();
      setUser(response.data);
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, [])

  const handleSignOut = async () => {
    try {
      await userService.logout();
      toast.success("Logout Success");
      setTimeout(() => {
        navigate("/");
      }, 1000)
    } catch (error) {
      const message = (error as Error).message;
      throw new Error(message);
    }
  }


  return (
    <div
      className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 shadow-xl rounded-lg text-gray-900 font-BAI">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='background-image' />
      </div>
      <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img className="object-cover object-center h-32" src={user?.imageProfile} alt='user-image' />
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{user?.firstName} {user?.lastName}</h2>
        <p className="text-gray-500">{user?.username}</p>
      </div>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <div>Email</div>
          <div>{user?.email}</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <div>Role</div>
          <div>{user?.role}</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <div>Phone Number</div>
          <div>{user?.phoneNumber}</div>
        </li>
      </ul>
      <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
        <li className="flex flex-col items-center justify-around">
          <div>Amount</div>
          <div>{user?.money}</div>
        </li>
        <li className="flex flex-col items-center justify-between">
          <div>Carbon Credit</div>
          <div>{user?.carbonCredit}</div>
        </li>
        <li className="flex flex-col items-center justify-around">
          <div>Retail CC</div>
          <div>{user?.retailCC}</div>
        </li>
      </ul>
      <div className="p-4 border-t mx-8 mt-2">
        <button onClick={() => handleSignOut()} className="w-1/2 block mx-auto rounded-full bg-primary-color hover:shadow-lg font-semibold text-gray-50 px-6 py-2">Signout</button>
      </div>
    </div>
  )
}

export default ProfilePage