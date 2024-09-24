function cosine_similarity(
	a_keys: number[],
	a_values: number[],
	b_keys: number[],
	b_values: number[]
): number {
	let dotAB = 0;
	let magA = 0;
	let magB = 0;

	const dictA: {[key: number]: number} = {};
	const dictB: {[key: number]: number} = {};

	for (let i = 0; i < a_keys.length; i++) {
		dictA[a_keys[i]] = a_values[i];
	}

	for (let i = 0; i < b_keys.length; i++) {
		dictA[b_keys[i]] = b_values[i];
	}

	for (const key in dictA) {
		if (dictB.hasOwnProperty(key)) {
			dotAB += dictA[key] * dictB[key];
		}
	}

	for (const value of a_values) {
		magA += value ** 2;
	}

	for (const value of b_values) {
		magB += value ** 2;
	}

	magA = Math.sqrt(magA);
	magB = Math.sqrt(magB);

	if (magA === 0 || magB === 0) {
		return 0;
	}

	return dotAB / (magA * magB);
}

function cosine_similarity(
	a_keys: number[],
	a_values: number[],
	b_keys: number[],
	b_values: number[]
): number {
	let dotAB = 0;
	let magA = 0;
	let magB = 0;

	const dictA: {[key: number]: number} = {};
	const dictB: {[key: number]: number} = {};

	for (let i = 0; i < a_keys.length; i++) {
		dictA[a_keys[i]] = a_values[i];
	}

	for (let i = 0; i < b_keys.length; i++) {
		dictB[b_keys[i]] = b_values[i];
	}

	for (const key in dictA) {
		if (dictB.hasOwnProperty(key)) {
			dotAB += dictA[key] * dictB[key];
		}
	}

	for (const value of a_values) {
		magA += value ** 2;
	}
	for (const value of b_values) {
		magB += value ** 2;
	}

	magA = Math.sqrt(magA);
	magB = Math.sqrt(magB);

	// Compute cosine similarity
	if (magA === 0 || magB === 0) {
		return 0;
	}
	return dotAB / (magA * magB);
}
