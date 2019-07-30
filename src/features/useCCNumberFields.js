const detaultName = "ccNumber.value"

const getName = index => detaultName.concat(index)

let fields = Array.from(
    { length: 4 },
    (v, index) => ({ name: getName(index + 1) })
)

export const useCCNumberFields = () => {
   const appendField = () => {
      fields.push({ name: getName(fields.length + 1) })
   }

   const removeLast = () => {
      fields.pop()
   }

   return { fields, appendField, removeLast }
}
