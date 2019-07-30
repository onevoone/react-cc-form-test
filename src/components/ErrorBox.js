import React from "react"

export const ErrorBox = React.memo(({ errors }) => {
    const errorList = Object.values(errors).filter(Boolean)

    if (errorList.length === 0) {
        return null
    }

    return (
        <div className="error-box">
            <ul>
                {errorList.map((obj, k) =>
                    obj && <li key={k}>{obj}</li>
                )}
            </ul>
        </div>
    )
})
