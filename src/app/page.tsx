// app/page.tsx
"use client"
import { useEffect, useState } from "react";
import Banner from './banners/page';
import Bannersmall from './bannersmall/page';
import Heading from './headingsale/page';
import Topitems from './TopItems/page';
import DownPost from './downPost/page';
import Downpost2 from './downpost2/page';
import Bannerbottom from './bannerbottom/page';
import Categories from './categories/page';

export default function Home() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user is logged in by checking sessionStorage
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser).email); // Store email or any user data
    }
  }, []);

  return (
    <div>
      {/* Display Welcome message if the user is logged in */}
      {user ? (
        <div className="bg-green-100 text-center p-4">
          <h2 className="text-2xl font-bold">Welcome back, {user}!</h2>
          <p>You are successfully logged in.</p>
        </div>
      ) : (
        <div className="bg-black text-white text-center p-4">
          <h2 className="text-2xl font-bold">Please sign up or sign in!</h2>
        </div>
      )}

      {/* Rest of the content */}
      <Banner />
      <Bannersmall />
      <Heading />
      <Topitems />
      <DownPost />
      <Downpost2 />
      <Bannerbottom />
      <Categories />
    </div>
  );
}
