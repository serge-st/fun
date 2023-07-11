function* listener() {
    console.log('listening...');
    while (true) {
        // @ts-ignore
        let msg = yield;
        console.log('heard: ', msg);
    }
}

function* talker() {
    console.log('talking...');
    while (true) {
        console.log('say')
        yield;
    }
}

const l = listener();
l.next('hey')
l.next('a')

const t = talker()
t.next()
