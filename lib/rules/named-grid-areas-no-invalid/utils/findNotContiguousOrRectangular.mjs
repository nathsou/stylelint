/**
 * The area is a filled-in rectangle when its cells fill their bounding box.
 *
 * @param {string[][]} areas
 * @param {string} name
 * @returns {boolean}
 */
function isContiguousAndRectangular(areas, name) {
	let top = Infinity;
	let bottom = -Infinity;
	let left = Infinity;
	let right = -Infinity;
	let cellCount = 0;

	for (const [rowIndex, row] of areas.entries()) {
		for (const [columnIndex, cell] of row.entries()) {
			if (cell !== name) continue;

			cellCount++;
			top = Math.min(top, rowIndex);
			bottom = Math.max(bottom, rowIndex);
			left = Math.min(left, columnIndex);
			right = Math.max(right, columnIndex);
		}
	}

	return cellCount === (bottom - top + 1) * (right - left + 1);
}

/**
 * @param {string[][]} areas
 * @returns {string[]}
 */
function namedAreas(areas) {
	const names = new Set(areas.flat());

	names.delete('.');

	return [...names];
}

/**
 * @param {string[][]} areas
 * @returns {string[]}
 */
export default function findNotContiguousOrRectangular(areas) {
	return namedAreas(areas).filter((name) => !isContiguousAndRectangular(areas, name));
}
