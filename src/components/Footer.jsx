import React from "react";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="wood-grain"></div>
            </footer>
            <div className="footer-text-container">
                {/* used span because <h> styles were not behaving the same as button in header. Default styles? */}
                <span className="footer-text">A.T. wuz here 2023</span>
            </div>
        </>
    )
}

export default Footer;