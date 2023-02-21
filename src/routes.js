import React from 'react';
import { Route, Routes} from 'react-router-dom';
import {Home} from "./pages/home";
import {Contacts} from "./pages/contacts";
import {TravelHistory} from "./pages/travel_history";
import {Tours} from "./pages/tours";
import {GornoAltaisk} from "./pages/gorno-altaisk";
import {Petrozavodsk} from "./pages/petrozavodsk";
import {PetropavlovskKamchatsky} from "./pages/petropavlovsk-kamchatsky";

export const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/travel_history" element={<TravelHistory />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/gorno-altaisk" element={<GornoAltaisk />} />
                <Route path="/petrozavodsk" element={<Petrozavodsk />} />
                <Route path="/petropavlovsk-kamchatsky" element={<PetropavlovskKamchatsky />} />
            </Routes>
        </div>
    );
}