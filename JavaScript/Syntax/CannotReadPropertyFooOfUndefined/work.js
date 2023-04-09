// Won't work because we do not pass an object to bar. This error happens a lot, and this example shows how it happens.

function bar(foo) {
    console.log(foo.bar);
}

bar();
