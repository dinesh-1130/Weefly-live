export function parseLuggageOptions(input) {
	const options = []

	const regex =
		/(\d+)\s+\(\s*(\d+)\s*bags\s*-\s*([\dKg+\s]+?)(?:\s*total)?\s*-\s*([\d.]+)\s*(GBP)\)/g

	let match

	while ((match = regex.exec(input)) !== null) {
		const [_, optionStr, bagsStr, weightStr, priceStr, currency] = match

		const option = parseInt(optionStr)
		const bags = parseInt(bagsStr)

		// Handle "15Kg" or "15Kg+23Kg+15Kg"
		const weights = weightStr
			.replace(/\s/g, '')
			.split('+')
			.filter(w => w)
		const totalWeight = weights
			.map(w => parseInt(w.replace('Kg', '')))
			.reduce((a, b) => a + b, 0)
		const price = parseFloat(priceStr)

		options.push({
			option,
			bags,
			weights,
			totalWeight,
			price,
			currency,
		})
	}

	return options
}
