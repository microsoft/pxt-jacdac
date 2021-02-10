for (let i = 0; i < 5; ++i) {
    const h = modules.humidity.humidity()
    console.log(h);
    pause(1000);
}
