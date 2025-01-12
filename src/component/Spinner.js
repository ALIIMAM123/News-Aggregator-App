'use client'

import { useState } from "react";
import { FadeLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <div className="flex justify-center items-center h-screen w-full bg-transparent">
            <FadeLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;
