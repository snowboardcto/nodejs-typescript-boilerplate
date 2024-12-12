import { HelloWorld } from "./hello-world";

describe("Hello World", () => {
    it("Should return Hello World!", () => {
        const helloWorld = new HelloWorld();
        expect(helloWorld.getHello()).toBe("Hello World!");
    });
});