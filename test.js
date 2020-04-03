import test from 'ava';
import scssaffold from '.';

test('title', t => {
	t.throws(() => {
		scssaffold(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(scssaffold('unicorns'), 'unicorns & rainbows');
});
