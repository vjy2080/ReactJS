import React, { useState } from 'react';

export default function Loader() {
    const [loading,] = useState(false);
    return (
        loading ? <div>
            Loading...
        </div> : ""
    );
}
