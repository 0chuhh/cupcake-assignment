import RatesPage from "pages/rates";
import { Route, Routes } from "react-router-dom";


export const Routing = () => {
	return (
		<Routes>
			<Route path="/" element={<RatesPage />} />
		</Routes>
	);
};
