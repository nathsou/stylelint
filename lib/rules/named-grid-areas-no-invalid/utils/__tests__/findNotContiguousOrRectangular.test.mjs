import findNotContiguousOrRectangular from '../findNotContiguousOrRectangular.mjs';

describe('findNotContiguousOrRectangular finds', () => {
	test('nothing', () => {
		expect(
			findNotContiguousOrRectangular([
				['a', 'a', '.'],
				['a', 'a', '.'],
				['.', 'b', 'c'],
			]),
		).toEqual([]);
	});

	test('non-contiguous area', () => {
		expect(
			findNotContiguousOrRectangular([
				['a', 'a', '.'],
				['a', 'a', '.'],
				['.', 'b', 'a'],
			]),
		).toEqual(['a']);
	});

	test('non-contiguous area within a row', () => {
		expect(findNotContiguousOrRectangular([['a', 'b', 'a']])).toEqual(['a']);
	});

	test('non-contiguous area across rows with the same columns', () => {
		expect(findNotContiguousOrRectangular([['a'], ['b'], ['a']])).toEqual(['a']);
	});

	test('non-contiguous area when area is not in an adjacent row', () => {
		expect(
			findNotContiguousOrRectangular([
				['header', 'header', 'header', 'header'],
				['main', 'main', '.', 'sidebar'],
				['footer', 'footer', 'footer', 'header'],
			]),
		).toEqual(['header']);
	});
});
