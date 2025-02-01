export default class Queue<T> {
    public length: number;
    private items: T[];

    constructor() {
        this.length = 0;
        this.items = [];
    }

    enqueue(item: T): void {
        this.items.push(item);
        this.length++;
    }

    deque(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        this.length--;
        return this.items.shift();
    }

    peek(): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        return this.items[0];
    }
}