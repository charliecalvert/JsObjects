import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `http://localhost:30025`;  // specify the start page


test('My first test', async t => {
   await t
       .expect(Selector('#headstart').innerText).eql("Array with Two Dimensions");
});

test('My second test', async t => {
    await t
        .expect(Selector('#item00').innerText).eql("0");
});

test('My third test', async t => {
    await t
        .expect(Selector('#item21').innerText).eql("X");
});