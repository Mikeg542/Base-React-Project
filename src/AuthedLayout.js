import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

const AuthedLayout = () => {
	const [loaded, setLoaded] = useState(false);
	const [profileData, setProfileData] = useState({});

	useEffect(() => {
		//this loads in the users data such as id, name, etc.
		const fetchProfileData = async () => {
			const data = await fetch("https://yourapi.com");
			setProfileData(data.data);
			setLoaded(true);
		};
		fetchProfileData();
	}, []);

	return (
		<>
			{loaded && (
				<>
					<header>
						This is your header bar and will contain all your links
						(check{" "}
						<a href="https://reactrouter.com/docs/en/v6/components/nav-link">
							&lt;NavLink&gt;
						</a>{" "}
						component on react router docs)
					</header>
					<Outlet />
				</>
			)}
		</>
	);
};

export default AuthedLayout;
