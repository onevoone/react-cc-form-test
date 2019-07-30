const changeFocus = (ccNumberStringValue, card, formRef) => {
   const cardNumberFieldsContainer = formRef.current.childNodes.item("cardNumberFields")
   const cardNumberFieldsList = cardNumberFieldsContainer.childNodes;

   for (let index = 0; index < cardNumberFieldsList.length; index++) {
      const element = cardNumberFieldsList[index]
      if (ccNumberStringValue.length === card.gaps[index]) {
         element.nextSibling.focus();
      }
   }
}

export function updateCCNumberFieldsByProps({
    ccNumberStringValue,
    card,
    formRef,
    ccNumberFields
}) {
    changeFocus(ccNumberStringValue, card, formRef)

    const count_of_fields = card.gaps.length + 1

    if (ccNumberFields.fields.length > count_of_fields) {
        ccNumberFields.removeLast()
    } else if (ccNumberFields.fields.length < count_of_fields) {
        ccNumberFields.appendField()
    }
}
