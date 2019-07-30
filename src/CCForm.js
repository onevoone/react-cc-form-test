import React from "react"
import { Formik } from "formik"
import validateCard from "card-validator"

import { ErrorBox, Input } from "./components"
import {
	useCCNumberFields,
	updateCCNumberFieldsByProps,
	validateCCForm
} from "./features"

export const CCForm = () => {
	const formRef = React.useRef()
	const ccNumberFields = useCCNumberFields()

	return (
		<Formik
			initialValues={{
				ccNumber: {
					value1: "",
					value2: "",
					value3: "",
					value4: "",
				},
				expDate: {
					month: "",
					year: "",
				},
				cvv: "",
				postalCode: "",
			}}
			validate={values => validateCCForm(values, formRef, ccNumberFields)}
			onSubmit={(values, { setSubmitting }) => {
				setSubmitting(false)
				console.log(`values`, values)
			}}
		>
			{(props) => (
				<div className="container">
					<ErrorBox errors={props.errors} />
					<form onSubmit={props.handleSubmit} ref={formRef}>
						<div id="cardNumberFields">
							{ccNumberFields.fields.map((obj, k) => (
								<Input
									key={k}
									name={obj.name}
									value={props.values[obj.name]}
									onBlur={props.handleBlur}
									onChange={props.handleChange}
								/>
							))}
						</div>
						<div id="cardDateFields">
							<Input
								name="expDate.month"
								value={props.values.expDate.month}
								onBlur={props.handleBlur}
								onChange={props.handleChange}
								placeholder="month"
							/>
							<Input
								name="expDate.year"
								value={props.values.expDate.year}
								onBlur={props.handleBlur}
								onChange={props.handleChange}
								placeholder="year"
							/>
						</div>
						<Input
							name="cvv"
							value={props.values.cvv}
							onBlur={props.handleBlur}
							onChange={props.handleChange}
							placeholder="cvv"
						/>
						<Input
							name="postalCode"
							value={props.values.postalCode}
							onBlur={props.handleBlur}
							onChange={props.handleChange}
							placeholder="postal code"
						/>
						<button type="submit">Submit</button>
					</form>
				</div>
			)}
		</Formik>
	)
}
