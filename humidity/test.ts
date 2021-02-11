for (let i = 0; i < 5; ++i) {
    const h = modules.humidity.reading()
    console.log(h);
    pause(1000);
}
