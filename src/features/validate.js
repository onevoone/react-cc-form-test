import validate from "card-validator"
import { updateCCNumberFieldsByProps } from "./fn"

function validateNumber(values, formRef, ccNumberFields) {
    const ccNumberStringValue = Object.values(values).join("")
    const { card, isValid } = validate.number(ccNumberStringValue)

    updateCCNumberFieldsByProps({
        ccNumberStringValue,
        card,
        formRef,
        ccNumberFields
    })

    if (!isValid) {
        const type = card.niceType && `( ${card.niceType} )`
        return `Invalid card number ${type}`
    }
}

const validateDate = values => {
    const { isValid } = validate.expirationDate(values)

    if (!isValid) {
        return "Invalid expiration date"
    }
}

const validateCvv = values => {
    const { isValid } = validate.cvv(values)

    if (!isValid) {
        return "Invalid CVV"
    }
}

const validatePostalCode = values => {
    const { isValid } = validate.postalCode(values)

    if (!isValid) {
        return "Invalid Postal code"
    }
}


export const validateCCForm = (values, formRef, ccNumberFields) => {
    let errors = {}

    if (Object.values(values.ccNumber).join("")) {
         errors.ccNumber = validateNumber(values.ccNumber, formRef, ccNumberFields)
    }

    if (Object.values(values.expDate).join("")) {
        errors.expDate = validateDate(values.expDate)
    }

    if (values.cvv) {
        errors.cvv = validateCvv(values.cvv)
    }

    if (values.postalCode) {
       errors.postalCode = validatePostalCode(values.postalCode)
    }

    return errors
}