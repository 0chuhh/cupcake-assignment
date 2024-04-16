import { EndpointType } from "types/endpoint";

const delayPromise = (ms:number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
};

export const poll = <T>(endpoint: EndpointType<T>, callback: (data: T) => void) => {
    function run() {
        endpoint().then(({ data }) => {
            console.log(data);
            callback(data);
            return delayPromise(1000).then(run);

        }).catch(() => {
            return delayPromise(1000).then(run);
        });
    }
    return run();
};