import React, { useEffect } from "react";
import HardCodedConnect from "./../components/HardCodedConnect/HardCodedConnect";

type Props = {};

const HardCodedPage = (props: Props) => {
    
    return (
        <section className="flex justify-center outline-1 outline-lime-500 w-full">
            <HardCodedConnect />
        </section>
    );
};

export default HardCodedPage;
