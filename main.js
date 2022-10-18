class MyError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = "MyError";
    }
}

function f() {
    try {
        return JSON.parse("{a}");
    } catch (err) {
        throw new MyError("Cannot parse json", err);
    }
}

f();
