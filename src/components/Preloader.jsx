import React, { useEffect } from "react";
import $ from "jquery";
import "../styles/Preloader.css";

function Preloader() {
    useEffect(() => {
        // $("body").css("overflow", "hidden");
        $("body").addClass("body-fixed");
    }, []);

    return (
        <section id="preloader">
            <div className="preloader-wrapper"></div>
        </section>
    );
}

export default Preloader;
