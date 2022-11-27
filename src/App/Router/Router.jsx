import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/*" element={<Users />} />
         </Routes>
      </BrowserRouter>
   );
}
