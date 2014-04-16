/**
 * @author Charlie Calvert
 */

describe("QueueMaker Spec", function() {
	it("contains a QueueMaker spec with an expectation", function() {
		expect(true).toBe(true);
	});

	it("creates a queue", function() {
		var queue = QueueMaker();
		queue.pushTail('Hello');
		queue.pushTail('JavaScript');
		var head = queue.pullHead();
		console.log(head);
		$('#foo').html(head);
		head = queue.pullHead();
		$('#foo').append(head);
	});
});
