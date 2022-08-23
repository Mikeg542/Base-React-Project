import React, { useEffect, useState } from "react";
import axios from "axios";

const TimesheetContainer = () => {
	const [loaded, setLoaded] = useState(false);
	const [sheets, setSheets] = useState([]);
	const [config, setConfig] = useState([]);

	useEffect(() => {
		//there is definitely a way to do this with ASYNC/AWAIT
		axios
			.all([
				axios.get("https://meowfacts.herokuapp.com/"), //this will get your sheets
				axios.get("https://meowfacts.herokuapp.com/"), //this will get any related config data
			])
			.then(([sheetResp, configResp]) => {
				setSheets(sheetResp.data);
				setConfig(configResp.data);
				setLoaded(true); // this wont trigger until both promises have resolved
			});
	}, []);

	return (
		<>
			{loaded &&
				!!sheets?.length &&
				sheets?.map((sheet) => (
					<div className="makeThisACustomComponent">{sheet.name}</div>
				))}
		</>
	);
};

export default TimesheetContainer;
