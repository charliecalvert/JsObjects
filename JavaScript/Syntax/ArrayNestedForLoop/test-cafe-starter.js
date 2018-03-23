import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:30025`;  // specify the start page


test('My first test', async t => {
   await t
       .expect(Selector('#headstart').innerText).eql("For Loop Nested");
});

test('My second test', async t => {
    await t
        .expect(Selector('#span00').innerText).eql("span00");
});

test('My second test', async t => {
    await t
        .expect(Selector('#span01').innerText).eql("span01");
});