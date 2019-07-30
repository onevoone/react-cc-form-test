import React from "react"

export const Input = React.memo(props => (
    <input type="text" inputMode="numeric" {...props} />
))
