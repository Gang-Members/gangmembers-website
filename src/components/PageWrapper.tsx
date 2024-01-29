import React from "react";

const PageWrapper: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return (
        <div className='bg-background text-text font-body h-[200vh]'>
            { children }
        </div>
    );
};

export default PageWrapper;